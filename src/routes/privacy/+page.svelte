<script>
  import SEO from "$lib/components/SEO.svelte";
  import Container from "$lib/components/Container.svelte";
  import ParticleCanvas from "$lib/components/ParticleCanvas.svelte";
</script>

<SEO
  title="Privacy Policy"
  description="Privacy policy for Art Killing Apathy - protecting your data while amplifying voices for social change"
/>

<main>
  <ParticleCanvas />
  <Container>
    <section class="max-w-4xl mx-auto px-4 py-8 leading-relaxed">
      <h1 class="font-['Anton'] text-4xl mb-2 text-red-600">Privacy Policy</h1>
      <p class="text-gray-600 dark:text-gray-400 italic mb-8">
        Last updated: {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Our Commitment to Privacy
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          At Art Killing Apathy, we understand that privacy is fundamental to
          activism and journalism. We are committed to protecting your personal
          information while maintaining the transparency necessary for our
          mission of amplifying voices for social change.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Information We Collect
        </h2>
        <h3 class="font-['Anton'] text-xl my-3 text-gray-900 dark:text-white">
          Newsletter Subscriptions
        </h3>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          When you subscribe to our newsletter, we collect your email address to
          deliver updates about our photojournalism work, activism campaigns,
          and social justice initiatives. We use this information solely for
          communication purposes and never sell or share your email with third
          parties.
        </p>

        <h3 class="font-['Anton'] text-xl my-3 text-gray-900 dark:text-white">
          Website Analytics
        </h3>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          We use privacy-focused analytics to understand how visitors engage
          with our content. This helps us improve our storytelling and ensure
          our message reaches those who need to hear it. We do not track
          individual users or create detailed profiles.
        </p>

        <h3 class="font-['Anton'] text-xl my-3 text-gray-900 dark:text-white">
          Contact Information
        </h3>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          If you reach out to us directly, we may collect your name, email
          address, and any information you choose to share. This information is
          used solely to respond to your inquiry and is not shared with third
          parties.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          How We Use Your Information
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          We use the information we collect to:
        </p>
        <ul class="my-4 pl-6">
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Deliver newsletter updates about our work and campaigns
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Respond to your inquiries and feedback
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Improve our website and content delivery
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Maintain the security and integrity of our platform
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Comply with legal obligations
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Information Sharing
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          We do not sell, trade, or otherwise transfer your personal information
          to third parties. We may share information only in the following
          limited circumstances:
        </p>
        <ul class="my-4 pl-6">
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            With your explicit consent
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            To comply with legal requirements or court orders
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            To protect our rights, property, or safety, or that of our users
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            In connection with a merger, acquisition, or sale of assets (with
            notice to users)
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Data Security
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          We implement appropriate security measures to protect your personal
          information against unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the internet is
          100% secure, and we cannot guarantee absolute security.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Your Rights
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          You have the right to:
        </p>
        <ul class="my-4 pl-6">
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Access the personal information we hold about you
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Request correction of inaccurate information
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Request deletion of your personal information
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Opt out of newsletter communications at any time
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Object to processing of your personal information
          </li>
        </ul>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          To exercise these rights, please contact us at
          <a
            href="mailto:eleanor@artkillingapathy.com"
            class="text-red-600 dark:text-red-400 underline hover:text-red-700 dark:hover:text-red-300"
            >eleanor@artkillingapathy.com</a
          >
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Cookies and Tracking
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          We use minimal cookies to enhance your browsing experience and analyze
          website traffic. You can control cookie settings through your browser
          preferences. Our analytics are designed to respect privacy while
          providing insights into content engagement.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Third-Party Services
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          Our website may contain links to third-party websites or services. We
          are not responsible for the privacy practices of these external sites.
          We encourage you to review their privacy policies before providing any
          personal information.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Changes to This Policy
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          We may update this privacy policy from time to time to reflect changes
          in our practices or legal requirements. We will notify you of any
          significant changes by posting the updated policy on our website and
          updating the "Last updated" date.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          If you have any questions about this privacy policy or our data
          practices, please contact us at:
        </p>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          Email: <a
            href="mailto:eleanor@artkillingapathy.com"
            class="text-red-600 dark:text-red-400 underline hover:text-red-700 dark:hover:text-red-300"
            >eleanor@artkillingapathy.com</a
          ><br />
          Subject: Privacy Policy Inquiry
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Activism and Privacy
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          As a platform dedicated to social justice and activism, we understand
          the importance of protecting the privacy of those who engage with our
          content. We are committed to maintaining a safe space for dialogue and
          action while respecting individual privacy rights.
        </p>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          If you are concerned about your privacy in relation to activism or
          journalism, we encourage you to use secure communication methods and
          consider the implications of sharing personal information in public
          forums.
        </p>
      </div>
    </section>
  </Container>
</main>
