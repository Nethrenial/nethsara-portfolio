<template>
  <div class="pt-20">
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-8">
            Terms of <span class="gradient-text">Service</span>
          </h1>

          <div class="prose prose-lg prose-invert max-w-none">
            <p class="text-[var(--color-text-secondary)] text-lg mb-8">
              Last updated: {{ new Date().toLocaleDateString() }}
            </p>

            <div class="space-y-8">
              <section>
                <h2 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                  Acceptance of Terms
                </h2>
                <p class="text-[var(--color-text-secondary)] leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                  Use License
                </h2>
                <p class="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only.
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul class="list-disc list-inside text-[var(--color-text-secondary)] space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                  Disclaimer
                </h2>
                <p class="text-[var(--color-text-secondary)] leading-relaxed">
                  The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied,
                  and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions
                  of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                  Limitations
                </h2>
                <p class="text-[var(--color-text-secondary)] leading-relaxed">
                  In no event shall the company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit,
                  or due to business interruption) arising out of the use or inability to use the materials on this website, even if the company or
                  its authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                  Revisions
                </h2>
                <p class="text-[var(--color-text-secondary)] leading-relaxed">
                  We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by
                  the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                  Contact Information
                </h2>
                <p class="text-[var(--color-text-secondary)] leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at
                  <a
                    href="mailto:your.email@example.com"
                    class="text-[var(--color-primary)] hover:underline"
                  >
                    your.email@example.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Terms of Service - Your Name',
  description: 'Terms and conditions for using our website and services.',
})
</script>
