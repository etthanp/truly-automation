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
import painting from "./painting";
import treeService from "./tree-service";
import pestControl from "./pest-control";
import garageDoors from "./garage-doors";
import gutters from "./gutters";
import windowsDoors from "./windows-doors";
import decks from "./decks";
import flooring from "./flooring";
import houseCleaning from "./house-cleaning";
import junkRemoval from "./junk-removal";

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
  painting,
  treeService,
  pestControl,
  garageDoors,
  gutters,
  windowsDoors,
  decks,
  flooring,
  houseCleaning,
  junkRemoval,
];

/** Directory order for categories on the homepage. */
export const categories = ["Home services", "Construction & outdoor"];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
