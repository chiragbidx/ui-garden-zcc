import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { leads, teamMembers } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";

// Delete lead (POST for now)
export async function POST(
  req: NextRequest,
  { params }: { params: { leadId: string } }
) {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.redirect("/auth#signin");
  }

  // Find user's team (first membership as current)
  const teamMember = await db.query.teamMembers.findFirst({
    where: eq(teamMembers.userId, session.userId),
  });
  if (!teamMember) {
    return NextResponse.redirect("/dashboard/leads");
  }
  const teamId = teamMember.teamId;

  await db.delete(leads).where(and(eq(leads.id, params.leadId), eq(leads.teamId, teamId)));
  return NextResponse.redirect("/dashboard/leads");
}