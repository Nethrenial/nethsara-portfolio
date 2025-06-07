<template>
  <div class="glass-card p-8 rounded-2xl">
    <h3 class="text-2xl font-bold text-[var(--color-text-primary)] mb-8 flex items-center">
      <Icon
        name="heroicons:paper-airplane"
        class="w-6 h-6 mr-3 text-[var(--color-primary)]"
      />
      Send Me a <span class="gradient-text ml-2">Message</span>
    </h3>

    <form
      class="space-y-6"
      @submit.prevent="submitForm"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            for="name"
            class="block text-[var(--color-text-primary)] font-medium mb-3 flex items-center"
          >
            <Icon
              name="heroicons:user"
              class="w-4 h-4 mr-2 text-[var(--color-primary)]"
            />
            Name *
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="form-input w-full px-4 py-3 rounded-xl text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-all duration-300"
            placeholder="Your name"
          >
        </div>
        <div>
          <label
            for="email"
            class="block text-[var(--color-text-primary)] font-medium mb-3 flex items-center"
          >
            <Icon
              name="heroicons:envelope"
              class="w-4 h-4 mr-2 text-[var(--color-primary)]"
            />
            Email *
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="form-input w-full px-4 py-3 rounded-xl text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-all duration-300"
            placeholder="your.email@domain.com"
          >
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            for="subject"
            class="block text-[var(--color-text-primary)] font-medium mb-3 flex items-center"
          >
            <Icon
              name="heroicons:tag"
              class="w-4 h-4 mr-2 text-[var(--color-primary)]"
            />
            Subject
          </label>
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            class="form-input w-full px-4 py-3 rounded-xl text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-all duration-300"
            placeholder="Project collaboration, inquiry, etc."
          >
        </div>
        <div>
          <label
            for="budget"
            class="block text-[var(--color-text-primary)] font-medium mb-3 flex items-center"
          >
            <Icon
              name="heroicons:currency-dollar"
              class="w-4 h-4 mr-2 text-[var(--color-primary)]"
            />
            Budget Range
          </label>
          <select
            id="budget"
            v-model="form.budget"
            class="form-input w-full px-4 py-3 rounded-xl text-[var(--color-text-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-all duration-300"
          >
            <option value="">
              Select budget range
            </option>
            <option value="$1,000 - $5,000">
              $1,000 - $5,000
            </option>
            <option value="$5,000 - $10,000">
              $5,000 - $10,000
            </option>
            <option value="$10,000 - $25,000">
              $10,000 - $25,000
            </option>
            <option value="$25,000+">
              $25,000+
            </option>
            <option value="Open to discussion">
              Open to discussion
            </option>
          </select>
        </div>
      </div>

      <div>
        <label
          for="message"
          class="block text-[var(--color-text-primary)] font-medium mb-3 flex items-center"
        >
          <Icon
            name="heroicons:chat-bubble-left-ellipsis"
            class="w-4 h-4 mr-2 text-[var(--color-primary)]"
          />
          Message *
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="6"
          required
          class="form-input w-full px-4 py-3 rounded-xl text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-all duration-300 resize-vertical"
          placeholder="Tell me about your project, goals, timeline, or any questions you have..."
        />
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="btn-primary w-full glow-on-hover disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 py-4 relative overflow-hidden group"
      >
        <Icon
          v-if="isSubmitting"
          name="heroicons:arrow-path"
          class="w-5 h-5 animate-spin"
        />
        <Icon
          v-else
          name="heroicons:paper-airplane"
          class="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
        />
        <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
      </button>
    </form>

    <!-- Enhanced Success/Error Messages -->
    <div
      v-if="formStatus === 'success'"
      class="mt-6 glass-card p-6 rounded-xl border border-green-400/30"
    >
      <div class="flex items-center">
        <div class="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mr-4">
          <Icon
            name="heroicons:check-circle"
            class="w-6 h-6 text-green-400"
          />
        </div>
        <div>
          <h4 class="text-green-400 font-semibold mb-1">
            Message Sent Successfully!
          </h4>
          <p class="text-[var(--color-text-secondary)] text-sm">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </div>

    <div
      v-if="formStatus === 'error'"
      class="mt-6 glass-card p-6 rounded-xl border border-red-400/30"
    >
      <div class="flex items-center">
        <div class="w-12 h-12 bg-red-400/20 rounded-full flex items-center justify-center mr-4">
          <Icon
            name="heroicons:exclamation-triangle"
            class="w-6 h-6 text-red-400"
          />
        </div>
        <div>
          <h4 class="text-red-400 font-semibold mb-1">
            Message Failed to Send
          </h4>
          <p class="text-[var(--color-text-secondary)] text-sm">
            Sorry, there was an error. Please try again or contact me directly.
          </p>
        </div>
      </div>
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
