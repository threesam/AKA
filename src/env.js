import { defineEnvVars } from "@sveltejs/kit/env";

export const variables = defineEnvVars({
  MAILCHIMP_API_KEY: { schema: (input) => input ?? "" },
  MAILCHIMP_SERVER_PREFIX: { schema: (input) => input ?? "" },
  MAILCHIMP_LIST_ID: { schema: (input) => input ?? "" },
  PUBLIC_DEPLOY_HOOK: { public: true, static: true },
});
