<template>
  <div class="pt-20">
    <!-- Article Header -->
    <article class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <!-- Breadcrumb -->
          <nav class="mb-8">
            <ol class="flex items-center space-x-2 text-sm text-[var(--color-text-secondary)]">
              <li>
                <NuxtLink
                  to="/"
                  class="hover:text-[var(--color-primary)] transition-colors duration-300"
                >
                  Home
                </NuxtLink>
              </li>
              <li>/</li>
              <li>
                <NuxtLink
                  to="/blog"
                  class="hover:text-[var(--color-primary)] transition-colors duration-300"
                >
                  Blog
                </NuxtLink>
              </li>
              <li>/</li>
              <li class="text-[var(--color-text-primary)]">
                {{ data.title }}
              </li>
            </ol>
          </nav>

          <!-- Article Meta -->
          <div class="mb-8">
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in data.tags"
                :key="tag"
                class="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm rounded-full"
              >
                {{ tag }}
              </span>
            </div>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
              {{ data.title }}
            </h1>

            <p class="text-lg md:text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              {{ data.description }}
            </p>

            <div class="flex items-center space-x-6 text-sm text-[var(--color-text-secondary)]">
              <div class="flex items-center space-x-2">
                <Icon
                  name="heroicons:user"
                  class="w-4 h-4"
                />
                <span>{{ data.author }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon
                  name="heroicons:calendar"
                  class="w-4 h-4"
                />
                <span>{{ formatDate(data.publishedAt) }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon
                  name="heroicons:clock"
                  class="w-4 h-4"
                />
                <span>{{ readTime }} min read</span>
              </div>
            </div>
          </div>

          <!-- Featured Image -->
          <div
            v-if="data.image"
            class="mb-12"
          >
            <NuxtImg
              :src="data.image"
              :alt="data.title"
              class="w-full h-64 md:h-96 object-cover rounded-xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </article>

    <!-- Article Content -->
    <section class="pb-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <!-- Table of Contents (Desktop) -->
            <aside class="lg:col-span-1 order-2 lg:order-1">
              <div class="sticky top-24">
                <div
                  v-if="data.body?.toc?.links?.length"
                  class="bg-[var(--color-secondary)] rounded-xl p-6 border border-[var(--color-border)]"
                >
                  <h3 class="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
                    Table of Contents
                  </h3>
                  <nav>
                    <ul class="space-y-2">
                      <li
                        v-for="link in data.body.toc.links"
                        :key="link.id"
                      >
                        <a
                          :href="`#${link.id}`"
                          class="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 text-sm block py-1"
                        >
                          {{ link.text }}
                        </a>
                        <ul
                          v-if="link.children"
                          class="ml-4 mt-1 space-y-1"
                        >
                          <li
                            v-for="child in link.children"
                            :key="child.id"
                          >
                            <a
                              :href="`#${child.id}`"
                              class="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 text-xs block py-1"
                            >
                              {{ child.text }}
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </aside>

            <!-- Main Content -->
            <div class="lg:col-span-3 order-1 lg:order-2">
              <div class="prose prose-lg prose-invert max-w-none">
                <ContentRenderer :value="data" />
              </div>

              <!-- Article Footer -->
              <footer class="mt-16 pt-8 border-t border-[var(--color-border)]">
                <!-- Tags -->
                <div class="mb-8">
                  <h3 class="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
                    Tags
                  </h3>
                  <div class="flex flex-wrap gap-2">
                    <NuxtLink
                      v-for="tag in data.tags"
                      :key="tag"
                      :to="`/blog?tag=${encodeURIComponent(tag)}`"
                      class="px-3 py-1 bg-[var(--color-secondary)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300 rounded-full text-sm"
                    >
                      #{{ tag }}
                    </NuxtLink>
                  </div>
                </div>

                <!-- Share -->
                <div class="mb-8">
                  <h3 class="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
                    Share this article
                  </h3>
                  <div class="flex space-x-4">
                    <a
                      :href="shareUrls.twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-10 h-10 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300"
                    >
                      <Icon
                        name="mdi:twitter"
                        class="w-5 h-5"
                      />
                    </a>
                    <a
                      :href="shareUrls.linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-10 h-10 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300"
                    >
                      <Icon
                        name="mdi:linkedin"
                        class="w-5 h-5"
                      />
                    </a>
                    <button
                      class="w-10 h-10 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300"
                      @click="copyToClipboard"
                    >
                      <Icon
                        name="heroicons:link"
                        class="w-5 h-5"
                      />
                    </button>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Articles -->
    <section
      v-if="relatedPosts.length > 0"
      class="py-20 bg-[var(--color-secondary)]"
    >
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-[var(--color-text-primary)] mb-12 text-center">
            Related <span class="gradient-text">Articles</span>
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article
              v-for="post in relatedPosts"
              :key="post._path"
              class="group bg-[var(--color-accent)] rounded-xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300 card-hover"
            >
              <div class="relative overflow-hidden">
                <NuxtImg
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div class="p-6">
                <div class="flex items-center space-x-4 mb-4 text-sm text-[var(--color-text-secondary)]">
                  <span>{{ formatDate(post.publishedAt) }}</span>
                  <span>•</span>
                  <span>{{ calculateReadTime(post.body) }} min read</span>
                </div>

                <h3 class="text-lg font-semibold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
                </h3>

                <p class="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2">
                  {{ post.description }}
                </p>

                <NuxtLink
                  :to="post._path"
                  class="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors duration-300 font-medium text-sm"
                >
                  Read More
                  <Icon
                    name="heroicons:arrow-right"
                    class="ml-2 w-4 h-4"
                  />
                </NuxtLink>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl mx-auto text-center bg-[var(--color-secondary)] rounded-xl p-8 border border-[var(--color-border)]">
          <h2 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
            Stay Updated
          </h2>
          <p class="text-[var(--color-text-secondary)] mb-6">
            Get notified when I publish new articles about web development and technology.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-4 py-3 bg-[var(--color-accent)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
            >
            <button class="bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary-dark)] transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const route = useRoute()
const { data } = await queryContent(route.path).findOne()

// Get related posts
const { data: allPosts } = await queryContent('/blog').find()
const relatedPosts = computed(() => {
  return allPosts
    .filter(post =>
      post._path !== data._path
      && post.tags?.some(tag => data.tags?.includes(tag)),
    )
    .slice(0, 2)
})

// Calculate read time
const readTime = computed(() => {
  if (!data.body) return 0
  const wordsPerMinute = 200
  const words = JSON.stringify(data.body).split(' ').length
  return Math.ceil(words / wordsPerMinute)
})

// Share URLs
const shareUrls = computed(() => {
  const url = `${useRequestURL().origin}${route.path}`
  const text = `${data.title} - ${data.description}`

  return {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  }
})

// Helper functions
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const calculateReadTime = (content) => {
  if (!content) return 0
  const wordsPerMinute = 200
  const words = JSON.stringify(content).split(' ').length
  return Math.ceil(words / wordsPerMinute)
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    // You could add a toast notification here
  }
  catch (err) {
    console.error('Failed to copy link:', err)
  }
}

// SEO
useSeoMeta({
  title: data.title,
  description: data.description,
  ogTitle: data.title,
  ogDescription: data.description,
  ogImage: data.image,
  twitterCard: 'summary_large_image',
  twitterTitle: data.title,
  twitterDescription: data.description,
  twitterImage: data.image,
})

// JSON-LD structured data
useSchemaOrg([
  {
    '@type': 'BlogPosting',
    'headline': data.title,
    'description': data.description,
    'image': data.image,
    'author': {
      '@type': 'Person',
      'name': data.author,
    },
    'datePublished': data.publishedAt,
    'dateModified': data.publishedAt,
  },
])
</script>

<style>
/* Custom prose styling for dark theme */
.prose {
  color: var(--color-text-primary);
}

.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
  color: var(--color-text-primary);
}

.prose h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.prose h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose p {
  color: var(--color-text-secondary);
  line-height: 1.625;
  margin-bottom: 1.5rem;
}

.prose a {
  color: var(--color-primary);
  transition-property: color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.prose a:hover {
  color: var(--color-primary-dark);
}

.prose code {
  background-color: var(--color-secondary);
  color: var(--color-primary);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

.prose pre {
  background-color: var(--color-secondary);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
}

.prose pre code {
  background-color: transparent;
  padding: 0;
}

.prose blockquote {
  border-left-width: 4px;
  border-left-color: var(--color-primary);
  padding-left: 1.5rem;
  font-style: italic;
  color: var(--color-text-secondary);
}

.prose ul, .prose ol {
  color: var(--color-text-secondary);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.prose li {
  line-height: 1.625;
}

.prose img {
  border-radius: 0.5rem;
}

.prose table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--color-border);
}

.prose th, .prose td {
  border: 1px solid var(--color-border);
  padding: 0.5rem 1rem;
}

.prose th {
  background-color: var(--color-secondary);
  font-weight: 600;
  color: var(--color-text-primary);
}

.prose td {
  color: var(--color-text-secondary);
}
</style>
