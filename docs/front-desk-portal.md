# Truly Front Desk website integration

`/front-desk` runs the full dashboard in this Next.js app. Calls, contacts, calendar changes, tasks, operations, backups and app push settings use the same D1 records as Riley's existing Sites backend. No iframe, public data endpoint, copied customer database, or migration of Vapi tool URLs is involved.

## Access

Auth.js email links use the existing Resend account and Upstash Redis connection. Only the exact server-configured owner email may sign in; every page/API authorization also rechecks it. Redis keys are isolated under `truly:front-desk:auth:`. Ten-minute verification links are atomically consumed once; send limits are one per minute/five per hour. Database sessions expire after seven days and are deleted on sign-out. No passwords or tokens are exposed to frontend code.

Production configuration:
- `AUTH_SECRET`: dedicated session secret.
- `AUTH_URL`: `https://trulyautomation.com/api/front-desk/auth`.
- `FRONT_DESK_OWNER_EMAIL`: existing pilot owner's verified email.
- `FRONT_DESK_SITE_TOKEN`: existing Sites service-access token.
- `FRONT_DESK_PORTAL_KEY`: dedicated server-to-server credential, at least 64 characters.
- Existing `RESEND_API_KEY` and `KV_REST_API_URL` / `KV_REST_API_TOKEN` (or the equivalent `UPSTASH_REDIS_REST_*` variables).

The Sites backend needs `PORTAL_ACCESS_KEY` matching the portal key and `PORTAL_OWNER_ID` fixed to its existing owner. Its original ChatGPT sign-in still works. The server credential is accepted only for GET/POST on desk, operations, push and backup. It cannot impersonate an arbitrary owner, access MCP, or authenticate Vapi. Outer Sites authentication remains enabled.

## Behavior and boundaries

- Mutations require a valid owner session and matching Origin. The gateway allows four resources only, reconstructs the upstream URL, strips incoming headers, rejects redirects, bounds bodies, and disables caching.
- PWA worker, icons, manifest and notification links are scoped to `/front-desk`. Customer data is not cached offline. Devices must enable notifications again on this origin.
- Backup uploads are capped at 4 MB to fit Vercel request limits.
- This is one owner/one pilot workspace. It is not multi-client provisioning. Max and client accounts need explicit provisioning before access.
- SMS is still on hold; live call acceptance and phone push checks remain separate from this website integration.

## Checks and release

Run `node --experimental-strip-types --test tests/*.test.mjs`, `npx tsc --noEmit`, and `npm run build`. Backend checks live with the Sites source (58 tests including server credential scope). Publish the backend with its dedicated credential first, set production-only website configuration, then merge this branch. Verify signed-out requests return 401, sign-in email delivers, owner records match the existing workspace, a practice mutation persists, sign-out revokes access, and phone links stay inside `/front-desk`.

Rollback: revert the website commit. Riley and the existing Sites dashboard keep using the original backend. Remove `PORTAL_ACCESS_KEY` from the backend to revoke the website bridge; remove frontend secrets to disable the new login. Existing calendar/call data is not deleted by either step.
