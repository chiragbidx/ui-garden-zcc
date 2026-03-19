export default function OverviewPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[35vh] md:min-h-[60vh] text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Overview</h1>
      <p className="mb-6 text-muted-foreground max-w-xl">
        Welcome to LeadFlow. Here you’ll see a summary of your lead pipeline.
      </p>
      <div className="flex flex-col items-center justify-center border border-secondary rounded-xl p-8 bg-background/50 mt-4">
        <h2 className="text-2xl font-semibold mb-2">No pipeline data yet</h2>
        <p className="mb-4">
          Start adding leads to see your pipeline overview here.
        </p>
        <a
          href="/dashboard/leads/new"
          className="inline-flex items-center px-5 py-2 rounded-md bg-primary hover:bg-primary/90 text-background font-semibold"
        >
          Add Lead
        </a>
      </div>
    </section>
  );
}