<template>
  <LegalPageLayout
    title-prefix="Privacy"
    title-suffix="Policy"
  >
    <section>
      <h2 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
        Information We Collect
      </h2>
      <p class="text-[var(--color-text-secondary)] leading-relaxed">
        We collect information you provide directly to us, such as when you contact us through our contact form,
        subscribe to our newsletter, or interact with our website.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
        How We Use Your Information
      </h2>
      <p class="text-[var(--color-text-secondary)] leading-relaxed mb-4">
        We use the information we collect to:
      </p>
      <ul class="list-disc list-inside text-[var(--color-text-secondary)] space-y-2">
        <li>Respond to your inquiries and provide customer support</li>
        <li>Send you updates about our services and projects</li>
        <li>Improve our website and services</li>
        <li>Comply with legal obligations</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
        Information Sharing
      </h2>
      <p class="text-[var(--color-text-secondary)] leading-relaxed">
        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
        except as described in this policy or as required by law.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
        Data Security
      </h2>
      <p class="text-[var(--color-text-secondary)] leading-relaxed">
        We implement appropriate security measures to protect your personal information against unauthorized access,
        alteration, disclosure, or destruction.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
        Contact Us
      </h2>
      <p class="text-[var(--color-text-secondary)] leading-relaxed">
        If you have any questions about this Privacy Policy, please contact us at
        <a
          href="mailto:nethsarasandeepaelvitigala@gmail.com"
          class="text-[var(--color-primary)] hover:underline"
        >
          nethsarasandeepaelvitigala@gmail.com
        </a>
      </p>
    </section>
  </LegalPageLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy - Nethsara Elvitigala',
  description: 'Our privacy policy outlines how we collect, use, and protect your personal information.',
})
</script>
