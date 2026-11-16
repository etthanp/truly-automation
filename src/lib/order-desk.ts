// Shared data + rules for the Infused Wellness order desk demo (/demo/infused-wellness).
// Every patient, prescriber and pharmacy here is made up. The AI only turns staff shorthand
// into an order; the safety checks below are plain rules so they behave the same every time.

export type Product = {
  id: string;
  name: string;
  short: string;
  schedule: "CIII" | "Rx";
  pharmacyId: string;
  defaultQty: number;
  unit: string;
  sig: string;
  daysSupply: number; // per unit
  examDays: number; // good-faith exam must be newer than this
  labsDays?: number; // labs must be newer than this, if the product needs labs
  keywords: string[];
};

export type Pharmacy = { id: string; name: string; portal: string };

export type Patient = {
  id: string;
  name: string;
  dob: string;
  city: string;
  examDaysAgo: number;
  labsDaysAgo: number;
  lastFill?: { productId: string; daysAgo: number; qty: number };
  allergy?: string;
};

export type Prescriber = { id: string; name: string; title: string; dea: string; license: string };

export type ParsedOrder = {
  patientId: string;
  productId: string;
  quantity: number;
  refills: number;
  shipTo: "patient" | "clinic";
  note: string;
};

export type Check = { label: string; status: "ok" | "warn" | "block"; detail: string };

export const PHARMACIES: Pharmacy[] = [
  { id: "bayfront", name: "Bayfront Compounding", portal: "Bayfront Provider Portal" },
  { id: "southshore", name: "Southshore 503A Pharmacy", portal: "Southshore RxConnect" },
  { id: "palm", name: "Palm Peptide Pharmacy", portal: "Palm Rx Orders" },
];

export const PRODUCTS: Product[] = [
  {
    id: "testcyp",
    name: "Testosterone cypionate 200 mg/mL",
    short: "Test cyp 200",
    schedule: "CIII",
    pharmacyId: "bayfront",
    defaultQty: 1,
    unit: "10 mL vial",
    sig: "Inject 0.5 mL IM once weekly",
    daysSupply: 140,
    examDays: 365,
    labsDays: 180,
    keywords: ["test", "trt", "cyp", "testosterone"],
  },
  {
    id: "ketamine",
    name: "Ketamine HCl 150 mg troche",
    short: "Ketamine troche 150",
    schedule: "CIII",
    pharmacyId: "southshore",
    defaultQty: 30,
    unit: "troches",
    sig: "Dissolve 1 troche under tongue as directed, max 1 per day",
    daysSupply: 1,
    examDays: 180,
    keywords: ["ket", "ketamine", "troche", "lozenge"],
  },
  {
    id: "sema",
    name: "Semaglutide 2.5 mg/mL",
    short: "Sema 2.5",
    schedule: "Rx",
    pharmacyId: "palm",
    defaultQty: 1,
    unit: "2 mL vial",
    sig: "Inject 0.25 mg subQ once weekly, titrate per plan",
    daysSupply: 28,
    examDays: 365,
    keywords: ["sema", "semaglutide", "glp", "ozempic"],
  },
  {
    id: "nad",
    name: "NAD+ 100 mg/mL",
    short: "NAD+ 100",
    schedule: "Rx",
    pharmacyId: "palm",
    defaultQty: 1,
    unit: "10 mL vial",
    sig: "Inject 50 mg subQ 3x weekly",
    daysSupply: 30,
    examDays: 365,
    keywords: ["nad"],
  },
];

export const PRESCRIBERS: Prescriber[] = [
  { id: "ruiz", name: "Dr. Elena Ruiz", title: "MD", dea: "FR•••••41", license: "ME •••882" },
  { id: "vega", name: "Andrea Vega", title: "APRN", dea: "MV•••••07", license: "APRN •••315" },
];

export const PATIENTS: Patient[] = [
  { id: "p1", name: "Marco Rivera", dob: "03/14/1984", city: "Coral Gables", examDaysAgo: 150, labsDaysAgo: 60, lastFill: { productId: "testcyp", daysAgo: 128, qty: 1 } },
  { id: "p2", name: "Daniel Ortiz", dob: "11/02/1979", city: "Doral", examDaysAgo: 200, labsDaysAgo: 255, lastFill: { productId: "testcyp", daysAgo: 135, qty: 1 } },
  { id: "p3", name: "Sofia Castillo", dob: "07/21/1991", city: "Brickell", examDaysAgo: 46, labsDaysAgo: 46, lastFill: { productId: "ketamine", daysAgo: 11, qty: 30 } },
  { id: "p4", name: "Jessica Perez", dob: "01/09/1988", city: "Kendall", examDaysAgo: 90, labsDaysAgo: 90, lastFill: { productId: "sema", daysAgo: 26, qty: 1 } },
  { id: "p5", name: "Luis Moreno", dob: "05/30/1975", city: "Hialeah", examDaysAgo: 120, labsDaysAgo: 40, allergy: "cottonseed oil" },
  { id: "p6", name: "Carla Mendez", dob: "09/12/1993", city: "Miami Beach", examDaysAgo: 30, labsDaysAgo: 30, lastFill: { productId: "ketamine", daysAgo: 29, qty: 30 } },
];

export const EXAMPLES = [
  "Refill test cyp for Marco Rivera, 1 vial, ship to his house",
  "Daniel Ortiz needs his testosterone again, 1 vial, 1 refill",
  "Sofia Castillo ketamine troches #30 again please",
  "Luis Moreno starting TRT, 1 vial to the clinic",
  "Jessica sema refill, 2 vials, ship to patient",
];

// Refill requests patients text to the clinic's number.
export const PATIENT_TEXTS = [
  "Hey it's Marco Rivera, running low on my test. Can I get a refill?",
  "Hi this is Jessica Perez, I need my sema again, can you ship it to my house",
  "Carla Mendez here, can I get more of the troches? Almost out",
];

export const productById =(id: string) => PRODUCTS.find((p) => p.id === id);
export const patientById = (id: string) => PATIENTS.find((p) => p.id === id);
export const pharmacyById = (id: string) => PHARMACIES.find((p) => p.id === id);

// Backup parser: the demo still works if the AI call fails mid-meeting.
export function ruleParse(text: string): ParsedOrder | null {
  const t = text.toLowerCase();
  const patient = PATIENTS.find((p) => {
    const [first, last] = p.name.toLowerCase().split(" ");
    return t.includes(last) || new RegExp(`\\b${first}\\b`).test(t);
  });
  // "Her usual" or "again" with no medication named: use what the patient is already on.
  const product =
    PRODUCTS.find((p) => p.keywords.some((k) => t.includes(k))) ??
    (patient?.lastFill ? productById(patient.lastFill.productId) : undefined);
  if (!patient || !product) return null;
  const qtyMatch =
    t.match(/#\s*(\d+)/) ?? t.match(/(\d+)\s*(vials?|troches?|bottles?)/) ?? t.match(/\bx\s*(\d+)/);
  const refillMatch = t.match(/(\d+)\s*refills?/);
  return {
    patientId: patient.id,
    productId: product.id,
    quantity: qtyMatch ? Number(qtyMatch[1]) : product.defaultQty,
    refills: refillMatch ? Number(refillMatch[1]) : 0,
    shipTo: /clinic|office/.test(t) ? "clinic" : "patient",
    note: "",
  };
}

export function runChecks(order: ParsedOrder): Check[] {
  const patient = patientById(order.patientId)!;
  const product = productById(order.productId)!;
  const controlled = product.schedule === "CIII";
  const checks: Check[] = [];

  checks.push({
    label: controlled ? "Prescriber license + DEA on file" : "Prescriber license on file",
    status: "ok",
    detail: controlled ? "Active Florida license and DEA registration" : "Active Florida license",
  });

  checks.push(
    patient.examDaysAgo <= product.examDays
      ? { label: "Good-faith exam", status: "ok", detail: `Seen ${patient.examDaysAgo} days ago` }
      : {
          label: "Good-faith exam",
          status: "block",
          detail: `Last exam ${patient.examDaysAgo} days ago, needs one within ${product.examDays}`,
        },
  );

  if (product.labsDays) {
    checks.push(
      patient.labsDaysAgo <= product.labsDays
        ? { label: "Labs", status: "ok", detail: `Labs ${patient.labsDaysAgo} days ago` }
        : {
            label: "Labs",
            status: "block",
            detail: `Labs are ${patient.labsDaysAgo} days old. Protocol needs labs within ${product.labsDays} days`,
          },
    );
  }

  const last = patient.lastFill;
  if (last && last.productId === product.id) {
    const covered = product.daysSupply * last.qty;
    const early = covered - last.daysAgo;
    checks.push(
      early > covered * 0.2
        ? {
            label: "Refill timing",
            status: "warn",
            detail: `Last fill ${last.daysAgo} days ago should last ${covered} days. About ${early} days early`,
          }
        : { label: "Refill timing", status: "ok", detail: `Last fill ${last.daysAgo} days ago, on schedule` },
    );
  } else {
    checks.push({ label: "Refill timing", status: "ok", detail: "New prescription for this patient" });
  }

  if (patient.allergy === "cottonseed oil" && product.id === "testcyp") {
    checks.push({
      label: "Allergies",
      status: "warn",
      detail: "Cottonseed oil allergy on chart. Switched to the grapeseed oil base",
    });
  } else {
    checks.push({ label: "Allergies", status: "ok", detail: patient.allergy ? `${patient.allergy}, no conflict` : "None on chart" });
  }

  if (controlled) {
    checks.push({
      label: "E-FORCSE check",
      status: "warn",
      detail: "Prescriber confirms the state PDMP check before signing",
    });
  }
  return checks;
}
