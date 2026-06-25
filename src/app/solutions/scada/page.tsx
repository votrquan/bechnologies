import type { Metadata } from "next";
import { getSolutionBySlug } from "@/lib/solutions";
import SolutionPageShell from "@/components/solutions/SolutionPageShell";
import ScadaSolution from "@/components/solutions/ScadaSolution";

const solution = getSolutionBySlug("scada")!;

export const metadata: Metadata = {
  title: `${solution.shortTitle} | Bechnologies`,
  description: solution.description,
};

export default function ScadaSolutionPage() {
  return (
    <SolutionPageShell
      title={solution.title}
      description={solution.description}
      tag={solution.tag}
    >
      <ScadaSolution embedded />
    </SolutionPageShell>
  );
}
