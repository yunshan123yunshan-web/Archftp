# Behavioral Guidelines

These rules reduce common LLM coding mistakes. They bias toward caution over speed — for trivial tasks use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

# Archftp — Marketing Site

A static marketing site built with **Next.js 15** (App Router) and **Tailwind CSS v4**.

## Tech Stack

- **Framework:** Next.js 15 (static export)
- **Styling:** Tailwind CSS v4 with CSS-based `@theme` design tokens
- **Language:** TypeScript
- **Package manager:** npm

## Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Home page |
| `src/app/layout.tsx` | Root layout with metadata |
| `src/app/globals.css` | Global styles + design tokens (`@theme`) |
| `next.config.ts` | Next.js config (static export) |

## Commands

```bash
npm run dev     # Start dev server (http://localhost:3000)
npm run build   # Static export to out/
npm run start   # Preview the build locally
```

## Design System

Design tokens are defined in `globals.css` via Tailwind v4's `@theme` directive:

- **Brand colors:** `brand-50` through `brand-950`
- **Font:** Inter (sans), JetBrains Mono (mono)
- **Utilities:** `page-container` (max-width + padding), `text-gradient`
- **Semantic colors:** `surface`, `surface-secondary`, `border`, `text-primary`, `text-secondary`, `text-tertiary`

## Conventions

- All source code lives under `src/`
- Pages use the App Router (`src/app/` directory)
- Components go in `src/components/`
- CSS uses Tailwind utility classes; custom styles go in `globals.css`
- No server runtime — fully static export
