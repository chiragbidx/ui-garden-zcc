import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { leads, teamMembers } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getAuthSession();
  if (!session) return NextResponse.redirect("/auth#signin");
  const tm = await db.query.teamMembers.findFirst({
    where: eq(teamMembers.userId, session.userId)
  });
  if (!tm) return NextResponse.redirect("/dashboard/leads");
  await db.delete(leads).where(and(eq(leads.id, params.id), eq(leads.teamId, tm.teamId)));
  return NextResponse.redirect("/dashboard/leads");
}