"use client";

export default function AddLeadClient() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[35vh] md:min-h-[60vh] text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Add New Lead</h1>
      <p className="mb-6 text-muted-foreground max-w-xl">
        Enter lead details to add a new lead.
      </p>
      <form className="w-full max-w-sm mx-auto flex flex-col gap-4">
        <input
          disabled
          className="rounded-md border border-secondary px-3 py-2 focus:outline-none focus:border-primary bg-muted/30 text-foreground"
          placeholder="(Coming soon) Name, contact, notes, etc."
        />
        <button
          type="button"
          disabled
          className="w-full rounded-md bg-primary text-background font-semibold py-2 px-5 opacity-60 cursor-not-allowed"
        >
          Save Lead
        </button>
      </form>
    </section>
  );
}