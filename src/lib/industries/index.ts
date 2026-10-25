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
import solar from "./solar";
import foundationRepair from "./foundation-repair";
import septic from "./septic";
import excavation from "./excavation";
import masonry from "./masonry";
import epoxyFloors from "./epoxy-floors";
import siding from "./siding";
import insulation from "./insulation";
import movers from "./movers";
import locksmith from "./locksmith";
import dental from "./dental";
import medSpa from "./med-spa";
import chiropractors from "./chiropractors";
import gyms from "./gyms";
import salons from "./salons";
import barbershops from "./barbershops";
import massage from "./massage";
import veterinarians from "./veterinarians";
import dogGrooming from "./dog-grooming";
import autoRepair from "./auto-repair";
import autoDetailing from "./auto-detailing";
import restaurants from "./restaurants";
import lawFirms from "./law-firms";
import realEstate from "./real-estate";
import insuranceAgents from "./insurance-agents";
import accountants from "./accountants";
import photographers from "./photographers";
import weddingVenues from "./wedding-venues";
import daycares from "./daycares";
import tutoring from "./tutoring";
import physicalTherapy from "./physical-therapy";
import carpetCleaning from "./carpet-cleaning";
import handyman from "./handyman";
import windowCleaning from "./window-cleaning";
import applianceRepair from "./appliance-repair";
import restoration from "./restoration";
import chimneySweeps from "./chimney-sweeps";
import holidayLighting from "./holiday-lighting";
import aduBuilders from "./adu-builders";
import paving from "./paving";
import cabinetsCountertops from "./cabinets-countertops";
import optometrists from "./optometrists";
import yogaPilates from "./yoga-pilates";
import nailSalons from "./nail-salons";
import tattooShops from "./tattoo-shops";
import dogTrainers from "./dog-trainers";
import petBoarding from "./pet-boarding";
import towing from "./towing";
import autoBody from "./auto-body";
import catering from "./catering";
import propertyManagement from "./property-management";
import eventRentals from "./event-rentals";
import martialArts from "./martial-arts";
import danceStudios from "./dance-studios";

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
  solar,
  foundationRepair,
  septic,
  excavation,
  masonry,
  epoxyFloors,
  siding,
  insulation,
  movers,
  locksmith,
  dental,
  medSpa,
  chiropractors,
  gyms,
  salons,
  barbershops,
  massage,
  veterinarians,
  dogGrooming,
  autoRepair,
  autoDetailing,
  restaurants,
  lawFirms,
  realEstate,
  insuranceAgents,
  accountants,
  photographers,
  weddingVenues,
  daycares,
  tutoring,
  physicalTherapy,
  carpetCleaning,
  handyman,
  windowCleaning,
  applianceRepair,
  restoration,
  chimneySweeps,
  holidayLighting,
  aduBuilders,
  paving,
  cabinetsCountertops,
  optometrists,
  yogaPilates,
  nailSalons,
  tattooShops,
  dogTrainers,
  petBoarding,
  towing,
  autoBody,
  catering,
  propertyManagement,
  eventRentals,
  martialArts,
  danceStudios,
];

/** Directory order for categories on the homepage. */
export const categories = [
  "Home services",
  "Construction & outdoor",
  "Health & wellness",
  "Beauty & personal care",
  "Pets",
  "Auto",
  "Food & hospitality",
  "Professional services",
  "Events & creative",
  "Kids & education",
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
