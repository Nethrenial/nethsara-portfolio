<template>
  <article
    class="group relative glass-card rounded-2xl overflow-hidden card-hover glow-on-hover transition-all duration-500 border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 flex flex-col"
    :class="variant === 'compact' ? 'min-h-[420px]' : 'min-h-[480px]'"
  >
    <!-- Status & Category Badges -->
    <div class="absolute top-4 left-4 z-20 flex gap-2">
      <span
        class="px-3 py-1.5 text-xs font-medium rounded-full glass-card border border-[var(--color-border)]"
        :class="getStatusColor(project.status)"
      >
        {{ project.status || 'Featured' }}
      </span>
      <span
        v-if="project.category"
        class="px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30"
      >
        {{ project.category }}
      </span>
    </div>

    <!-- Project Visual Area -->
    <div class="relative h-48 overflow-hidden bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary-dark)]/30 flex-shrink-0">
      <!-- Project Image or Icon -->
      <template v-if="project.image">
        <NuxtImg
          :src="project.image"
          :alt="project.title"
          class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
          loading="lazy"
        />
      </template>
      <template v-else>
        <div class="w-full h-full flex items-center justify-center">
          <div class="relative">
            <div class="w-20 h-20 bg-[var(--color-primary)]/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Icon
                :name="project.icon || 'heroicons:cube'"
                class="w-10 h-10 text-[var(--color-primary)]"
              />
            </div>
            <!-- Animated background circles -->
            <div class="absolute -inset-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <div class="absolute top-0 left-0 w-16 h-16 bg-[var(--color-primary)] rounded-full animate-float-slow" />
              <div class="absolute bottom-0 right-0 w-12 h-12 bg-[var(--color-primary-light)] rounded-full animate-float-delay" />
            </div>
          </div>
        </div>
      </template>

      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)]/80 via-transparent to-transparent" />

      <!-- Hover Overlay with Actions -->
      <div class="absolute inset-0 glass-card opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
        <div class="flex space-x-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          <NuxtLink
            v-if="project.demo && project.demo !== '#'"
            :to="project.demo"
            external
            target="_blank"
            class="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white hover:bg-[var(--color-primary-dark)] transition-colors duration-300 shadow-lg hover:scale-110 hover:-translate-y-1"
          >
            <Icon
              name="heroicons:eye"
              class="w-5 h-5"
            />
          </NuxtLink>
          <NuxtLink
            v-if="project.github && project.github !== '#'"
            :to="project.github"
            external
            target="_blank"
            class="w-12 h-12 glass-card rounded-full flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 shadow-lg hover:scale-110 hover:-translate-y-1"
          >
            <Icon
              name="heroicons:code-bracket"
              class="w-5 h-5"
            />
          </NuxtLink>
        </div>
      </div>

      <!-- Floating Year Badge -->
      <div
        v-if="project.year"
        class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
      >
        <div class="px-3 py-1.5 glass-card rounded-full text-xs text-[var(--color-primary)] font-medium border border-[var(--color-primary)]/30">
          {{ project.year }}
        </div>
      </div>
    </div>

    <!-- Content Area -->
    <div class="relative p-6 flex-1 flex flex-col">
      <!-- Background Pattern -->
      <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />

      <!-- Project Header -->
      <div class="relative z-10 mb-4 flex-1">
        <h3 class="text-xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
          {{ project.title }}
        </h3>

        <p class="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4 line-clamp-3">
          {{ project.description }}
        </p>
      </div>

      <!-- Technology Stack -->
      <div class="relative z-10 mb-4">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies.slice(0, maxTechnologies)"
            :key="tech"
            class="px-3 py-1.5 glass-card text-[var(--color-text-secondary)] text-xs rounded-full hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300 cursor-default border border-[var(--color-border)] hover:border-[var(--color-primary)]/30"
          >
            {{ tech }}
          </span>
          <span
            v-if="project.technologies.length > maxTechnologies"
            class="px-3 py-1.5 bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs rounded-full font-medium border border-[var(--color-primary)]/30"
          >
            +{{ project.technologies.length - maxTechnologies }}
          </span>
        </div>
      </div>

      <!-- Footer -->
      <div class="relative z-10 flex items-center justify-between mt-auto">
        <!-- Project Stats -->
        <div class="flex items-center space-x-4 text-xs text-[var(--color-text-secondary)]">
          <div class="flex items-center space-x-1">
            <Icon
              name="heroicons:star"
              class="w-4 h-4 text-[var(--color-primary)]"
            />
            <span>{{ project.featured ? 'Featured' : 'Project' }}</span>
          </div>
          <div
            v-if="project.year"
            class="flex items-center space-x-1"
          >
            <Icon
              name="heroicons:calendar"
              class="w-4 h-4 text-[var(--color-primary)]"
            />
            <span>{{ project.year }}</span>
          </div>
        </div>

        <!-- View Details Arrow -->
        <div class="flex items-center text-[var(--color-primary)] text-xs group-hover:translate-x-1 transition-transform duration-300">
          <span class="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Details</span>
          <Icon
            name="heroicons:arrow-right"
            class="w-4 h-4"
          />
        </div>
      </div>

      <!-- Subtle Progress Bar (Optional) -->
      <div
        v-if="showProgress"
        class="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-border)] overflow-hidden"
      >
        <div
          class="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-300"
        />
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
  variant: {
    type: String,
    default: 'default', // 'default' | 'compact'
  },
  maxTechnologies: {
    type: Number,
    default: 3,
  },
  showProgress: {
    type: Boolean,
    default: false,
  },
})

// Helper function for status colors
const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case 'active':
    case 'live':
      return 'text-green-400 bg-green-400/10 border-green-400/30'
    case 'completed':
      return 'text-blue-400 bg-blue-400/10 border-blue-400/30'
    case 'in development':
    case 'demo':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
    case 'archived':
      return 'text-gray-400 bg-gray-400/10 border-gray-400/30'
    default:
      return 'text-[var(--color-primary)] bg-[var(--color-primary)]/10 border-[var(--color-primary)]/30'
  }
}
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Enhanced hover effects for the card */
.group:hover .animate-float-slow {
  animation-duration: 3s;
}

.group:hover .animate-float-delay {
  animation-duration: 4s;
}
</style>
