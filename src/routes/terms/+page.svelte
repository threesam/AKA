<script>
  import SEO from "$lib/components/SEO.svelte";
  import Banner from "$lib/components/Banner.svelte";
  import ParticleCanvas from "$lib/components/ParticleCanvas.svelte";
  import BackButton from "$lib/components/BackButton.svelte";
</script>

<SEO
  title="Terms of Use"
  description="Terms of use for Art Killing Apathy - guidelines for engaging with our photojournalism and activism content"
/>

<main>
  <div class="fixed inset-0 -z-10">
    <ParticleCanvas />
  </div>

  <section class="max-w-4xl mx-auto px-6 py-8 bg-[var(--background)]/50">
    <!-- Go back button -->
    <BackButton />

    <Banner
      title="Terms of Use"
      description="Last updated: {new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}"
      position="left"
    />
    <div class="prose prose-lg max-w-none">
      <div class="mb-8">
        <h2>Welcome to Art Killing Apathy</h2>
        <p>
          These terms of use govern your access to and use of Art Killing
          Apathy, a platform dedicated to photojournalism, activism, and social
          change. By accessing our website, you agree to be bound by these terms
          and our commitment to amplifying voices for justice.
        </p>
      </div>

      <div class="mb-8">
        <h2>Our Mission and Content</h2>
        <p>
          Art Killing Apathy is a platform that combines photojournalism with
          activism to challenge apathy and inspire action. Our content includes:
        </p>
        <ul class="my-4 pl-6">
          <li>Photojournalism documenting social issues and movements</li>
          <li>Activism campaigns and calls to action</li>
          <li>Educational content about social justice issues</li>
          <li>Community resources and tools for change</li>
        </ul>
        <p>
          We are committed to truth, accuracy, and ethical journalism while
          advocating for positive social change.
        </p>
      </div>

      <div class="mb-8">
        <h2>Acceptable Use</h2>
        <h3>You May:</h3>
        <ul class="my-4 pl-6">
          <li>
            View and share our content for educational and advocacy purposes
          </li>
          <li>Engage in respectful dialogue about the issues we cover</li>
          <li>Use our content to inspire positive action and change</li>
          <li>Participate in our campaigns and initiatives</li>
          <li>Provide feedback and suggestions for improvement</li>
        </ul>

        <h3>You May Not:</h3>
        <ul class="my-4 pl-6">
          <li>Use our content for commercial purposes without permission</li>
          <li>Misrepresent or distort our photojournalism work</li>
          <li>Engage in harassment, hate speech, or discriminatory behavior</li>
          <li>
            Attempt to compromise the security or functionality of our website
          </li>
          <li>Use our platform to promote violence or illegal activities</li>
          <li>Violate the rights of others or engage in defamatory behavior</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2>Intellectual Property Rights</h2>
        <p>
          All content on Art Killing Apathy, including photographs, articles,
          graphics, and other materials, is protected by copyright and other
          intellectual property laws. Our photojournalism work represents
          significant time, effort, and risk-taking in documenting important
          social issues.
        </p>

        <h3>Fair Use and Educational Use</h3>
        <p>
          We support fair use of our content for educational, commentary, and
          advocacy purposes. However, we ask that you:
        </p>
        <ul class="my-4 pl-6">
          <li>
            Credit Art Killing Apathy and the photographer when sharing our work
          </li>
          <li>Maintain the integrity and context of our photojournalism</li>
          <li>
            Use our content in ways that align with our mission of social
            justice
          </li>
          <li>Contact us for permission for commercial or extensive use</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2>User-Generated Content</h2>
        <p>
          When you interact with our platform through comments, emails, or other
          communications, you retain ownership of your content but grant us a
          license to use it in connection with our mission. We reserve the right
          to moderate and remove content that violates these terms.
        </p>
      </div>

      <div class="mb-8">
        <h2>Disclaimer of Warranties</h2>
        <p>
          Our website and content are provided "as is" without warranties of any
          kind. While we strive for accuracy in our photojournalism and activism
          work, we cannot guarantee that all information is complete, accurate,
          or up-to-date at all times.
        </p>
        <p>
          We are not responsible for the actions, content, or services of
          third-party websites that may be linked from our platform.
        </p>
      </div>

      <div class="mb-8">
        <h2>Limitation of Liability</h2>
        <p>
          Art Killing Apathy shall not be liable for any indirect, incidental,
          special, or consequential damages arising from your use of our website
          or content. Our liability is limited to the maximum extent permitted
          by law.
        </p>
      </div>

      <div class="mb-8">
        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Art Killing Apathy from any
          claims, damages, or expenses arising from your violation of these
          terms or your use of our content in ways that violate applicable laws
          or the rights of others.
        </p>
      </div>

      <div class="mb-8">
        <h2>Modifications to Terms</h2>
        <p>
          We may update these terms of use from time to time to reflect changes
          in our practices or legal requirements. We will notify users of
          significant changes by posting the updated terms on our website and
          updating the "Last updated" date.
        </p>
      </div>

      <div class="mb-8">
        <h2>Termination</h2>
        <p>
          We reserve the right to terminate or suspend access to our website for
          users who violate these terms or engage in behavior that conflicts
          with our mission of promoting social justice and ethical journalism.
        </p>
      </div>

      <div class="mb-8">
        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of the jurisdiction in which Art
          Killing Apathy operates. Any disputes arising from these terms or your
          use of our website will be resolved through appropriate legal
          channels.
        </p>
      </div>

      <div class="mb-8">
        <h2>Contact Information</h2>
        <p>
          If you have questions about these terms of use or need to report
          violations, please contact us at:
        </p>
        <p>
          Email: <a
            href="mailto:eleanor@artkillingapathy.com"
            class="text-red-600 dark:text-red-400 underline hover:text-red-700 dark:hover:text-red-300"
            >eleanor@artkillingapathy.com</a
          ><br />
          Subject: Terms of Use Inquiry
        </p>
      </div>

      <div class="mb-8">
        <h2>Commitment to Social Justice</h2>
        <p>
          These terms reflect our commitment to using our platform responsibly
          and ethically. We believe that photojournalism and activism have the
          power to create positive change, and we ask that all users engage with
          our content in ways that honor this mission.
        </p>
        <p>
          Together, we can challenge apathy and inspire action for a more just
          and equitable world.
        </p>
      </div>
    </div>
  </section>
</main>
