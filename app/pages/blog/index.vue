<template>
  <div class="min-h-screen pt-16 lg:pt-0">
    <!-- Hero Section -->
    <header class="bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] py-16 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-10 right-20 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
        <div class="absolute bottom-10 left-20 w-48 h-48 bg-[var(--color-primary)]/3 rounded-full blur-3xl" />
      </div>

      <div class="container-modern relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            My <span class="gradient-text">Blog</span>
          </h1>
          <p class="text-[var(--color-text-secondary)] text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development, technology, and software engineering.
          </p>

          <!-- Compact Search & Filter Section -->
          <div class="max-w-3xl mx-auto space-y-6">
            <!-- Search Bar -->
            <div class="relative">
              <Icon
                name="heroicons:magnifying-glass"
                class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--color-text-secondary)]"
              />
              <input
                v-model="searchQuery"
                type="search"
                placeholder="Search articles..."
                class="w-full pl-12 pr-6 py-3 bg-[var(--color-accent)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all duration-300"
                aria-label="Search blog articles"
              >
            </div>

            <!-- Compact Tag Filters -->
            <div class="flex flex-wrap justify-center gap-2">
              <button
                type="button"
                :class="[
                  'px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300',
                  !selectedTag
                    ? 'bg-[var(--color-primary)] text-white shadow-md'
                    : 'bg-[var(--color-accent)] text-[var(--color-text-secondary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]',
                ]"
                @click="selectedTag = ''"
              >
                All Topics
              </button>
              <button
                v-for="tag in allTags"
                :key="tag"
                type="button"
                :class="[
                  'px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300',
                  selectedTag === tag
                    ? 'bg-[var(--color-primary)] text-white shadow-md'
                    : 'bg-[var(--color-accent)] text-[var(--color-text-secondary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]',
                ]"
                @click="selectedTag = selectedTag === tag ? '' : tag"
              >
                {{ tag }}
              </button>
            </div>

            <!-- Compact Results Info -->
            <div class="text-center">
              <p
                class="text-[var(--color-text-secondary)] text-sm"
                role="status"
                aria-live="polite"
              >
                <template v-if="searchQuery || selectedTag">
                  {{ filteredPosts.length }} {{ filteredPosts.length === 1 ? 'article' : 'articles' }} found
                </template>
                <template v-else>
                  {{ posts?.length || 0 }} total articles
                </template>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="py-12 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-32 right-20 w-96 h-96 bg-[var(--color-primary)]/4 rounded-full blur-3xl floating" />
        <div class="absolute bottom-20 left-10 w-80 h-80 bg-[var(--color-primary)]/6 rounded-full blur-3xl floating-delayed" />
      </div>

      <div class="container-modern relative z-10">
        <!-- Featured Posts -->
        <section
          v-if="featuredPosts && featuredPosts.length > 0 && !searchQuery && !selectedTag"
          class="mb-16"
          aria-labelledby="featured-heading"
        >
          <h2
            id="featured-heading"
            class="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-12 text-center"
          >
            Featured <span class="gradient-text">Articles</span>
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
            <article
              v-for="post in featuredPosts"
              :key="post.path"
              class="group bg-[var(--color-secondary)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 card-hover relative"
            >
              <!-- Featured Badge -->
              <div class="absolute top-4 left-4 z-10">
                <span class="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ Featured
                </span>
              </div>

              <!-- Image -->
              <div class="relative overflow-hidden aspect-video">
                <NuxtImg
                  :src="post.image"
                  :alt="post.alt || post.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <!-- Content -->
              <div class="p-8">
                <header class="mb-6">
                  <div class="flex items-center gap-4 mb-4 text-sm text-[var(--color-text-secondary)]">
                    <time :datetime="post.publishedAt">
                      {{ formatDate(post.publishedAt) }}
                    </time>
                    <span aria-hidden="true">•</span>
                    <span>{{ calculateReadTime(post.body) }} min read</span>
                    <span aria-hidden="true">•</span>
                    <span>{{ post.author }}</span>
                  </div>

                  <h3 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-tight">
                    <NuxtLink
                      :to="post.path"
                      class="after:absolute after:inset-0"
                    >
                      {{ post.title }}
                    </NuxtLink>
                  </h3>
                </header>

                <p class="text-[var(--color-text-secondary)] mb-6 line-clamp-3 leading-relaxed">
                  {{ post.description }}
                </p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-6">
                  <span
                    v-for="tag in post.tags?.slice(0, 3)"
                    :key="tag"
                    class="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm rounded-full font-medium border border-[var(--color-primary)]/20"
                  >
                    {{ tag }}
                  </span>
                  <span
                    v-if="post.tags && post.tags.length > 3"
                    class="px-3 py-1 bg-[var(--color-accent)] text-[var(--color-text-secondary)] text-sm rounded-full font-medium"
                  >
                    +{{ post.tags.length - 3 }} more
                  </span>
                </div>

                <div class="flex items-center justify-between">
                  <span class="text-[var(--color-primary)] font-semibold group-hover:text-[var(--color-primary-dark)] transition-colors duration-300">
                    Read Article
                  </span>
                  <Icon
                    name="heroicons:arrow-right"
                    class="w-5 h-5 text-[var(--color-primary)] transform group-hover:translate-x-2 transition-transform duration-300"
                  />
                </div>
              </div>
            </article>
          </div>
        </section>

        <!-- All Posts Grid -->
        <section aria-labelledby="all-posts-heading">
          <h2
            id="all-posts-heading"
            class="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-12 text-center"
          >
            {{ getResultsTitle() }}
          </h2>

          <!-- No Results -->
          <div
            v-if="filteredPosts.length === 0"
            class="text-center py-24"
            role="status"
          >
            <div class="mb-8">
              <Icon
                name="heroicons:document-magnifying-glass"
                class="w-24 h-24 text-[var(--color-text-secondary)] mx-auto mb-6 opacity-50"
              />
              <h3 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                No articles found
              </h3>
              <p class="text-[var(--color-text-secondary)] text-lg mb-8 max-w-md mx-auto">
                We couldn't find any articles matching your search criteria. Try adjusting your search terms or filters.
              </p>
              <button
                type="button"
                class="px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl font-semibold hover:bg-[var(--color-primary-dark)] transition-colors duration-300"
                @click="clearFilters"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          <!-- Posts Grid -->
          <div
            v-else
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8"
          >
            <article
              v-for="post in filteredPosts"
              :key="post.path"
              class="group bg-[var(--color-secondary)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[var(--color-primary)]/5 card-hover relative flex flex-col"
            >
              <!-- Image -->
              <div class="relative overflow-hidden aspect-video">
                <NuxtImg
                  :src="post.image"
                  :alt="post.alt || post.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <!-- Content -->
              <div class="p-6 flex flex-col flex-grow">
                <header class="mb-4">
                  <div class="flex items-center gap-3 mb-3 text-sm text-[var(--color-text-secondary)]">
                    <time :datetime="post.publishedAt">
                      {{ formatDate(post.publishedAt) }}
                    </time>
                    <span aria-hidden="true">•</span>
                    <span>{{ calculateReadTime(post.body) }} min</span>
                  </div>

                  <h3 class="text-lg font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-tight line-clamp-2">
                    <NuxtLink
                      :to="post.path"
                      class="after:absolute after:inset-0"
                    >
                      {{ post.title }}
                    </NuxtLink>
                  </h3>
                </header>

                <p class="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                  {{ post.description }}
                </p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tag in post.tags?.slice(0, 2)"
                    :key="tag"
                    class="px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs rounded-full font-medium border border-[var(--color-primary)]/20"
                  >
                    {{ tag }}
                  </span>
                  <span
                    v-if="post.tags && post.tags.length > 2"
                    class="px-2 py-1 bg-[var(--color-accent)] text-[var(--color-text-secondary)] text-xs rounded-full font-medium"
                  >
                    +{{ post.tags.length - 2 }}
                  </span>
                </div>

                <!-- Read More -->
                <div class="flex items-center justify-between mt-auto">
                  <span class="text-[var(--color-primary)] font-semibold text-sm group-hover:text-[var(--color-primary-dark)] transition-colors duration-300">
                    Read More
                  </span>
                  <Icon
                    name="heroicons:arrow-right"
                    class="w-4 h-4 text-[var(--color-primary)] transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

// Fetch all blog posts from the content directory
const { data: posts } = await useAsyncData(() =>
  queryCollection('blog').all(),
)

// Get route for SSR-compatible query parameter access
const route = useRoute()

// Sync search and tag filters with URL query parameters
const params = useUrlSearchParams('history')

// Initialize from route query for SSR compatibility
const searchQuery = computed({
  get: () => {
    // Use route.query for SSR, fallback to params for client updates
    if (import.meta.server) {
      return (route.query.search as string) || ''
    }
    return params.search as string || ''
  },
  set: (value: string) => {
    if (value) {
      params.search = value
    }
    else {
      delete params.search
    }
  },
})

const selectedTag = computed({
  get: () => {
    // Use route.query for SSR, fallback to params for client updates
    if (import.meta.server) {
      return (route.query.tag as string) || ''
    }
    return params.tag as string || ''
  },
  set: (value: string) => {
    if (value) {
      params.tag = value
    }
    else {
      delete params.tag
    }
  },
})

// Sync URL params with route query on client hydration
onMounted(() => {
  // Ensure URL params are in sync with the current route query
  if (route.query.search && !params.search) {
    params.search = route.query.search as string
  }
  if (route.query.tag && !params.tag) {
    params.tag = route.query.tag as string
  }
})

// Get all unique tags, sorted alphabetically
const allTags = computed(() => {
  if (!posts.value) return []

  const tags = new Set<string>()
  posts.value.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => tags.add(tag))
    }
  })
  return Array.from(tags).sort()
})

// Featured posts (limit to 6 for better layout)
const featuredPosts = computed(() => {
  if (!posts.value) return []
  return posts.value
    .filter(post => post.featured === true)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 6)
})

// Filtered posts based on search and tag
const filteredPosts = computed(() => {
  if (!posts.value) return []

  let filtered = [...posts.value]

  // Apply search filter
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    filtered = filtered.filter((post) => {
      const searchableContent = [
        post.title,
        post.description,
        post.author,
        ...(post.tags || []),
      ].join(' ').toLowerCase()

      return searchableContent.includes(query)
    })
  }

  // Apply tag filter
  if (selectedTag.value) {
    filtered = filtered.filter(post =>
      post.tags && post.tags.includes(selectedTag.value),
    )
  }

  // Remove featured posts from regular listing if no filters applied
  if (!searchQuery.value && !selectedTag.value) {
    filtered = filtered.filter(post => !post.featured)
  }

  // Sort by published date (newest first)
  return filtered.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
})

// Helper functions
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const calculateReadTime = (content: string | object | undefined) => {
  if (!content) return 1

  const wordsPerMinute = 200
  let text = ''

  if (typeof content === 'string') {
    text = content
  }
  else if (content && typeof content === 'object') {
    text = JSON.stringify(content)
  }

  const words = text.split(/\s+/).filter(word => word.length > 0).length
  const readTime = Math.ceil(words / wordsPerMinute)
  return Math.max(1, readTime) // Minimum 1 minute
}

const getResultsTitle = () => {
  if (searchQuery.value && selectedTag.value) {
    return `Search Results for "${searchQuery.value}" in ${selectedTag.value}`
  }
  else if (searchQuery.value) {
    return `Search Results for "${searchQuery.value}"`
  }
  else if (selectedTag.value) {
    return `${selectedTag.value} Articles`
  }
  else {
    return 'All Articles'
  }
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedTag.value = ''
}

// Dynamic SEO based on filters
const seoTitle = computed(() => {
  if (searchQuery.value && selectedTag.value) {
    return `"${searchQuery.value}" in ${selectedTag.value} - Blog | Nethsara Elvitigala`
  }
  else if (searchQuery.value) {
    return `"${searchQuery.value}" - Blog | Nethsara Elvitigala`
  }
  else if (selectedTag.value) {
    return `${selectedTag.value} Articles - Blog | Nethsara Elvitigala`
  }
  else {
    return 'Blog - Nethsara Elvitigala | Web Development Insights'
  }
})

const seoDescription = computed(() => {
  if (searchQuery.value && selectedTag.value) {
    return `Search results for "${searchQuery.value}" in ${selectedTag.value} category. Thoughts, tutorials, and insights on web development, technology, and software engineering.`
  }
  else if (searchQuery.value) {
    return `Search results for "${searchQuery.value}". Thoughts, tutorials, and insights on web development, technology, and software engineering.`
  }
  else if (selectedTag.value) {
    return `Articles about ${selectedTag.value}. Thoughts, tutorials, and insights on web development, technology, and software engineering.`
  }
  else {
    return 'Read my latest thoughts and tutorials on web development, JavaScript, Vue.js, Nuxt.js, and modern software engineering practices.'
  }
})

// SEO
useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
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

.card-hover {
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-8px);
}

.gradient-text {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Focus styles for accessibility */
button:focus-visible,
input:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Improve image loading */
img {
  background: var(--color-accent);
}

/* Enhanced responsive design */
@media (max-width: 768px) {
  .aspect-video {
    aspect-ratio: 16 / 10;
  }
}
</style>
