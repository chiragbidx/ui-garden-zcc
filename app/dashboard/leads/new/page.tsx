import { CreateLeadForm } from "./newform";

export default function AddLeadPage() {
  return (
    <section className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-6">Add Lead</h1>
      <CreateLeadForm />
    </section>
  );
}