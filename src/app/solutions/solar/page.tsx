import type { Metadata } from "next";
import { getSolutionBySlug } from "@/lib/solutions";
import SolutionPageShell from "@/components/solutions/SolutionPageShell";
import SolarSolution from "@/components/solutions/SolarSolution";

const solution = getSolutionBySlug("solar")!;

export const metadata: Metadata = {
  title: `${solution.shortTitle} | Bechnologies`,
  description: solution.description,
};

export default function SolarSolutionPage() {
  return (
    <SolutionPageShell
      title={solution.title}
      description={solution.description}
      tag={solution.tag}
    >
      <SolarSolution />
    </SolutionPageShell>
  );
}
