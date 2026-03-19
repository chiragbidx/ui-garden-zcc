import Client from "./client";
import { getLeadForEdit } from "../actions";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { teamMembers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { notFound, redirect } from "next/navigation";

// SSR: Loads team-scoped lead for editing
export default async function EditLeadPage({ params }: { params: { id: string } }) {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  const tm = await db.query.teamMembers.findFirst({
    where: eq(teamMembers.userId, session.userId)
  });
  if (!tm) redirect("/dashboard/leads");

  const lead = await getLeadForEdit(params.id, tm.teamId);
  if (!lead) notFound();

  return <Client lead={lead} />;
}