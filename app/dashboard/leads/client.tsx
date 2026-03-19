"use client";

import Link from "next/link";

export default function LeadsClient() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[35vh] md:min-h-[60vh] text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Leads</h1>
      <p className="mb-6 text-muted-foreground max-w-xl">
        No leads yet. Click <b>Add Lead</b> to create your first lead.
      </p>
      <Link
        href="/dashboard/leads/new"
        className="inline-flex items-center px-5 py-2 rounded-md bg-primary hover:bg-primary/90 text-background font-semibold"
      >
        Add Lead
      </Link>
    </section>
  );
}