import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

export async function GET() {
  const redis = Redis.fromEnv();
  await redis.srem("contacted_emails", "ethan@trulyautomation.com");
  return NextResponse.json({ cleared: true });
}
