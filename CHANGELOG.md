# Changelog
<!--
  Purpose:
  - Track project change history over time.
  - Record date, summary, and key files touched for each change set.
  - Keep entries append-only (do not delete past entries).
-->

## 2026-03-19
- Hardened `scripts/dev-supervisor.js` for Railway/container runtime:
  - `GIT_BOOTSTRAP` now defaults to `true` when `REPO_URL` is provided (can be disabled via `GIT_BOOTSTRAP=false`).
  - `GIT_POLL` default is `true` (can be disabled via `GIT_POLL=false`).
  - Removed destructive runtime git cleanup behavior (`git clean -fd`).
  - Added `pnpm exec next` fallback when `.bin/next` is not found.
  - Added explanatory inline comments for future maintainers/agents.
- Updated Next config to set explicit Turbopack root to project root (`turbopack.root`).
- Updated Docker app image install step to force clean dependency install:
  - `RUN rm -rf node_modules && pnpm install --prefer-offline --no-frozen-lockfile`
- Updated README supervisor/runtime notes to match current defaults and env-file behavior.

## 2026-06-11
- Rebranded from Panda to LeadFlow throughout the site (home, navbar, dashboard, footer, contact).
- Updated landing/hero, features, testimonials, and CTA for LeadFlow product positioning.
- Refreshed navbar and footer with correct branding and navigation labels.
- Applied LeadFlow branding to authentication surfaces.
- Redesigned dashboard sidebar: "Overview," "Leads," and "Add Lead" as core nav, plus Settings/Team.
- Added empty state and CTA copy for /dashboard/leads and /dashboard/leads/new.
- Added /dashboard/overview route and text for pipeline empty state.
- All copy/labels, CTAs, and structure now reflect the LeadFlow lead management use case.

## 2026-06-11
- Added "leads" table to Drizzle schema and created migration for DB.
- Implemented server actions (CRUD) for leads (add, edit, delete, list, fetch by id).
- Added /dashboard/leads/new real form to add leads.
- Leads list page queries real leads per user team, displays via table with edit/delete actions.
- Edit UI and server action `/dashboard/leads/[id]/edit` for lead editing.
- API route for leads, add, and delete endpoints.
- CHANGELOG, migration metadata, and API endpoints updated.
 - Respond with confirm, no changed needed.