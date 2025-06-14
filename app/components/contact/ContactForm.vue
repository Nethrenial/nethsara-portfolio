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
      novalidate
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
            :aria-invalid="formErrors.name ? 'true' : 'false'"
            :aria-describedby="formErrors.name ? 'name-error' : undefined"
            class="form-input w-full px-4 py-3 rounded-xl text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-all duration-300"
            :class="{ 'border-red-400 focus:ring-red-400/30': formErrors.name }"
            placeholder="Your name"
            @blur="validateField('name')"
          >
          <div
            v-if="formErrors.name"
            id="name-error"
            class="text-red-400 text-sm mt-2"
            role="alert"
          >
            {{ formErrors.name }}
          </div>
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
            :aria-invalid="formErrors.email ? 'true' : 'false'"
            :aria-describedby="formErrors.email ? 'email-error' : undefined"
            class="form-input w-full px-4 py-3 rounded-xl text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-all duration-300"
            :class="{ 'border-red-400 focus:ring-red-400/30': formErrors.email }"
            placeholder="your.email@domain.com"
            @blur="validateField('email')"
          >
          <div
            v-if="formErrors.email"
            id="email-error"
            class="text-red-400 text-sm mt-2"
            role="alert"
          >
            {{ formErrors.email }}
          </div>
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
          :aria-invalid="formErrors.message ? 'true' : 'false'"
          :aria-describedby="formErrors.message ? 'message-error' : undefined"
          class="form-input w-full px-4 py-3 rounded-xl text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-all duration-300 resize-vertical"
          :class="{ 'border-red-400 focus:ring-red-400/30': formErrors.message }"
          placeholder="Tell me about your project, goals, timeline, or any questions you have..."
          @blur="validateField('message')"
        />
        <div
          v-if="formErrors.message"
          id="message-error"
          class="text-red-400 text-sm mt-2"
          role="alert"
        >
          {{ formErrors.message }}
        </div>
      </div>

      <BaseButton
        :type="ButtonType.SUBMIT"
        :disabled="isSubmitting || !isFormValid"
        :variant="ButtonVariant.PRIMARY"
        :icon="isSubmitting ? 'heroicons:arrow-path' : 'heroicons:paper-airplane'"
        :text="isSubmitting ? 'Sending...' : 'Send Message'"
        full-width
        :size="ButtonSize.LARGE"
        :aria-describedby="formStatus === FormStatus.ERROR ? 'form-error' : undefined"
      />
    </form>

    <!-- Enhanced Success/Error Messages with Live Regions -->
    <div
      v-if="formStatus === FormStatus.SUCCESS"
      class="mt-6 glass-card p-6 rounded-xl border border-green-400/30"
      role="alert"
      aria-live="polite"
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
      v-if="formStatus === FormStatus.ERROR"
      id="form-error"
      class="mt-6 glass-card p-6 rounded-xl border border-red-400/30"
      role="alert"
      aria-live="assertive"
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

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ContactForm } from '~/models/ContactForm'
import { FormStatus } from '~/enums/FormStatus'
import { ButtonType } from '~/enums/ButtonType'
import { ButtonVariant } from '~/enums/ButtonVariant'
import { ButtonSize } from '~/enums/ButtonSize'

// Contact form
const form = ref<ContactForm>({
  name: '',
  email: '',
  subject: '',
  budget: '',
  message: '',
})

const isSubmitting = ref<boolean>(false)
const formStatus = ref<string>(FormStatus.IDLE)
const formErrors = ref<Record<string, string>>({})

const isFormValid = computed((): boolean => {
  return form.value.name.trim() !== ''
    && form.value.email.trim() !== ''
    && form.value.message.trim() !== ''
    && Object.keys(formErrors.value).length === 0
})

const validateField = (field: string): void => {
  formErrors.value = { ...formErrors.value }

  switch (field) {
    case 'name':
      if (!form.value.name.trim()) {
        formErrors.value.name = 'Name is required'
      }
      else {
        delete formErrors.value.name
      }
      break
    case 'email':
      if (!form.value.email.trim()) {
        formErrors.value.email = 'Email is required'
      }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
        formErrors.value.email = 'Please enter a valid email address'
      }
      else {
        delete formErrors.value.email
      }
      break
    case 'message':
      if (!form.value.message.trim()) {
        formErrors.value.message = 'Message is required'
      }
      else {
        delete formErrors.value.message
      }
      break
  }
}

const submitForm = async (): Promise<void> => {
  // Validate all fields before submitting
  validateField('name')
  validateField('email')
  validateField('message')

  if (!isFormValid.value) {
    return
  }

  isSubmitting.value = true
  formStatus.value = FormStatus.IDLE

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    formStatus.value = FormStatus.SUCCESS

    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      budget: '',
      message: '',
    }
    formErrors.value = {}
  }
  catch {
    formStatus.value = FormStatus.ERROR
  }
  finally {
    isSubmitting.value = false
  }
}
</script>
