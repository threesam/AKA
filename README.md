# art_killing_apathy

SvelteKit site for [artkillingapathy.com](https://artkillingapathy.com). Content comes from Sanity and deploys to Netlify on push to `main`.

```bash
pnpm install
pnpm dev      # local dev server
pnpm build    # regenerates static/sitemap.xml from Sanity, then vite build
pnpm check    # svelte-check
pnpm lint     # prettier --check
```

`/api/subscribe` needs `MAILCHIMP_API_KEY`, `MAILCHIMP_SERVER_PREFIX` and `MAILCHIMP_LIST_ID` in `.env`.
