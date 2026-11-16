/**
 * Fetch full Hongfa product catalog from https://www.hongfa.com/vi/product
 * into src/data/hongfa/catalog.json
 *
 * Usage: node scripts/fetch-hongfa-catalog.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "src/data/hongfa/catalog.json");

const BASE = "https://www.hongfa.com";
const SOURCE = "https://source.hongfa.com";

/** Top-level groups matching hongfa.com/vi/product */
const GROUPS = [
  {
    id: "relays",
    label: "Rơ le",
    lists: [
      { slug: "industrial-relay", cateId: "2", isRelay: true, path: "/product/industrial-relay/", label: "Rơ le công nghiệp" },
      { slug: "power-relay", cateId: "3", isRelay: true, path: "/product/power-relay/", label: "Rơ le công suất" },
      { slug: "latching-relay", cateId: "4", isRelay: true, path: "/product/latching-relay/", label: "Rơ-le chốt" },
      { slug: "automotive-relay", cateId: "5", isRelay: true, path: "/product/automotive-relay/", label: "Rơ le ô tô" },
      { slug: "signal-relay", cateId: "6", isRelay: true, path: "/product/signal-relay/", label: "Rơ le tín hiệu" },
      { slug: "dc-relay", cateId: "7", isRelay: true, path: "/product/dc-relay/", label: "High Voltage DC Relay" },
      { slug: "relay-socket", cateId: "8", isRelay: true, path: "/product/relay-socket/", label: "Ổ cắm rơ le" },
      { slug: "high-frequency-relay", cateId: "1035", isRelay: true, path: "/product/high-frequency-relay/", label: "Rơ le tần số cao" },
      { slug: "relay-module", cateId: "1070", isRelay: true, path: "/product/relay-module/", label: "Relay Module" },
      { slug: "reed-relay", cateId: "1071", isRelay: true, path: "/product/reed-relay/", label: "Rơ-le lưỡi gà" },
      { slug: "solid-state-relay", cateId: "1073", isRelay: true, path: "/product/solid-state-relay/", label: "Rơ-le bán dẫn" },
    ],
  },
  {
    id: "electronic-module",
    label: "Mô-đun điện tử ứng dụng",
    lists: [
      { slug: "safe-relay-module", cateId: "1060", isRelay: false, path: "/product/safe-relay-module/", label: "Mô-đun rơ-le an toàn" },
      { slug: "motor-start-relay-module", cateId: "1061", isRelay: false, path: "/product/motor-start-relay-module/", label: "Mô-đun rơ-le khởi động động cơ" },
      { slug: "switching-power-supply-module", cateId: "1062", isRelay: false, path: "/product/switching-power-supply-module/", label: "Switching Power Supply Module" },
      { slug: "Interface-module", cateId: "1063", isRelay: false, path: "/product/Interface-module/", label: "Interface Module" },
      { slug: "electromagnetic-relay-module", cateId: "1064", isRelay: false, path: "/product/electromagnetic-relay-module/", label: "Mô-đun rơ-le điện từ" },
      { slug: "time-relay-module", cateId: "1065", isRelay: false, path: "/product/time-relay-module/", label: "Mô-đun rơ-le thời gian" },
      { slug: "monitor-relay-module", cateId: "1074", isRelay: false, path: "/product/monitor-relay-module/", label: "Mô-đun rơ-le giám sát" },
    ],
  },
  {
    id: "low-voltage",
    label: "Thiết bị điện áp thấp",
    lists: [
      { slug: "control-gear", cateId: "10", mode: "lv", path: "/product/low-voltage/", label: "Thiết bị điều khiển", category: "control-gear" },
      { slug: "power-distribution-components", cateId: "11", mode: "lv", path: "/product/low-voltage/", label: "Linh kiện phân phối điện", category: "power-distribution" },
      { slug: "din-rail-protection-devices", cateId: "1038", mode: "lv", path: "/product/low-voltage/", label: "Thiết bị bảo vệ thanh ray DIN", category: "din-rail" },
    ],
  },
  {
    id: "mv-lv-devices",
    label: "LV&MV Devices",
    lists: [
      { slug: "mv-switchgear", cateId: "1030", mode: "mvlv", path: "/product-range/mv-switchgear/", label: "Thiết bị đóng cắt trung thế" },
      { slug: "lv-switchgear", cateId: "1031", mode: "mvlv", path: "/product-range/lv-switchgear/", label: "Thiết bị đóng cắt hạ thế" },
    ],
  },
  {
    id: "connectors",
    label: "Đầu nối",
    lists: [
      { slug: "rf-connector", cateId: "1058", isRelay: false, path: "/product/rf-connector/", label: "RF Connector" },
      { slug: "power-connector", cateId: "1069", isRelay: false, path: "/product/power-connector/", label: "Rectangular Power Connector" },
      { slug: "printed-circuit-board-connector", cateId: "1077", isRelay: false, path: "/product/printed-circuit-board-connector/", label: "PCB Connector" },
      { slug: "circular-power-connector", cateId: "1079", isRelay: false, path: "/product/circular-power-connector/", label: "Circular Power Connector" },
      { slug: "industrial-connector", cateId: "1080", isRelay: false, path: "/product/industrial-connector/", label: "Industrial Connector" },
    ],
  },
  {
    id: "film-capacitors",
    label: "Tụ điện màng",
    lists: [
      { slug: "emi-capacitor", cateId: "1016", isRelay: false, path: "/product/emi-capacitor/", label: "EMI Capacitor" },
      { slug: "motor-run-capacitor", cateId: "1017", isRelay: false, path: "/product/motor-run-capacitor/", label: "Motor Run Capacitor" },
      { slug: "power-electronic-capacitor", cateId: "1018", isRelay: false, path: "/product/power-electronic-capacitor/", label: "Tụ điện tử công suất" },
    ],
  },
  {
    id: "current-sensor",
    label: "Cảm biến dòng điện",
    lists: [
      { slug: "current-transformer", cateId: "1048", isRelay: false, path: "/product/current-transformer/", label: "Biến dòng" },
      { slug: "hall-sensor", cateId: "1050", isRelay: false, path: "/product/hall-sensor/", label: "Cảm biến Hall" },
      { slug: "rogowski-coils", cateId: "1051", isRelay: false, path: "/product/rogowski-coils/", label: "Cuộn dây Rogowski" },
      { slug: "fluxgate", cateId: "1072", isRelay: false, path: "/product/fluxgate/", label: "Cổng từ thông" },
    ],
  },
  {
    id: "fuse",
    label: "Cầu chì",
    lists: [
      { slug: "electrical-fuse", cateId: "1076", isRelay: false, path: "/product/electrical-fuse/", label: "Cầu chì điện" },
    ],
  },
  {
    id: "vacuum-interrupter",
    label: "Bộ ngắt chân không",
    lists: [
      { slug: "vacuum-interrupters-for-circuit-breaker", cateId: "1020", isRelay: false, path: "/product/vacuum-interrupters-for-circuit-breaker/", label: "VI Cho Máy cắt" },
      { slug: "vacuum-interrupter-for-load-switch", cateId: "1021", isRelay: false, path: "/product/vacuum-interrupter-for-load-switch/", label: "VI Cho Công tắc tải" },
      { slug: "vacuum-interrupter-for-contactor", cateId: "1022", isRelay: false, path: "/product/vacuum-interrupter-for-contactor/", label: "VI Cho Contactor" },
    ],
  },
  {
    id: "automation",
    label: "Thiết bị tự động hóa",
    lists: [
      { slug: "Industrial-robot", cateId: "1039", isRelay: false, path: "/product/Industrial-robot/", label: "Robot công nghiệp" },
      { slug: "automatic-production-line", cateId: "1040", isRelay: false, path: "/product/automatic-production-line/", label: "Dây chuyền sản xuất tự động" },
    ],
  },
  {
    id: "others",
    label: "Khác",
    lists: [
      { slug: "snap-action-switch", cateId: "1067", isRelay: false, path: "/product/snap-action-switch/", label: "Công tắc hành trình" },
      { slug: "vacuum-pump", cateId: "1068", isRelay: false, path: "/product/vacuum-pump/", label: "Bơm chân không" },
    ],
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function postForm(url, data) {
  const body = new URLSearchParams();
  for (const [k, v] of Object.entries(data)) {
    if (v === undefined || v === null) continue;
    body.append(k, String(v));
  }
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; BechnologiesBot/1.0)",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json, text/javascript, */*; q=0.01",
    },
    body,
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

function absImg(p) {
  if (!p) return null;
  const clean = String(p).replace(/^\/\//, "/").replace(/\/+/g, "/");
  if (clean.startsWith("http")) return clean.replace("https:/source", "https://source");
  return `${SOURCE}${clean.startsWith("/") ? "" : "/"}${clean}`;
}

function stripHtml(s) {
  return String(s || "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/●/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(code) {
  return String(code || "")
    .trim()
    .toLowerCase()
    .replace(/[\/\\]+/g, "-")
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

async function fetchGetProducts(list, group) {
  const limit = 50;
  let page = 1;
  let total = Infinity;
  const items = [];
  while ((page - 1) * limit < total) {
    const res = await postForm(`${BASE}/vi/Product/GetProducts`, {
      limit,
      page,
      cateId: list.cateId,
      isRelayModel: list.isRelay ? "True" : "False",
      fliterItem: "",
    });
    if (res.code !== 0 && res.code !== undefined && res.code !== "0") {
      throw new Error(`GetProducts ${list.slug}: ${JSON.stringify(res).slice(0, 200)}`);
    }
    total = Number(res.count) || 0;
    const rows = res.data || [];
    for (const row of rows) {
      const code = row.UrlCode || row.Code || row.Code1;
      if (!code) continue;
      const features = stripHtml(row.Features);
      items.push({
        id: slugify(code),
        code,
        name: code,
        type: row.Name || list.label,
        category: list.category || list.slug,
        group: group.id,
        listSlug: list.slug,
        listLabel: list.label,
        description: features || row.Name || list.label,
        range: row.SwitchingCurrent || row.Shells || undefined,
        image: absImg(row.ImgPath || row.IsNewImgPath),
        pdf: row.PdfPath ? absImg(row.PdfPath) : null,
        sourceUrl: `${BASE}${list.path}${code}`,
        highlights: [list.label, group.label].filter(Boolean),
      });
    }
    console.log(`  ${list.slug} page ${page}/${Math.max(1, Math.ceil(total / limit))} (+${rows.length}, total ${total})`);
    if (!rows.length) break;
    page += 1;
    await sleep(120);
  }
  return items;
}

async function fetchLvRange(list, group) {
  const res = await postForm(`${BASE}/Product/doFilterRange`, {
    limit: 200,
    page: 1,
    filterList: "",
    cateId: list.cateId,
  });
  const ranges = res.Data3 || [];
  const items = [];
  for (const range of ranges) {
    for (const p of range.Products || []) {
      const code = p.Code;
      if (!code) continue;
      items.push({
        id: slugify(code),
        code,
        name: code,
        type: p.ProductType || range.ProductRange || list.label,
        category: list.category || list.slug,
        group: group.id,
        listSlug: list.slug,
        listLabel: list.label,
        description: p.Name || `${code} — ${p.ProductType || list.label}`,
        range: p.Shells || undefined,
        image: absImg(p.ImgRightPath || p.ImgPath || p.ImgLeftPath),
        pdf: null,
        sourceUrl: `${BASE}${list.path}${code}`,
        highlights: [range.ProductRange, list.label, group.label].filter(Boolean),
      });
    }
  }
  console.log(`  ${list.slug} LV ranges ${ranges.length} → ${items.length} series`);
  return items;
}

async function fetchMvlv(list, group) {
  const res = await postForm(`${BASE}/Products/Mvlv/RefFilter`, {
    cateId: list.cateId,
  });
  const ranges = res.Data3 || [];
  const items = [];
  for (const range of ranges) {
    for (const p of range.Products || []) {
      const code = p.Code;
      if (!code) continue;
      items.push({
        id: slugify(code),
        code,
        name: code,
        type: p.ProductType || range.ProductRange || list.label,
        category: list.slug,
        group: group.id,
        listSlug: list.slug,
        listLabel: list.label,
        description: p.Name || `${code} — ${p.ProductType || list.label}`,
        range: p.Shells || undefined,
        image: absImg(p.ImgRightPath || p.ImgPath || p.ImgLeftPath),
        pdf: null,
        sourceUrl: `${BASE}${list.path}${code}`,
        highlights: [list.label, group.label].filter(Boolean),
      });
    }
  }
  console.log(`  ${list.slug} MVLV → ${items.length} series`);
  return items;
}

async function main() {
  const all = [];
  const byList = {};

  for (const group of GROUPS) {
    console.log(`\n== ${group.label} ==`);
    for (const list of group.lists) {
      try {
        let items = [];
        if (list.mode === "lv") items = await fetchLvRange(list, group);
        else if (list.mode === "mvlv") items = await fetchMvlv(list, group);
        else items = await fetchGetProducts(list, group);
        byList[list.slug] = items.length;
        all.push(...items);
      } catch (err) {
        console.error(`FAIL ${list.slug}:`, err.message || err);
        byList[list.slug] = 0;
      }
      await sleep(200);
    }
  }

  // Dedupe by id, prefer first occurrence
  const seen = new Set();
  const products = [];
  for (const p of all) {
    if (!p.id || seen.has(p.id)) continue;
    seen.add(p.id);
    products.push(p);
  }

  const payload = {
    updatedAt: new Date().toISOString(),
    source: "https://www.hongfa.com/vi/product",
    groups: GROUPS.map((g) => ({
      id: g.id,
      label: g.label,
      lists: g.lists.map((l) => ({
        slug: l.slug,
        label: l.label,
        category: l.category || l.slug,
        count: byList[l.slug] || 0,
      })),
    })),
    count: products.length,
    products,
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(payload, null, 2));
  console.log(`\nWrote ${products.length} products → ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
