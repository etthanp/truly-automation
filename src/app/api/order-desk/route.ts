import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { PATIENTS, PRODUCTS, ruleParse, type ParsedOrder } from "@/lib/order-desk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Infused Wellness demo: turns a staff member's shorthand into a structured order.
// Only extraction happens here; the safety checks run as plain rules on the page.
const SYSTEM = `You turn a medical clinic staff member's shorthand order request into JSON.

Patients on file (id: name):
${PATIENTS.map((p) => `${p.id}: ${p.name}`).join("\n")}

Products (id: name, default quantity, unit):
${PRODUCTS.map((p) => `${p.id}: ${p.name}, ${p.defaultQty} ${p.unit}`).join("\n")}

Reply with ONLY one JSON object, no other text:
{"patientId":"","productId":"","quantity":0,"refills":0,"shipTo":"patient","note":""}
- patientId and productId must be ids from the lists. Match first names, last names and nicknames. If you can't tell, use "".
- quantity is the number of units asked for, else the product's default quantity.
- refills defaults to 0. shipTo is "clinic" if they say clinic or office, else "patient".
- note is a short note for the prescriber if the request says something worth flagging (rush, dose change), else "".`;

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  if (typeof text !== "string" || !text.trim()) {
    return NextResponse.json({ error: "Type an order first" }, { status: 400 });
  }

  try {
    const response = await client.messages.create({
      model: "claude-haiku-5-5",
      max_tokens: 300,
      system: SYSTEM,
      messages: [{ role: "user", content: text.slice(0, 500) }],
    });
    const raw = response.content[0].type === "text" ? response.content[0].text : "";
    const order = JSON.parse(raw.slice(raw.indexOf("{"), raw.lastIndexOf("}") + 1)) as ParsedOrder;
    const valid =
      PATIENTS.some((p) => p.id === order.patientId) && PRODUCTS.some((p) => p.id === order.productId);
    if (valid) {
      return NextResponse.json({
        order: {
          ...order,
          quantity: Number(order.quantity) || 1,
          refills: Number(order.refills) || 0,
          shipTo: order.shipTo === "clinic" ? "clinic" : "patient",
          note: String(order.note ?? ""),
        },
        source: "ai",
      });
    }
  } catch (err) {
    console.error("Order desk AI error:", err);
  }

  const order = ruleParse(text);
  if (!order) {
    return NextResponse.json(
      { error: "Couldn't match a patient and a medication. Try one of the examples." },
      { status: 422 },
    );
  }
  return NextResponse.json({ order, source: "rules" });
}
