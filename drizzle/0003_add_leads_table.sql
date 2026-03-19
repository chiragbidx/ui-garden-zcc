CREATE TABLE IF NOT EXISTS "leads" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "team_id" TEXT NOT NULL REFERENCES "teams" ("id") ON DELETE CASCADE,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'new',
  "notes" TEXT NOT NULL DEFAULT '',
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);