import type { Industry } from "./types";
import concrete from "./concrete";
import roofing from "./roofing";
import hvac from "./hvac";
import plumbing from "./plumbing";
import electrical from "./electrical";
import landscaping from "./landscaping";
import pressureWashing from "./pressure-washing";
import fencing from "./fencing";
import pools from "./pools";
import remodeling from "./remodeling";

/** Every live industry page. Add a new industry by writing its file and listing it here. */
export const industries: Industry[] = [
  concrete,
  roofing,
  hvac,
  plumbing,
  electrical,
  landscaping,
  pressureWashing,
  fencing,
  pools,
  remodeling,
];

/** Directory order for categories on the homepage. */
export const categories = ["Home services", "Construction & outdoor"];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
