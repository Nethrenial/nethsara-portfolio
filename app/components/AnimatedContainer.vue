<template>
  <div
    :class="containerClasses"
    :style="animationStyle"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface AnimatedContainerProps {
  delay?: number // delay in milliseconds
  animation?: 'fade-in' | 'slide-up' | 'scale-in'
  duration?: number // duration in milliseconds
}

const props = withDefaults(defineProps<AnimatedContainerProps>(), {
  delay: 0,
  animation: 'fade-in',
  duration: 800,
})

const containerClasses = computed(() => {
  const classes = ['opacity-0']

  switch (props.animation) {
    case 'fade-in':
      classes.push('animate-fade-in')
      break
    case 'slide-up':
      classes.push('animate-slide-up')
      break
    case 'scale-in':
      classes.push('animate-scale-in')
      break
  }

  return classes.join(' ')
})

const animationStyle = computed(() => {
  return {
    'animation-delay': `${props.delay}ms`,
    'animation-duration': `${props.duration}ms`,
  }
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn ease forwards;
}

.animate-slide-up {
  animation: slideUp ease forwards;
}

.animate-scale-in {
  animation: scaleIn ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
