<script>
  import SEO from "$lib/components/SEO.svelte";
  import Banner from "$lib/components/Banner.svelte";
  import ParticleCanvas from "$lib/components/ParticleCanvas.svelte";
</script>

<SEO
  title="Privacy Policy"
  description="Privacy policy for Art Killing Apathy - protecting your data while amplifying voices for social change"
/>

<main>
  <div class="fixed inset-0 -z-10">
    <ParticleCanvas />
  </div>

  <section class="max-w-4xl mx-auto px-6 py-8 bg-[var(--background)]/50">
    <Banner
      title="Privacy Policy"
      description="Last updated: {new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}"
    />
    <div class="prose prose-lg max-w-none">
      <div class="mb-8">
        <h2>Our Commitment to Privacy</h2>
        <p>
          At Art Killing Apathy, we understand that privacy is fundamental to
          activism and journalism. We are committed to protecting your personal
          information while maintaining the transparency necessary for our
          mission of amplifying voices for social change.
        </p>
      </div>

      <div class="mb-8">
        <h2>Information We Collect</h2>
        <h3>Newsletter Subscriptions</h3>
        <p>
          When you subscribe to our newsletter, we collect your email address to
          deliver updates about our photojournalism work, activism campaigns,
          and social justice initiatives. We use this information solely for
          communication purposes and never sell or share your email with third
          parties.
        </p>

        <h3>Website Analytics</h3>
        <p>
          We use privacy-focused analytics to understand how visitors engage
          with our content. This helps us improve our storytelling and ensure
          our message reaches those who need to hear it. We do not track
          individual users or create detailed profiles.
        </p>

        <h3>Contact Information</h3>
        <p>
          If you reach out to us directly, we may collect your name, email
          address, and any information you choose to share. This information is
          used solely to respond to your inquiry and is not shared with third
          parties.
        </p>
      </div>

      <div class="mb-8">
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul class="my-4 pl-6">
          <li>Deliver newsletter updates about our work and campaigns</li>
          <li>Respond to your inquiries and feedback</li>
          <li>Improve our website and content delivery</li>
          <li>Maintain the security and integrity of our platform</li>
          <li>Comply with legal obligations</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2>Information Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties. We may share information only in the following
          limited circumstances:
        </p>
        <ul class="my-4 pl-6">
          <li>With your explicit consent</li>
          <li>To comply with legal requirements or court orders</li>
          <li>
            To protect our rights, property, or safety, or that of our users
          </li>
          <li>
            In connection with a merger, acquisition, or sale of assets (with
            notice to users)
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          information against unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the internet is
          100% secure, and we cannot guarantee absolute security.
        </p>
      </div>

      <div class="mb-8">
        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul class="my-4 pl-6">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of newsletter communications at any time</li>
          <li>Object to processing of your personal information</li>
        </ul>
        <p>
          To exercise these rights, please contact us at
          <a
            href="mailto:eleanor@artkillingapathy.com"
            class="text-red-600 dark:text-red-400 underline hover:text-red-700 dark:hover:text-red-300"
            >eleanor@artkillingapathy.com</a
          >
        </p>
      </div>

      <div class="mb-8">
        <h2>Cookies and Tracking</h2>
        <p>
          We use minimal cookies to enhance your browsing experience and analyze
          website traffic. You can control cookie settings through your browser
          preferences. Our analytics are designed to respect privacy while
          providing insights into content engagement.
        </p>
      </div>

      <div class="mb-8">
        <h2>Third-Party Services</h2>
        <p>
          Our website may contain links to third-party websites or services. We
          are not responsible for the privacy practices of these external sites.
          We encourage you to review their privacy policies before providing any
          personal information.
        </p>
      </div>

      <div class="mb-8">
        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time to reflect changes
          in our practices or legal requirements. We will notify you of any
          significant changes by posting the updated policy on our website and
          updating the "Last updated" date.
        </p>
      </div>

      <div class="mb-8">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or our data
          practices, please contact us at:
        </p>
        <p>
          Email: <a
            href="mailto:eleanor@artkillingapathy.com"
            class="text-red-600 dark:text-red-400 underline hover:text-red-700 dark:hover:text-red-300"
            >eleanor@artkillingapathy.com</a
          ><br />
          Subject: Privacy Policy Inquiry
        </p>
      </div>

      <div class="mb-8">
        <h2>Activism and Privacy</h2>
        <p>
          As a platform dedicated to social justice and activism, we understand
          the importance of protecting the privacy of those who engage with our
          content. We are committed to maintaining a safe space for dialogue and
          action while respecting individual privacy rights.
        </p>
        <p>
          If you are concerned about your privacy in relation to activism or
          journalism, we encourage you to use secure communication methods and
          consider the implications of sharing personal information in public
          forums.
        </p>
      </div>
    </div>
  </section>
</main>
