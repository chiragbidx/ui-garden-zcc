"use client";

import { useFormState } from "react-dom";
import { createLeadAction } from "../actions";
import { useRouter } from "next/navigation";

const initialState = { error: null };

export function CreateLeadForm() {
  const [state, formAction] = useFormState(createLeadAction, initialState);
  const router = useRouter();

  return (
    <form action={formAction} className="space-y-5 border rounded-lg p-6 bg-background">
      <div>
        <label className="block mb-1 font-medium" htmlFor="name">
          Name
        </label>
        <input
          className="w-full border rounded px-3 py-2"
          id="name"
          name="name"
          required
          minLength={2}
          maxLength={255}
          autoFocus
        />
      </div>
      <div>
        <label className="block mb-1 font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="w-full border rounded px-3 py-2"
          id="email"
          name="email"
          type="email"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium" htmlFor="status">
          Status
        </label>
        <select
          className="w-full border rounded px-3 py-2"
          id="status"
          name="status"
          defaultValue="new"
        >
          <option value="new">New</option>
          <option value="qualified">Qualified</option>
          <option value="contacted">Contacted</option>
          <option value="won">Won</option>
          <option value="lost">Lost</option>
        </select>
      </div>
      <div>
        <label className="block mb-1 font-medium" htmlFor="notes">
          Notes
        </label>
        <textarea
          className="w-full border rounded px-3 py-2"
          id="notes"
          name="notes"
          rows={3}
          maxLength={2000}
        />
      </div>
      {state.error && (
        <p className="text-red-600 text-sm">{state.error}</p>
      )}
      <div className="flex gap-2">
        <button
          className="bg-primary text-background px-4 py-2 rounded font-semibold"
          type="submit"
        >
          Add Lead
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded bg-muted text-muted-foreground"
          onClick={() => router.back()}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}