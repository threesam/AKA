# User journeys for /drive

## home

- go to /
- expect heading "Radical Art"
- expect section nav buttons "Photography", "Poetry", "Newsletter", "Podcasts"
- click button "Poetry" → page scrolls to the poetry section
- expect no horizontal scroll at 375px

## nav to each top-level route

- go to /about → expect 200, heading "About"
- go to /press → expect 200, heading "Press", every iframe has a title
- go to /privacy → expect 200
- go to /terms → expect 200
- go to /art/protest-photography → expect hero image loaded (Sanity CDN, no CORS error) and a "Want to go back?" link to /
- go to /nope → expect 404 page with a "Go Home" link

## gallery (keyboard)

- go to /, Tab into the photography gallery
- focused tile shows its title overlay ("View Project") and has a visible focus ring
- press Enter → lands on /art/<slug>

## newsletter form — LOCAL ONLY, never against production

- go to / (form is in the footer), fill "not-an-email", submit → native validation blocks it
- fill a valid email, submit → with dummy Mailchimp creds expect "Something went wrong. Please try again." in the role=status region (API answers 502); with real creds expect "Thanks for Subscribing!"
- POST /api/subscribe with {"email":"x"} → 422; GET /api/subscribe → 405 (no list dump)

## analytics eject

- go to /?test → localStorage "umami.disabled" = "1"
- go to /?test=0 → localStorage "umami.disabled" removed
