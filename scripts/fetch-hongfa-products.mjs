/**
 * Fetch Hongfa low-voltage product detail pages into src/data/hongfa/
 * Usage:
 *   node scripts/fetch-hongfa-products.mjs
 *   node scripts/fetch-hongfa-products.mjs --only din,power
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "src/data/hongfa");
const IMG_DIR = path.join(ROOT, "public/images/hongfa/products");
const PRODUCTS_PATH = path.join(OUT_DIR, "products.json");

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.mkdirSync(IMG_DIR, { recursive: true });

/** @type {{ model: string; category: string; series: string; seriesSlug: string; type: string }[]} */
const CATALOG = [
  // Control Gear
  ...["UEC3-06C","UEC3-09C","UEC3-12C","UEC3-18C","UEC3-25C","UEC3-32C","UEC3-38C"].map((model) => ({
    model, category: "control-gear", series: "UEC3-C", seriesSlug: "uec3-c", type: "Industry IEC Contactors",
  })),
  ...["UEC1-25C","UEC1-95C"].map((model) => ({
    model, category: "control-gear", series: "UEC1-C", seriesSlug: "uec1-c", type: "Industry IEC Contactors",
  })),
  { model: "HFUC3-18C", category: "control-gear", series: "HFUC3-C", seriesSlug: "hfuc3-c", type: "Industry IEC Contactors" },
  ...["HFUC5-09C","HFUC5-95C"].map((model) => ({
    model, category: "control-gear", series: "HFUC5-C", seriesSlug: "hfuc5-c", type: "Industry IEC Contactors",
  })),

  // DIN-Rail
  ...["UEB6-40","UEB6-63","UEB6-125","UEB6-63MD"].map((model) => ({
    model, category: "din-rail", series: "UEB6", seriesSlug: "ueb6", type: "MCB",
  })),
  ...["UEB3-40","UEB3-63","UEB3-125","UEB3-63MD"].map((model) => ({
    model, category: "din-rail", series: "UEB3", seriesSlug: "ueb3", type: "MCB",
  })),
  ...["UEZ3-40","UEZ3-63","UEZ3-125"].map((model) => ({
    model, category: "din-rail", series: "UEZ3", seriesSlug: "uez3", type: "Smart MCB",
  })),
  ...["HFUZ5-63HD","HFUZ5-125HD"].map((model) => ({
    model, category: "din-rail", series: "HFUZ5", seriesSlug: "hfuz5", type: "Smart MCB 5G",
  })),
  { model: "UEG6-125", category: "din-rail", series: "UEG6", seriesSlug: "ueg6", type: "Switch Disconnector" },

  // Power Distribution
  ...["UEW6-1600","UEW6-2000","UEW6-4000"].map((model) => ({
    model, category: "power-distribution", series: "UEW6", seriesSlug: "uew6", type: "Air Circuit Breaker (ACB)",
  })),
  ...["UEM5-100","UEM5-160","UEM5-250","UEM5-400","UEM5-630","UEM5-800"].map((model) => ({
    model, category: "power-distribution", series: "UEM5", seriesSlug: "uem5", type: "MCCB 3–4P",
  })),
];

const args = process.argv.slice(2);
const onlyArg = args.find((a) => a.startsWith("--only="))?.split("=")[1]
  || (args.includes("--only") ? args[args.indexOf("--only") + 1] : null);
const force = args.includes("--force");

const filterCats = onlyArg
  ? onlyArg.split(",").map((s) => s.trim())
  : null;

const QUEUE = CATALOG.filter((item) => {
  if (!filterCats) return true;
  return filterCats.some((c) =>
    c === "din" ? item.category === "din-rail"
    : c === "power" ? item.category === "power-distribution"
    : c === "control" ? item.category === "control-gear"
    : item.category === c || item.seriesSlug === c
  );
});

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; BechnologiesBot/1.0)",
      Accept: "text/html",
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

function decode(html) {
  return html
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractBetween(html, startRe, endRe) {
  const s = html.search(startRe);
  if (s < 0) return "";
  const rest = html.slice(s);
  const e = rest.search(endRe);
  return e > 0 ? rest.slice(0, e) : rest.slice(0, 8000);
}

function parseTablePairs(sectionHtml) {
  const pairs = [];
  const rowRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let m;
  while ((m = rowRe.exec(sectionHtml))) {
    const cells = [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi)].map(
      (c) => decode(c[1])
    );
    if (cells.length >= 2 && cells[0] && cells[1]) {
      pairs.push({ label: cells[0], value: cells[1] });
    } else if (cells.length === 1 && cells[0].length > 20) {
      pairs.push({ label: "feature", value: cells[0] });
    }
  }
  return pairs;
}

async function downloadImage(url, slug) {
  if (!url) return null;
  const clean = url
    .replace("//Uploads", "/Uploads")
    .replace("https://source.hongfa.com//", "https://source.hongfa.com/");
  const ext = path.extname(new URL(clean).pathname) || ".jpg";
  const file = `${slug}${ext}`;
  const dest = path.join(IMG_DIR, file);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    return `/images/hongfa/products/${file}`;
  }
  const res = await fetch(clean, {
    headers: { "User-Agent": "Mozilla/5.0", Accept: "image/*" },
  });
  if (!res.ok) return clean;
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log("  img", file, buf.length);
  return `/images/hongfa/products/${file}`;
}

async function parseProduct(meta) {
  const { model, category, series, seriesSlug, type } = meta;
  const url = `https://www.hongfa.com/product/low-voltage-item/${model}`;
  const html = await fetchHtml(url);

  const imgMatch = html.match(
    /https?:\/\/source\.hongfa\.com\/+Uploads\/Product\/LowImg\/[a-z0-9]+\.(?:jpg|png|jpeg)/i
  );
  const remoteImage = imgMatch
    ? imgMatch[0]
        .replace("//Uploads", "/Uploads")
        .replace("hongfa.com//", "hongfa.com/")
    : null;

  const charSection = extractBetween(
    html,
    /Product Characteristics/i,
    /Technical Parameters|The Product is Compatible|Dimensions|Product Configuration/i
  );
  let features = parseTablePairs(charSection)
    .filter((p) => p.label === "feature" || p.value.length > 30)
    .map((p) => p.value)
    .filter((v, i, a) => v && a.indexOf(v) === i)
    .slice(0, 10);

  if (features.length === 0) {
    const descMatch = html.match(
      /<meta\s+name="description"\s+content="([^"]+)"/i
    );
    if (descMatch) features = [decode(descMatch[1])];
  }

  const techSection = extractBetween(
    html,
    /Technical Parameters/i,
    /Dimensions|Related Products|Inquiry|Thank you for subscribing|Product Configuration/i
  );
  const specs = parseTablePairs(techSection)
    .filter((p) => p.label !== "feature")
    .slice(0, 35);

  const related = [
    ...html.matchAll(/\/product\/low-voltage-item\/([A-Z0-9-]+)/gi),
  ]
    .map((m) => m[1])
    .filter((id, i, a) => a.indexOf(id) === i && id !== model)
    .slice(0, 12);

  const docs = [
    ...html.matchAll(/href="([^"]+\.pdf)"[^>]*>([\s\S]*?)<\/a>/gi),
  ]
    .map((m) => ({
      href: m[1].startsWith("http") ? m[1] : `https://www.hongfa.com${m[1]}`,
      label: decode(m[2]) || "PDF",
    }))
    .filter((d, i, a) => a.findIndex((x) => x.href === d.href) === i)
    .slice(0, 8);

  const image = await downloadImage(remoteImage, model.toLowerCase());

  const ie =
    specs.find((s) => /Rated Operational Current|Rated current|Current range/i.test(s.label)) ||
    specs.find((s) => /\[Ie\]/i.test(s.label));
  const amp = ie?.value.match(/([\d.]+)\s*A/);

  return {
    id: model.toLowerCase(),
    slug: model.toLowerCase(),
    name: model,
    model,
    series,
    seriesSlug,
    type,
    range: amp ? `${amp[1]}A` : undefined,
    description: features[0] || `${model} — Hongfa ${type}.`,
    shortDescription: `${type} ${series} — model ${model}${amp ? `, ${amp[1]}A` : ""}.`,
    features,
    specs,
    related,
    docs,
    image,
    sourceUrl: url,
    category,
  };
}

function buildSeries(products) {
  const map = {};
  const descBySeries = {
    "uec3-c": "Contactor AC chất lượng cao — dải 6…38A (AC-3).",
    "uec1-c": "Contactor AC công nghiệp UEC1-C cho tải trung bình đến lớn.",
    "hfuc3-c": "Contactor IEC HFUC3-C dải 06…38A.",
    "hfuc5-c": "Contactor IEC HFUC5 dải dòng rộng.",
    ueb6: "MCB UEB6 — bảo vệ quá tải & ngắn mạch trên thanh DIN.",
    ueb3: "MCB UEB3 cho phân phối dân dụng và thương mại.",
    uez3: "Smart MCB UEZ3 — giám sát, điều khiển từ xa, tự đóng lại.",
    hfuz5: "Smart MCB 5G HFUZ5 cho nhà thông minh và quản lý từ xa.",
    ueg6: "Dao cách ly UEG6 lắp thanh DIN.",
    uew6: "ACB UEW6 cho tủ phân phối chính (1600–4000A).",
    uem5: "MCCB UEM5 AC — khung 100…800A.",
  };

  for (const p of products) {
    if (!map[p.seriesSlug]) {
      map[p.seriesSlug] = {
        id: p.seriesSlug,
        slug: p.seriesSlug,
        name: p.series,
        title: `${p.type} ${p.series}`,
        description: descBySeries[p.seriesSlug] || `${p.type} series ${p.series}.`,
        category: p.category,
        href: `https://www.hongfa.com/product/low-voltage/${p.series}`,
        image: p.image,
        models: [],
      };
    }
    map[p.seriesSlug].models.push(p.slug);
    if (!map[p.seriesSlug].image) map[p.seriesSlug].image = p.image;
  }
  return Object.values(map);
}

const existing = fs.existsSync(PRODUCTS_PATH)
  ? JSON.parse(fs.readFileSync(PRODUCTS_PATH, "utf8"))
  : { products: [] };

const bySlug = new Map(existing.products.map((p) => [p.slug, p]));

for (const meta of QUEUE) {
  const slug = meta.model.toLowerCase();
  if (!force && bySlug.has(slug) && (bySlug.get(slug).specs?.length || 0) > 5) {
    console.log("skip existing", meta.model);
    continue;
  }
  try {
    console.log("fetch", meta.model);
    const p = await parseProduct(meta);
    bySlug.set(p.slug, p);
    await new Promise((r) => setTimeout(r, 350));
  } catch (e) {
    console.warn("skip", meta.model, e.message);
  }
}

const products = [...bySlug.values()];
fs.writeFileSync(
  PRODUCTS_PATH,
  JSON.stringify({ updatedAt: new Date().toISOString(), products }, null, 2)
);
fs.writeFileSync(
  path.join(OUT_DIR, "series.json"),
  JSON.stringify(
    { updatedAt: new Date().toISOString(), series: buildSeries(products) },
    null,
    2
  )
);

console.log("done total", products.length);
console.log(
  [...new Set(products.map((p) => p.category))]
    .map((c) => `${c}: ${products.filter((p) => p.category === c).length}`)
    .join(" | ")
);
