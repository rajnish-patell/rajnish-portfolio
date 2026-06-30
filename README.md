# Rajnish Portfolio Website

A premium developer portfolio website built with React, Vite, Framer Motion, and TailwindCSS, including an Express API server backend.

## Run & Operate

- `pnpm run dev` — run the developer portfolio website (port 5000)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string (only required if running database features)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React, Vite, TailwindCSS, Framer Motion, Wouter
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Project Structure

- `artifacts/portfolio/` — The main React portfolio website
- `artifacts/api-server/` — Express API server backend
- `artifacts/mockup-sandbox/` — Mockup sandbox for UI/UX testing
- `lib/db/` — Database schema definitions and Drizzle migration setup
- `lib/api-spec/` — OpenAPI specs and Orval codegen configs
- `lib/api-client-react/` — React API hooks generated from specs
- `lib/api-zod/` — Zod verification schemas generated from specs
