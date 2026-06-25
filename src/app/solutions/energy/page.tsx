import type { Metadata } from "next";
import { getSolutionBySlug } from "@/lib/solutions";
import SolutionPageShell from "@/components/solutions/SolutionPageShell";
import EnergySolution from "@/components/solutions/EnergySolution";

const solution = getSolutionBySlug("energy")!;

export const metadata: Metadata = {
  title: `${solution.shortTitle} | Bechnologies`,
  description: solution.description,
};

export default function EnergySolutionPage() {
  return (
    <SolutionPageShell
      title={solution.title}
      description={solution.description}
      tag={solution.tag}
    >
      <EnergySolution embedded />
    </SolutionPageShell>
  );
}
