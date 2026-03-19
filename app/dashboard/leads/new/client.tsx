"use client";

import { useActionState } from "react";
import { createLeadAction } from "@/app/dashboard/leads/actions";

const initialState = { error: null };

export default function AddLeadClient() {
  const [state, formAction] = useActionState(createLeadAction, initialState);

  return (
    <section className="flex flex-col items-center justify-center min-h-[35vh] md:min-h-[60vh] text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Add New Lead</h1>
      <p className="mb-6 text-muted-foreground max-w-xl">
        Enter lead details to add a new lead.
      </p>
      <form className="w-full max-w-sm mx-auto flex flex-col gap-4" action={formAction}>
        <input
          name="name"
          className="rounded-md border border-secondary px-3 py-2 focus:outline-none focus:border-primary bg-background text-foreground"
          placeholder="Lead name"
          required
        />
        <input
          name="email"
          type="email"
          className="rounded-md border border-secondary px-3 py-2 focus:outline-none focus:border-primary bg-background text-foreground"
          placeholder="Lead email"
          required
        />
        <input
          name="status"
          className="rounded-md border border-secondary px-3 py-2 focus:outline-none focus:border-primary bg-background text-foreground"
          placeholder="Status (e.g., new, contacted, closed)"
          defaultValue="new"
        />
        <textarea
          name="notes"
          className="rounded-md border border-secondary px-3 py-2 focus:outline-none focus:border-primary bg-background text-foreground"
          placeholder="Notes"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-primary text-background font-semibold py-2 px-5"
        >
          Save Lead
        </button>
        {state && state.error ? (
          <p className="text-red-600">{state.error}</p>
        ) : null}
      </form>
    </section>
  );
}