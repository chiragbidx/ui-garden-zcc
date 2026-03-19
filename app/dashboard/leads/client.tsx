"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Lead = {
  id: string;
  name: string;
  email: string;
  status: string;
  notes?: string;
};

export default function LeadsClient() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeads() {
      try {
        const res = await fetch("/api/leads");
        const data = await res.json();
        setLeads(data.leads || []);
      } catch (e) {
        setLeads([]);
      } finally {
        setLoading(false);
      }
    }
    fetchLeads();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[25vh]">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!leads.length) {
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

  return (
    <section className="w-full max-w-3xl mx-auto mt-6">
      <h1 className="text-3xl font-bold mb-4">Your Leads</h1>
      <div className="overflow-x-auto rounded-lg border border-secondary bg-background">
        <table className="min-w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left w-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t border-secondary">
                <td className="px-4 py-2">{lead.name}</td>
                <td className="px-4 py-2">{lead.email}</td>
                <td className="px-4 py-2">{lead.status}</td>
                <td className="px-4 py-2 flex gap-2">
                  <Link
                    href={`/dashboard/leads/${lead.id}/edit`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <form
                    action={`/api/leads/${lead.id}/delete`}
                    method="POST"
                    onSubmit={e => {
                      if (!window.confirm("Delete this lead?")) e.preventDefault();
                    }}
                  >
                    <button className="text-red-600 hover:underline" type="submit">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}