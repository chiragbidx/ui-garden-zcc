"use server";

import { db } from "@/lib/db/client";
import { leads, teams, teamMembers } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import { getAuthSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";

// Zod validation schema for leads (keep local, not exported)
import { z } from "zod";
const leadFormSchema = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email(),
  status: z.string().min(2).max(32),
  notes: z.string().max(2000).optional().default(""),
});

// Helper: get teamId for the current user
async function getCurrentTeamId() {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");
  // Assume first team member as primary team (future: allow switching)
  const teamMember = await db.query.teamMembers.findFirst({
    where: eq(teamMembers.userId, session.userId)
  });
  if (!teamMember) throw new Error("No team found");
  return teamMember.teamId;
}

// CREATE lead
export async function createLeadAction(formData: FormData) {
  const session = await getAuthSession();
  if (!session) return { error: "Not signed in" };

  const parse = leadFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    status: formData.get("status") || "new",
    notes: formData.get("notes") || ""
  });
  if (!parse.success) return { error: "Validation failed" };

  const teamId = await getCurrentTeamId();
  await db.insert(leads).values({
    teamId,
    name: parse.data.name,
    email: parse.data.email,
    status: parse.data.status,
    notes: parse.data.notes || "",
  });

  redirect("/dashboard/leads");
}

// READ leads list for dashboard (scoped)
export async function getLeadsForTeam(teamId: string) {
  const leadsList = await db.select().from(leads).where(eq(leads.teamId, teamId));
  return leadsList;
}

// GET single lead (by id, team-scoped)
export async function getLeadForEdit(id: string, teamId: string) {
  const [lead] = await db.select().from(leads).where(and(eq(leads.id, id), eq(leads.teamId, teamId)));
  return lead;
}

// UPDATE lead
export async function updateLeadAction(id: string, formData: FormData) {
  const session = await getAuthSession();
  if (!session) return { error: "Not signed in" };

  const teamId = await getCurrentTeamId();

  const parse = leadFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    status: formData.get("status"),
    notes: formData.get("notes") || "",
  });
  if (!parse.success) return { error: "Validation failed" };

  await db.update(leads)
    .set({
      name: parse.data.name,
      email: parse.data.email,
      status: parse.data.status,
      notes: parse.data.notes || "",
      updatedAt: new Date(),
    })
    .where(and(eq(leads.id, id), eq(leads.teamId, teamId)));

  redirect("/dashboard/leads");
}

// DELETE lead
export async function deleteLeadAction(id: string) {
  const session = await getAuthSession();
  if (!session) return { error: "Not signed in" };

  const teamId = await getCurrentTeamId();

  await db.delete(leads)
    .where(and(eq(leads.id, id), eq(leads.teamId, teamId)));

  redirect("/dashboard/leads");
}