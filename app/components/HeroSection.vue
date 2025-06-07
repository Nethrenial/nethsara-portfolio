<template>
  <section
    id="hero"
    class="min-h-screen flex items-center justify-center px-8 py-16"
  >
    <div class="max-w-4xl mx-auto text-center">
      <div class="mb-8">
        <p class="text-[var(--color-primary)] text-lg mb-4 opacity-0 animate-fade-in">
          Hello, I'm
        </p>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] mb-4 opacity-0 animate-fade-in animation-delay-200">
          Nethsara <span class="gradient-text">Elvitigala</span>
        </h1>
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--color-text-secondary)] mb-6 opacity-0 animate-fade-in animation-delay-400">
          Full-Stack <span class="text-[var(--color-primary)]">Software Engineer</span>
        </h2>
      </div>

      <p class="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-600">
        I create exceptional digital experiences through clean code, innovative solutions, and cutting-edge technologies.
        Passionate about building scalable applications that make a difference.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in animation-delay-800">
        <a
          href="#projects"
          class="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-colors duration-300 hover:shadow-[var(--shadow-glow)] hover:scale-105"
        >
          View My Work
        </a>
        <a
          href="#contact"
          class="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
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
</style>
