import type { Metadata } from "next";
import { getSolutionBySlug } from "@/lib/solutions";
import SolutionPageShell from "@/components/solutions/SolutionPageShell";
import AiCameraSolution from "@/components/solutions/AiCameraSolution";

const solution = getSolutionBySlug("ai-camera")!;

export const metadata: Metadata = {
  title: `${solution.shortTitle} | Bechnologies`,
  description: solution.description,
};

export default function AiCameraSolutionPage() {
  return (
    <SolutionPageShell
      title={solution.title}
      description={solution.description}
      tag={solution.tag}
    >
      <AiCameraSolution />
    </SolutionPageShell>
  );
}
