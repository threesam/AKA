<script>
  import SEO from "$lib/components/SEO.svelte";
  import Container from "$lib/components/Container.svelte";
  import ParticleCanvas from "$lib/components/ParticleCanvas.svelte";
</script>

<SEO
  title="Terms of Use"
  description="Terms of use for Art Killing Apathy - guidelines for engaging with our photojournalism and activism content"
/>

<main>
  <ParticleCanvas />
  <Container>
    <section class="max-w-4xl mx-auto px-4 py-8 leading-relaxed">
      <h1 class="font-['Anton'] text-4xl mb-2 text-red-600">Terms of Use</h1>
      <p class="text-gray-600 dark:text-gray-400 italic mb-8">
        Last updated: {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Welcome to Art Killing Apathy
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          These terms of use govern your access to and use of Art Killing
          Apathy, a platform dedicated to photojournalism, activism, and social
          change. By accessing our website, you agree to be bound by these terms
          and our commitment to amplifying voices for justice.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Our Mission and Content
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          Art Killing Apathy is a platform that combines photojournalism with
          activism to challenge apathy and inspire action. Our content includes:
        </p>
        <ul class="my-4 pl-6">
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Photojournalism documenting social issues and movements
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Activism campaigns and calls to action
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Educational content about social justice issues
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Community resources and tools for change
          </li>
        </ul>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          We are committed to truth, accuracy, and ethical journalism while
          advocating for positive social change.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Acceptable Use
        </h2>
        <h3 class="font-['Anton'] text-xl my-3 text-gray-900 dark:text-white">
          You May:
        </h3>
        <ul class="my-4 pl-6">
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            View and share our content for educational and advocacy purposes
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Engage in respectful dialogue about the issues we cover
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Use our content to inspire positive action and change
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Participate in our campaigns and initiatives
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Provide feedback and suggestions for improvement
          </li>
        </ul>

        <h3 class="font-['Anton'] text-xl my-3 text-gray-900 dark:text-white">
          You May Not:
        </h3>
        <ul class="my-4 pl-6">
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Use our content for commercial purposes without permission
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Misrepresent or distort our photojournalism work
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Engage in harassment, hate speech, or discriminatory behavior
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Attempt to compromise the security or functionality of our website
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Use our platform to promote violence or illegal activities
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Violate the rights of others or engage in defamatory behavior
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Intellectual Property Rights
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          All content on Art Killing Apathy, including photographs, articles,
          graphics, and other materials, is protected by copyright and other
          intellectual property laws. Our photojournalism work represents
          significant time, effort, and risk-taking in documenting important
          social issues.
        </p>

        <h3 class="font-['Anton'] text-xl my-3 text-gray-900 dark:text-white">
          Fair Use and Educational Use
        </h3>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          We support fair use of our content for educational, commentary, and
          advocacy purposes. However, we ask that you:
        </p>
        <ul class="my-4 pl-6">
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Credit Art Killing Apathy and the photographer when sharing our work
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Maintain the integrity and context of our photojournalism
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Use our content in ways that align with our mission of social
            justice
          </li>
          <li class="mb-2 text-gray-600 dark:text-gray-300">
            Contact us for permission for commercial or extensive use
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          User-Generated Content
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          When you interact with our platform through comments, emails, or other
          communications, you retain ownership of your content but grant us a
          license to use it in connection with our mission. We reserve the right
          to moderate and remove content that violates these terms.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Disclaimer of Warranties
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          Our website and content are provided "as is" without warranties of any
          kind. While we strive for accuracy in our photojournalism and activism
          work, we cannot guarantee that all information is complete, accurate,
          or up-to-date at all times.
        </p>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          We are not responsible for the actions, content, or services of
          third-party websites that may be linked from our platform.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Limitation of Liability
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          Art Killing Apathy shall not be liable for any indirect, incidental,
          special, or consequential damages arising from your use of our website
          or content. Our liability is limited to the maximum extent permitted
          by law.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Indemnification
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          You agree to indemnify and hold harmless Art Killing Apathy from any
          claims, damages, or expenses arising from your violation of these
          terms or your use of our content in ways that violate applicable laws
          or the rights of others.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Modifications to Terms
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          We may update these terms of use from time to time to reflect changes
          in our practices or legal requirements. We will notify users of
          significant changes by posting the updated terms on our website and
          updating the "Last updated" date.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Termination
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          We reserve the right to terminate or suspend access to our website for
          users who violate these terms or engage in behavior that conflicts
          with our mission of promoting social justice and ethical journalism.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Governing Law
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          These terms are governed by the laws of the jurisdiction in which Art
          Killing Apathy operates. Any disputes arising from these terms or your
          use of our website will be resolved through appropriate legal
          channels.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Contact Information
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          If you have questions about these terms of use or need to report
          violations, please contact us at:
        </p>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          Email: <a
            href="mailto:eleanor@artkillingapathy.com"
            class="text-red-600 dark:text-red-400 underline hover:text-red-700 dark:hover:text-red-300"
            >eleanor@artkillingapathy.com</a
          ><br />
          Subject: Terms of Use Inquiry
        </p>
      </div>

      <div class="mb-8">
        <h2 class="font-['Anton'] text-2xl my-4 text-gray-900 dark:text-white">
          Commitment to Social Justice
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          These terms reflect our commitment to using our platform responsibly
          and ethically. We believe that photojournalism and activism have the
          power to create positive change, and we ask that all users engage with
          our content in ways that honor this mission.
        </p>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
          Together, we can challenge apathy and inspire action for a more just
          and equitable world.
        </p>
      </div>
    </section>
  </Container>
</main>
