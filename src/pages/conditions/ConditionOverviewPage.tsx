import { useLocation } from "react-router-dom";
import ConditionDetail from "@/components/ConditionDetail";
import { getCondition } from "@/data/conditions";
import { usePageMeta } from "@/compat/usePageMeta";

// Renders /<slug>-overview, e.g. /spider-veins-overview
export default function ConditionOverviewPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "").replace(/-overview$/, "");
  const condition = getCondition(slug);

  usePageMeta(
    condition ? `${condition.name} | Sira Vascular` : undefined,
    condition?.tagline,
  );

  if (!condition) {
    return (
      <main className="bg-background px-5 py-24 text-center">
        <h1 className="font-heading text-2xl text-secondary">
          Condition not found
        </h1>
      </main>
    );
  }

  return <ConditionDetail condition={condition} />;
}
