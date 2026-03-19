"use client";

import { useFormState } from "react-dom";
import { updateLeadAction } from "../actions";

export default function LeadEditClient({ lead }: { lead: any }) {
  const [state, formAction] = useFormState(updateLeadAction.bind(null, lead.id), { error: null });

  return (
    <section className="flex flex-col items-center justify-center min-h-[35vh] md:min-h-[60vh] text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Edit Lead</h1>
      <form className="w-full max-w-sm mx-auto flex flex-col gap-4" action={formAction}>
        <input
          name="name"
          className="rounded-md border border-secondary px-3 py-2 focus:outline-none focus:border-primary bg-background text-foreground"
          placeholder="Lead name"
          defaultValue={lead.name}
          required
        />
        <input
          name="email"
          type="email"
          className="rounded-md border border-secondary px-3 py-2 focus:outline-none focus:border-primary bg-background text-foreground"
          placeholder="Lead email"
          defaultValue={lead.email}
          required
        />
        <input
          name="status"
          className="rounded-md border border-secondary px-3 py-2 focus:outline-none focus:border-primary bg-background text-foreground"
          placeholder="Status (e.g., new, contacted, closed)"
          defaultValue={lead.status}
        />
        <textarea
          name="notes"
          className="rounded-md border border-secondary px-3 py-2 focus:outline-none focus:border-primary bg-background text-foreground"
          placeholder="Notes"
          defaultValue={lead.notes}
        />
        <button
          type="submit"
          className="w-full rounded-md bg-primary text-background font-semibold py-2 px-5"
        >
          Update Lead
        </button>
        {state && state.error ? (
          <p className="text-red-600">{state.error}</p>
        ) : null}
      </form>
    </section>
  );
}