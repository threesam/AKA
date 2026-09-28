import client from "@mailchimp/mailchimp_marketing";
import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

client.setConfig({
  apiKey: env.MAILCHIMP_API_KEY,
  server: env.MAILCHIMP_SERVER_PREFIX,
});

// The old GET handler dumped the whole Mailchimp list (every subscriber's
// email) to anyone passing ?i_will_allow_it — removed.

// Double opt-in, and the same answer for every valid email so the endpoint
// can't be used to probe who is on the list.
// - setListMember + status_if_new: new contacts land as "pending" (Mailchimp
//   sends the confirmation); existing contacts keep their status, so a
//   subscriber is never flipped back to pending.
// - an unsubscribed contact asking again gets a fresh confirmation email.
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
    // the API accepts the email in place of the MD5 subscriber hash
    const member = await client.lists.setListMember(
      env.MAILCHIMP_LIST_ID,
      email,
      {
        email_address: email,
        status_if_new: "pending",
      },
    );
    if (member.status === "unsubscribed") {
      await client.lists.updateListMember(env.MAILCHIMP_LIST_ID, email, {
        status: "pending",
      });
    }
    return json({ ok: true });
  } catch (e) {
    console.error(
      "subscribe:",
      e?.status,
      e?.response?.body?.title ?? e?.message,
    );
    return json({ error: "subscribe failed" }, { status: 502 });
  }
}
