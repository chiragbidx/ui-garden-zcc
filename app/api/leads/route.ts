import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { leads, teamMembers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// GET: all leads for THIS user's current team
export async function GET(req: NextRequest) {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json({ leads: [] });
  }
  const tm = await db.query.teamMembers.findFirst({
    where: eq(teamMembers.userId, session.userId)
  });
  if (!tm) {
    return NextResponse.json({ leads: [] });
  }
  const data = await db.select().from(leads).where(eq(leads.teamId, tm.teamId));
  return NextResponse.json({ leads: data });
}

// (Optional, not used by form) POST: create lead via API
export async function POST(req: NextRequest) {
  // Not used for browser submission, use form action
  return NextResponse.json({ ok: true });
}