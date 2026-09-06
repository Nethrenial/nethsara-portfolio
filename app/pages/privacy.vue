<template>
  <LegalPageLayout
    title="Privacy policy"
    updated="2026-09-07"
  >
    <section>
      <p class="measure mt-4 text-base text-ink-2">
        This is a personal portfolio website for Nethsara Elvitigala (<a
          href="/"
          class="text-accent underline underline-offset-4 transition-colors duration-200 ease-out-expo hover:text-ink"
        >nethsara.me</a>). This policy explains what
        information is collected when you visit the site and how it is used. There are no user accounts,
        no newsletter subscriptions, and no data is ever sold to third parties.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-semibold text-ink">
        Information Collected via the Contact Form
      </h2>
      <p class="measure mt-4 text-base text-ink-2">
        When you submit the contact form, the following information is collected and sent directly to me by email:
      </p>
      <ul class="measure mt-4 list-outside list-disc space-y-2 pl-5 text-base text-ink-2">
        <li><strong class="font-medium text-ink">Name</strong> — required</li>
        <li><strong class="font-medium text-ink">Email address</strong> — required, used to reply to you</li>
        <li><strong class="font-medium text-ink">Subject</strong> — optional</li>
        <li><strong class="font-medium text-ink">Message</strong> — required</li>
      </ul>
      <p class="measure mt-4 text-base text-ink-2">
        This data is transmitted via a server-side email handler using Zoho Mail and is received only by me. It is not
        stored in any database, logged, or shared with any third party. I use it solely to respond to your inquiry.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-semibold text-ink">
        Analytics — Google Analytics 4
      </h2>
      <p class="measure mt-4 text-base text-ink-2">
        This site uses Google Analytics 4 (GA4) to understand how visitors interact with the content. GA4 collects:
      </p>
      <ul class="measure mt-4 list-outside list-disc space-y-2 pl-5 text-base text-ink-2">
        <li>Pages visited and time spent on each page</li>
        <li>Referring website or search engine</li>
        <li>General geographic region (country / city — not precise location)</li>
        <li>Browser, operating system, and device type</li>
      </ul>
      <p class="measure mt-4 text-base text-ink-2">
        This data is collected anonymously and is processed by Google under their
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          class="text-accent underline underline-offset-4 transition-colors duration-200 ease-out-expo hover:text-ink"
        >Privacy Policy</a>. No personally identifiable information is sent to Google Analytics.
        You can opt out using the
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
          class="text-accent underline underline-offset-4 transition-colors duration-200 ease-out-expo hover:text-ink"
        >Google Analytics Opt-out Browser Add-on</a>.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-semibold text-ink">
        Cookies
      </h2>
      <p class="measure mt-4 text-base text-ink-2">
        This site does not set any first-party cookies. Google Analytics may set its own cookies
        (<code class="font-mono text-sm text-accent">_ga</code>, <code class="font-mono text-sm text-accent">_ga_*</code>)
        to distinguish visitors and track sessions. These are analytics cookies only — no advertising or tracking
        cookies are used.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-semibold text-ink">
        Third-Party Services
      </h2>
      <p class="measure mt-4 text-base text-ink-2">
        The only third-party service used is Google Analytics. No data is shared with any advertising networks,
        social media platforms, or data brokers. Contact form submissions are processed solely through Zoho Mail
        and are received only by me.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-semibold text-ink">
        Data Retention
      </h2>
      <p class="measure mt-4 text-base text-ink-2">
        Contact form submissions are retained only as long as needed to respond to the inquiry and are stored
        in my personal email inbox. Analytics data is retained in Google Analytics for 14 months (the default
        GA4 retention period).
      </p>
    </section>

    <section>
      <h2 class="text-xl font-semibold text-ink">
        Your Rights
      </h2>
      <p class="measure mt-4 text-base text-ink-2">
        You may request deletion of any personal data you have submitted via the contact form at any time.
        To do so, email me directly and I will remove it promptly.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-semibold text-ink">
        Changes to This Policy
      </h2>
      <p class="measure mt-4 text-base text-ink-2">
        This policy may be updated occasionally. The latest version will always be available at
        <a
          href="/privacy"
          class="text-accent underline underline-offset-4 transition-colors duration-200 ease-out-expo hover:text-ink"
        >nethsara.me/privacy</a>.
        Last updated: April 2026.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-semibold text-ink">
        Contact
      </h2>
      <p class="measure mt-4 text-base text-ink-2">
        For any questions about this policy, reach out at
        <a
          href="mailto:nethsarasandeepaelvitigala@gmail.com"
          class="text-accent underline underline-offset-4 transition-colors duration-200 ease-out-expo hover:text-ink"
        >
          nethsarasandeepaelvitigala@gmail.com
        </a>.
      </p>
    </section>
  </LegalPageLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy',
  description: 'Privacy policy for nethsara.me — what data is collected via the contact form and Google Analytics, and how it is used.',
})
defineOgImage('PageLayout', {
  section: 'Legal',
  title: 'Privacy Policy',
  description: 'How I collect, use, and protect your personal information on nethsara.me.',
})
</script>
