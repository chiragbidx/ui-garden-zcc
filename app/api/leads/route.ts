import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { leads, teamMembers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// Return all leads for the current user's team
export async function GET(req: NextRequest) {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json({ leads: [] }, { status: 401 });
  }

  // Find user's team (first membership as current)
  const teamMember = await db.query.teamMembers.findFirst({
    where: eq(teamMembers.userId, session.userId),
  });
  if (!teamMember) {
    return NextResponse.json({ leads: [] });
  }
  const teamId = teamMember.teamId;
  const rows = await db.select().from(leads).where(eq(leads.teamId, teamId)).orderBy(leads.createdAt);
  return NextResponse.json({ leads: rows });
}