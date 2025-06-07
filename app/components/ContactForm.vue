<template>
  <div>
    <h3 class="text-2xl font-bold text-[var(--color-text-primary)] mb-8">
      Send Me a <span class="gradient-text">Message</span>
    </h3>

    <form
      class="space-y-6"
      @submit.prevent="submitForm"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            for="name"
            class="block text-[var(--color-text-primary)] font-medium mb-2"
          >
            Name *
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
            placeholder="Your name"
          >
        </div>
        <div>
          <label
            for="email"
            class="block text-[var(--color-text-primary)] font-medium mb-2"
          >
            Email *
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
            placeholder="your.email@domain.com"
          >
        </div>
      </div>

      <div>
        <label
          for="subject"
          class="block text-[var(--color-text-primary)] font-medium mb-2"
        >
          Subject *
        </label>
        <input
          id="subject"
          v-model="form.subject"
          type="text"
          required
          class="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
          placeholder="What's this about?"
        >
      </div>

      <div>
        <label
          for="budget"
          class="block text-[var(--color-text-primary)] font-medium mb-2"
        >
          Project Budget (Optional)
        </label>
        <select
          id="budget"
          v-model="form.budget"
          class="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
        >
          <option value="">
            Select budget range
          </option>
          <option value="< $5,000">
            Less than $5,000
          </option>
          <option value="$5,000 - $10,000">
            $5,000 - $10,000
          </option>
          <option value="$10,000 - $25,000">
            $10,000 - $25,000
          </option>
          <option value="$25,000 - $50,000">
            $25,000 - $50,000
          </option>
          <option value="> $50,000">
            More than $50,000
          </option>
        </select>
      </div>

      <div>
        <label
          for="message"
          class="block text-[var(--color-text-primary)] font-medium mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="6"
          required
          class="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300 resize-vertical"
          placeholder="Tell me about your project, goals, timeline, or any questions you have..."
        />
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-[var(--color-primary)] text-white py-4 rounded-lg font-semibold hover:bg-[var(--color-primary-dark)] transition-colors duration-300 hover:shadow-[var(--shadow-glow)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <Icon
          v-if="isSubmitting"
          name="heroicons:arrow-path"
          class="w-5 h-5 mr-2 animate-spin"
        />
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>
    </form>

    <!-- Success/Error Messages -->
    <div
      v-if="formStatus === 'success'"
      class="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
    >
      <p class="text-green-400 flex items-center">
        <Icon
          name="heroicons:check-circle"
          class="w-5 h-5 mr-2"
        />
        Thank you! Your message has been sent successfully. I'll get back to you soon.
      </p>
    </div>

    <div
      v-if="formStatus === 'error'"
      class="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
    >
      <p class="text-red-400 flex items-center">
        <Icon
          name="heroicons:exclamation-circle"
          class="w-5 h-5 mr-2"
        />
        Sorry, there was an error sending your message. Please try again or contact me directly.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Contact form
const form = ref({
  name: '',
  email: '',
  subject: '',
  budget: '',
  message: '',
})

const isSubmitting = ref(false)
const formStatus = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  formStatus.value = ''

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    formStatus.value = 'success'

    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      budget: '',
      message: '',
    }
  }
  catch {
    formStatus.value = 'error'
  }
  finally {
    isSubmitting.value = false
  }
}
</script>
