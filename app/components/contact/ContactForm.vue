<template>
  <div
    v-spotlight
    class="spotlight rounded-3xl border border-line bg-surface p-8 lg:p-12"
    :style="hueStyle('rose')"
  >
    <h3 class="text-3xl font-semibold tracking-display text-ink">
      Send a message
    </h3>
    <p class="mt-2 text-base text-ink-2">
      Goes straight to my inbox. I reply within a day.
    </p>

    <form
      class="mt-12 space-y-8"
      novalidate
      @submit.prevent="submitForm"
    >
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          v-for="field in inlineFields"
          :key="field.id"
        >
          <label
            :for="field.id"
            class="block font-mono text-xs tracking-wide text-ink-2"
          >{{ field.label }}</label>
          <div class="relative">
            <input
              :id="field.id"
              v-model="form[field.id]"
              :type="field.type"
              required
              :autocomplete="field.autocomplete"
              :aria-invalid="!!formErrors[field.id]"
              :aria-describedby="formErrors[field.id] ? `${field.id}-error` : undefined"
              :class="[inputClasses, formErrors[field.id] ? 'border-coral' : '']"
              :placeholder="field.placeholder"
              @blur="validateField(field.id)"
              @input="clearError(field.id)"
            >
            <span
              class="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-(--hue) transition-transform duration-700 ease-out-expo peer-focus:scale-x-100"
              aria-hidden="true"
            />
          </div>
          <ContactFieldError
            :id="`${field.id}-error`"
            :message="formErrors[field.id]"
          />
        </div>
      </div>

      <div>
        <label
          for="subject"
          class="block font-mono text-xs tracking-wide text-ink-2"
        >
          Subject
          <span class="text-ink-3">optional</span>
        </label>
        <div class="relative">
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            :class="inputClasses"
            placeholder="What this is about"
          >
          <span
            class="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-(--hue) transition-transform duration-700 ease-out-expo peer-focus:scale-x-100"
            aria-hidden="true"
          />
        </div>
      </div>

      <div>
        <label
          for="message"
          class="block font-mono text-xs tracking-wide text-ink-2"
        >Message</label>
        <div class="relative">
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            required
            :aria-invalid="!!formErrors.message"
            :aria-describedby="formErrors.message ? 'message-error' : undefined"
            :class="[inputClasses, 'resize-y', formErrors.message ? 'border-coral' : '']"
            placeholder="What you are working on, and where I might fit."
            @blur="validateField('message')"
            @input="clearError('message')"
          />
          <span
            class="pointer-events-none absolute inset-x-0 bottom-2 h-0.5 origin-left scale-x-0 bg-(--hue) transition-transform duration-700 ease-out-expo peer-focus:scale-x-100"
            aria-hidden="true"
          />
        </div>
        <ContactFieldError
          id="message-error"
          :message="formErrors.message"
        />
      </div>

      <BaseButton
        :type="ButtonType.SUBMIT"
        :loading="isSubmitting"
        :size="ButtonSize.LARGE"
        :icon="isSubmitting ? null : 'ph:paper-plane-tilt'"
        :text="isSubmitting ? 'Sending' : 'Send message'"
        hue="rose"
      />
    </form>

    <!-- Status is announced politely and stated plainly, without exclamation -->
    <Transition
      enter-active-class="transition-all duration-700 ease-out-expo"
      enter-from-class="opacity-0 translate-y-4 blur-sm"
      leave-active-class="transition-all duration-300 ease-out-expo"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <div
        v-if="formStatus === FormStatus.SUCCESS"
        key="success"
        class="mt-8 flex items-start gap-4 rounded-2xl bg-sage p-4 text-accent-ink"
        role="status"
        aria-live="polite"
      >
        <svg
          class="animate-check mt-0.5 size-6 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path
            d="M4 12.5 9.5 18 20 6"
            pathLength="1"
          />
        </svg>
        <div>
          <p class="text-base font-semibold">
            Message sent
          </p>
          <p class="mt-1 text-sm">
            It is in my inbox. You will hear back within a day.
          </p>
        </div>
      </div>

      <div
        v-else-if="formStatus === FormStatus.ERROR"
        id="form-error"
        key="error"
        class="mt-8 flex items-start gap-4 rounded-2xl border border-coral p-4"
        role="alert"
        aria-live="assertive"
      >
        <Icon
          name="ph:warning-circle"
          class="mt-0.5 size-6 shrink-0 text-coral"
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
              class="text-coral underline underline-offset-4 transition-colors duration-200 ease-out-expo hover:text-ink"
            >nethsarasandeepaelvitigala@gmail.com</a>
            directly.
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { ContactForm } from '~/models/ContactForm'
import { FormStatus } from '~/enums/FormStatus'
import { ButtonType } from '~/enums/ButtonType'
import { ButtonSize } from '~/enums/ButtonSize'

type RequiredField = 'name' | 'email' | 'message'

const inlineFields: { id: 'name' | 'email', label: string, type: string, autocomplete: string, placeholder: string }[] = [
  { id: 'name', label: 'Name', type: 'text', autocomplete: 'name', placeholder: 'Your name' },
  { id: 'email', label: 'Email', type: 'email', autocomplete: 'email', placeholder: 'you@company.com' },
]

const inputClasses = 'peer mt-2 w-full border-b border-line bg-transparent py-3 text-lg text-ink placeholder:text-ink-3 transition-colors duration-500 ease-out-expo hover:border-ink-3 focus:outline-none'

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

const validateField = (field: RequiredField): void => {
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
