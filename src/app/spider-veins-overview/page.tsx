import ConditionDetail from "@/components/ConditionDetail";
import { getCondition } from "@/data/conditions";
import { notFound } from "next/navigation";

const condition = getCondition("spider-veins");

export const metadata = {
  title: condition ? `${condition.name} | Sira Vascular` : "Sira Vascular",
  description: condition?.tagline,
};

export default function Page() {
  if (!condition) return notFound();
  return <ConditionDetail condition={condition} />;
}
