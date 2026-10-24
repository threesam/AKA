import client from "@mailchimp/mailchimp_marketing";
import {
  MAILCHIMP_API_KEY,
  MAILCHIMP_SERVER_PREFIX,
  MAILCHIMP_LIST_ID,
} from "$app/env/private";

client.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER_PREFIX,
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
    return Response.json({ error: "invalid body" }, { status: 422 });
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "invalid email" }, { status: 422 });
  }

  try {
    // the API accepts the email in place of the MD5 subscriber hash
    const member = await client.lists.setListMember(MAILCHIMP_LIST_ID, email, {
      email_address: email,
      status_if_new: "pending",
    });

    if (member.status === "unsubscribed") {
      await client.lists.updateListMember(MAILCHIMP_LIST_ID, email, {
        status: "pending",
      });
    }
    return Response.json({ ok: true });
  } catch (e) {
    console.error(
      "subscribe:",
      e?.status,
      e?.response?.body?.title ?? e?.message,
    );
    return Response.json({ error: "subscribe failed" }, { status: 502 });
  }
}
