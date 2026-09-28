import client from "@mailchimp/mailchimp_marketing";
import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

client.setConfig({
  apiKey: env.MAILCHIMP_API_KEY,
  server: env.MAILCHIMP_SERVER_PREFIX,
});

// The old GET handler dumped the whole Mailchimp list (every subscriber's
// email) to anyone passing ?i_will_allow_it — removed.

// Double opt-in: new members land as "pending" until they confirm the email.
// addListMember (not setListMember/PUT) so an existing subscriber is never
// flipped back to "pending"; Mailchimp answers "Member Exists" instead, which
// the form shows as "Already Subscribed!" (400).
export async function POST({ request }) {
  let email;
  try {
    ({ email } = await request.json());
  } catch {
    return json({ error: "invalid body" }, { status: 422 });
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "invalid email" }, { status: 422 });
  }

  try {
    await client.lists.addListMember(env.MAILCHIMP_LIST_ID, {
      email_address: email,
      status: "pending",
    });
    return json({ ok: true });
  } catch (e) {
    if (e?.response?.body?.title === "Member Exists") {
      return json({ error: "already subscribed" }, { status: 400 });
    }
    console.error(
      "subscribe:",
      e?.status,
      e?.response?.body?.title ?? e?.message,
    );
    return json({ error: "subscribe failed" }, { status: 502 });
  }
}
