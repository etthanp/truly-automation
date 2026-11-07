# Truly Front Desk website integration

`/front-desk` runs the full dashboard in this Next.js app. Calls, contacts, calendar changes, tasks, operations, backups and app push settings use the same D1 records as Riley's existing Sites backend. No iframe, public data endpoint, copied customer database, or migration of Vapi tool URLs is involved.

## Access

Auth.js email links use the existing Resend account and Upstash Redis connection. Only the exact server-configured owner and team emails may sign in; every page/API authorization rechecks the allowlist. Redis keys are isolated under `truly:front-desk:auth:`. Thirty-minute verification links open a confirmation page and are atomically consumed by an explicit same-origin form submission; send limits are one per minute/five per hour. Database sessions expire after seven days and are deleted on sign-out. No passwords or tokens are exposed to frontend code.

Production configuration:
- `AUTH_SECRET`: dedicated session secret.
- `AUTH_URL`: `https://trulyautomation.com/api/front-desk/auth`.
- `FRONT_DESK_OWNER_EMAIL`: existing pilot owner's verified email.
- `FRONT_DESK_TEAM_EMAILS`: optional comma-separated teammate emails, server-only and production-only.
- `FRONT_DESK_SITE_TOKEN`: existing Sites service-access token.
- `FRONT_DESK_PORTAL_KEY`: dedicated server-to-server credential, at least 64 characters.
- Existing `RESEND_API_KEY` and `KV_REST_API_URL` / `KV_REST_API_TOKEN` (or the equivalent `UPSTASH_REDIS_REST_*` variables).

The Sites backend needs `PORTAL_ACCESS_KEY` matching the portal key and `PORTAL_OWNER_ID` fixed to its existing owner. Its original ChatGPT sign-in still works. The server credential is accepted only for GET/POST on desk, operations, push and backup. It cannot impersonate an arbitrary owner, access MCP, or authenticate Vapi. Outer Sites authentication remains enabled.

## Behavior and boundaries

- Mutations require a valid authorized-user session and an Origin matching the server-configured canonical site. The strict-origin referrer policy preserves browser Origin on form posts while omitting URL paths and email-link tokens. The gateway allows four resources only, reconstructs the upstream URL, strips incoming headers, rejects redirects, bounds bodies, and disables caching.
- PWA worker, icons, manifest and notification links are scoped to `/front-desk`. Customer data is not cached offline. Devices must enable notifications again on this origin.
- Backup uploads are capped at 4 MB to fit Vercel request limits.
- This is one shared pilot workspace, not multi-client provisioning. Team members can read Truly calls, customers, appointments and tasks, and create/update customers, manage appointments/time blocks and handle tasks. They cannot access practice, operations, backup, push administration, integrations or booking-pause settings. Server-side checks enforce these restrictions even with direct API requests. The upstream owner stays fixed so members see the existing workspace. Remove an email from the team configuration and redeploy to revoke even existing sessions.
- SMS is still on hold; live call acceptance and phone push checks remain separate from this website integration.

## Checks and release

Run `node --experimental-strip-types --test tests/*.test.mjs`, `npx tsc --noEmit`, and `npm run build`. Backend checks live with the Sites source (58 tests including server credential scope). Publish the backend with its dedicated credential first, set production-only website configuration, then merge this branch. Verify signed-out requests return 401, sign-in email delivers, owner records match the existing workspace, a practice mutation persists, sign-out revokes access, and phone links stay inside `/front-desk`.

Rollback: revert the website commit. Riley and the existing Sites dashboard keep using the original backend. Remove `PORTAL_ACCESS_KEY` from the backend to revoke the website bridge; remove frontend secrets to disable the new login. Existing calendar/call data is not deleted by either step.
