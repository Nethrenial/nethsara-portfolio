<template>
  <div class="rounded-2xl bg-surface-2 p-8 lg:p-10">
    <h3 class="text-xl font-semibold text-ink">
      Send a message
    </h3>
    <p class="mt-2 text-base text-ink-2">
      Goes straight to my inbox. I reply within a day.
    </p>

    <form
      class="mt-8 space-y-6"
      novalidate
      @submit.prevent="submitForm"
    >
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label
            for="name"
            class="block text-sm font-medium text-ink"
          >Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            autocomplete="name"
            :aria-invalid="!!formErrors.name"
            :aria-describedby="formErrors.name ? 'name-error' : undefined"
            :class="[inputClasses, formErrors.name ? errorRing : '']"
            placeholder="Your name"
            @blur="validateField('name')"
            @input="clearError('name')"
          >
          <p
            v-if="formErrors.name"
            id="name-error"
            class="mt-2 text-sm text-ink"
            role="alert"
          >
            {{ formErrors.name }}
          </p>
        </div>

        <div>
          <label
            for="email"
            class="block text-sm font-medium text-ink"
          >Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            autocomplete="email"
            :aria-invalid="!!formErrors.email"
            :aria-describedby="formErrors.email ? 'email-error' : undefined"
            :class="[inputClasses, formErrors.email ? errorRing : '']"
            placeholder="you@company.com"
            @blur="validateField('email')"
            @input="clearError('email')"
          >
          <p
            v-if="formErrors.email"
            id="email-error"
            class="mt-2 text-sm text-ink"
            role="alert"
          >
            {{ formErrors.email }}
          </p>
        </div>
      </div>

      <div>
        <label
          for="subject"
          class="block text-sm font-medium text-ink"
        >
          Subject
          <span class="font-normal text-ink-3">optional</span>
        </label>
        <input
          id="subject"
          v-model="form.subject"
          type="text"
          :class="inputClasses"
          placeholder="What this is about"
        >
      </div>

      <div>
        <label
          for="message"
          class="block text-sm font-medium text-ink"
        >Message</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="6"
          required
          :aria-invalid="!!formErrors.message"
          :aria-describedby="formErrors.message ? 'message-error' : undefined"
          :class="[inputClasses, 'resize-y', formErrors.message ? errorRing : '']"
          placeholder="What you are working on, and where I might fit."
          @blur="validateField('message')"
          @input="clearError('message')"
        />
        <p
          v-if="formErrors.message"
          id="message-error"
          class="mt-2 text-sm text-ink"
          role="alert"
        >
          {{ formErrors.message }}
        </p>
      </div>

      <BaseButton
        :type="ButtonType.SUBMIT"
        :loading="isSubmitting"
        :variant="ButtonVariant.PRIMARY"
        :size="ButtonSize.LARGE"
        :icon="isSubmitting ? null : 'ph:paper-plane-tilt'"
        :text="isSubmitting ? 'Sending' : 'Send message'"
        full-width
      />
    </form>

    <!-- Status is announced politely and stated plainly, without exclamation -->
    <div
      v-if="formStatus === FormStatus.SUCCESS"
      class="mt-6 flex items-start gap-3 rounded-xl border border-line bg-surface p-5"
      role="status"
      aria-live="polite"
    >
      <Icon
        name="ph:check-circle"
        class="mt-0.5 shrink-0 text-xl text-accent"
        aria-hidden="true"
      />
      <div>
        <p class="text-base font-semibold text-ink">
          Message sent
        </p>
        <p class="mt-1 text-sm text-ink-2">
          It is in my inbox. You will hear back within a day.
        </p>
      </div>
    </div>

    <div
      v-if="formStatus === FormStatus.ERROR"
      id="form-error"
      class="mt-6 flex items-start gap-3 rounded-xl border border-line bg-surface p-5"
      role="alert"
      aria-live="assertive"
    >
      <Icon
        name="ph:warning-circle"
        class="mt-0.5 shrink-0 text-xl text-ink"
        aria-hidden="true"
      />
      <div>
        <p class="text-base font-semibold text-ink">
          The message did not send
        </p>
        <p class="mt-1 text-sm text-ink-2">
          Something failed on the way out. Try again, or email
          <a
            href="mailto:nethsarasandeepaelvitigala@gmail.com"
            class="text-accent underline underline-offset-4"
          >nethsarasandeepaelvitigala@gmail.com</a>
          directly.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ContactForm } from '~/models/ContactForm'
import { FormStatus } from '~/enums/FormStatus'
import { ButtonType } from '~/enums/ButtonType'
import { ButtonVariant } from '~/enums/ButtonVariant'
import { ButtonSize } from '~/enums/ButtonSize'

const inputClasses = 'mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-3 transition-colors duration-200 ease-out-expo hover:border-ink-3 focus:border-accent focus:outline-none'
const errorRing = 'border-ink ring-1 ring-ink'

const emptyForm = (): ContactForm => ({ name: '', email: '', subject: '', message: '' })

const form = ref<ContactForm>(emptyForm())
const isSubmitting = ref(false)
const formStatus = ref<FormStatus>(FormStatus.IDLE)
const formErrors = ref<Partial<Record<keyof ContactForm, string>>>({})

const clearError = (field: keyof ContactForm): void => {
  formErrors.value = Object.fromEntries(
    Object.entries(formErrors.value).filter(([key]) => key !== field),
  )
}

const validateField = (field: 'name' | 'email' | 'message'): void => {
  const value = form.value[field].trim()

  if (!value) {
    const labels = { name: 'name', email: 'email address', message: 'message' }
    formErrors.value[field] = `Please enter your ${labels[field]}.`
    return
  }

  if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    formErrors.value.email = 'That email address does not look right.'
    return
  }

  clearError(field)
}

const submitForm = async (): Promise<void> => {
  validateField('name')
  validateField('email')
  validateField('message')

  if (Object.keys(formErrors.value).length > 0) {
    // Moves focus to the first problem rather than leaving the user to hunt.
    const firstError = Object.keys(formErrors.value)[0]
    document.getElementById(firstError!)?.focus()
    return
  }

  isSubmitting.value = true
  formStatus.value = FormStatus.IDLE

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form.value },
    })

    if (response.success) {
      formStatus.value = FormStatus.SUCCESS
      form.value = emptyForm()
      formErrors.value = {}
    }
    else {
      formStatus.value = FormStatus.ERROR
    }
  }
  catch (error) {
    console.error('Contact form submission failed:', error)
    formStatus.value = FormStatus.ERROR
  }
  finally {
    isSubmitting.value = false
  }
}
</script>
