import { notFound } from "next/navigation";
import { EditLeadForm } from "./editform";
import { getLeadForEdit, getCurrentTeamId } from "../../actions";

type Props = {
  params: { leadId: string };
};

export default async function EditLeadPage({ params }: Props) {
  const teamId = await getCurrentTeamId();
  const lead = await getLeadForEdit(params.leadId, teamId);

  if (!lead) {
    notFound();
  }

  return (
    <section className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-6">Edit Lead</h1>
      <EditLeadForm lead={lead} />
    </section>
  );
}