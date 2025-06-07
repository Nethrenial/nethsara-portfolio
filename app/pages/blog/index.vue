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
                @input="debouncedSearch"
              >
            </div>

            <!-- Compact Tag Filters -->
            <div
              v-if="tagsData && tagsData.length > 0"
              class="flex flex-wrap justify-center gap-2"
            >
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
                v-for="tag in tagsData"
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

            <!-- Tag Filters Skeleton -->
            <TagFiltersSkeleton v-else />

            <!-- Compact Results Info -->
            <div class="text-center">
              <p
                class="text-[var(--color-text-secondary)] text-sm"
                role="status"
                aria-live="polite"
              >
                <template v-if="hasActiveFilters">
                  {{ postsData?.total || 0 }} {{ postsData?.total === 1 ? 'article' : 'articles' }} found
                </template>
                <template v-else>
                  {{ postsData?.total || 0 }} total articles
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
          v-if="(featuredData && featuredData.length > 0 && !hasActiveFilters) || (!featuredData && !hasActiveFilters)"
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
            <!-- Featured Posts Skeleton -->
            <template v-if="!featuredData && showSkeletons">
              <FeaturedPostSkeleton
                v-for="n in 6"
                :key="`featured-skeleton-${n}`"
              />
            </template>

            <!-- Actual Featured Posts -->
            <article
              v-for="post in featuredData"
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

          <!-- Loading State with Skeletons -->
          <div
            v-if="showSkeletons"
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8"
            role="status"
            aria-label="Loading articles"
          >
            <BlogPostSkeleton
              v-for="n in 12"
              :key="`post-skeleton-${n}`"
            />
          </div>

          <!-- No Results -->
          <div
            v-else-if="!postsData?.posts || postsData.posts.length === 0"
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
              v-for="post in postsData.posts"
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

          <!-- Pagination -->
          <div
            v-if="postsData && postsData.total > postsData.limit"
            class="mt-16 flex flex-col items-center space-y-6"
          >
            <!-- Pagination Skeleton -->
            <PaginationSkeleton v-if="showSkeletons && postsData && postsData.total > postsData.limit" />
            <!-- Pagination Info -->
            <div class="text-center">
              <p class="text-[var(--color-text-secondary)] text-sm">
                Showing {{ ((currentPage - 1) * postsData.limit) + 1 }} to {{ Math.min(currentPage * postsData.limit, postsData.total) }} of {{ postsData.total }} articles
              </p>
            </div>

            <!-- Pagination Controls -->
            <nav
              aria-label="Pagination Navigation"
              class="flex items-center space-x-2"
            >
              <!-- Previous Button -->
              <button
                type="button"
                :disabled="currentPage <= 1"
                :class="[
                  'flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300',
                  currentPage <= 1
                    ? 'text-[var(--color-text-secondary)] bg-[var(--color-accent)] cursor-not-allowed opacity-50'
                    : 'text-[var(--color-text-primary)] bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] hover:text-white border border-[var(--color-border)] hover:border-[var(--color-primary)]',
                ]"
                @click="changePage(currentPage - 1)"
              >
                <Icon
                  name="heroicons:chevron-left"
                  class="w-4 h-4 mr-1"
                />
                Previous
              </button>

              <!-- Page Numbers -->
              <div class="flex items-center space-x-1">
                <button
                  v-for="page in visiblePages"
                  :key="page"
                  type="button"
                  :class="[
                    'px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300',
                    page === currentPage
                      ? 'bg-[var(--color-primary)] text-white shadow-md'
                      : 'text-[var(--color-text-primary)] bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] hover:text-white border border-[var(--color-border)] hover:border-[var(--color-primary)]',
                  ]"
                  @click="typeof page === 'number' && changePage(page)"
                >
                  {{ page }}
                </button>
              </div>

              <!-- Next Button -->
              <button
                type="button"
                :disabled="!postsData.hasMore"
                :class="[
                  'flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300',
                  !postsData.hasMore
                    ? 'text-[var(--color-text-secondary)] bg-[var(--color-accent)] cursor-not-allowed opacity-50'
                    : 'text-[var(--color-text-primary)] bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] hover:text-white border border-[var(--color-border)] hover:border-[var(--color-primary)]',
                ]"
                @click="changePage(currentPage + 1)"
              >
                Next
                <Icon
                  name="heroicons:chevron-right"
                  class="w-4 h-4 ml-1"
                />
              </button>
            </nav>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
// Using auto-generated types from Nuxt Content v3 collections
// No need to import custom types since queryCollection returns auto-typed data

// Get route for SSR-compatible query parameter access
const route = useRoute()
const router = useRouter()

// Reactive search params - initialize from route query for SSR
const searchQuery = ref((route.query.search as string) || '')
const selectedTag = ref((route.query.tag as string) || '')
const currentPage = ref(parseInt((route.query.page as string) || '1', 10))
const postsPerPage = 12

// Computed helper for active filters
const hasActiveFilters = computed(() =>
  searchQuery.value.trim() !== '' || selectedTag.value !== '',
)

// Fetch posts with server-side filtering and pagination
const { data: postsData, pending } = await useLazyFetch('/api/blog/search', {
  query: computed(() => ({
    search: searchQuery.value || undefined,
    tag: selectedTag.value || undefined,
    page: currentPage.value,
    limit: postsPerPage,
  })),
  server: true,
  default: () => ({ posts: [], total: 0, page: 1, limit: postsPerPage, hasMore: false }),
})

// Fetch featured posts
const { data: featuredData } = await useLazyFetch('/api/blog/featured', {
  server: true,
  default: () => [],
})

// Fetch all tags
const { data: tagsData } = await useLazyFetch('/api/blog/tags', {
  server: true,
  default: () => [],
})

// Add delayed loading state to prevent skeleton flash
const showSkeletons = ref(false)
let skeletonTimer: NodeJS.Timeout | null = null

// Debounced search to avoid too many API calls
const debouncedSearch = useDebounceFn(() => {
  currentPage.value = 1 // Reset to first page on new search
  updateUrlParams()
}, 300)

// Watch for changes and update URL
watch([selectedTag, currentPage], () => {
  updateUrlParams()
})

// Watch pending state to control skeleton visibility
watch(pending, (isPending) => {
  if (isPending) {
    // Show skeletons only after 200ms delay
    skeletonTimer = setTimeout(() => {
      showSkeletons.value = true
    }, 200)
  }
  else {
    // Hide skeletons immediately when data loads
    if (skeletonTimer) {
      clearTimeout(skeletonTimer)
      skeletonTimer = null
    }
    showSkeletons.value = false
  }
}, { immediate: true })

// Update URL parameters
const updateUrlParams = () => {
  const query: Record<string, string> = {}

  if (searchQuery.value.trim()) {
    query.search = searchQuery.value.trim()
  }
  if (selectedTag.value) {
    query.tag = selectedTag.value
  }
  if (currentPage.value > 1) {
    query.page = currentPage.value.toString()
  }

  router.push({ query })
}

// Pagination helpers
const totalPages = computed(() => {
  if (!postsData.value) return 1
  return Math.ceil(postsData.value.total / postsData.value.limit)
})

const visiblePages = computed(() => {
  const total = totalPages.value
  const current = currentPage.value
  const delta = 2 // Number of pages to show on each side

  const range = []
  const rangeWithDots: (number | string)[] = []

  for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
    range.push(i)
  }

  if (current - delta > 2) {
    rangeWithDots.push(1, '...')
  }
  else {
    rangeWithDots.push(1)
  }

  rangeWithDots.push(...range)

  if (current + delta < total - 1) {
    rangeWithDots.push('...', total)
  }
  else if (total > 1) {
    rangeWithDots.push(total)
  }

  return rangeWithDots.filter((page, index, arr) =>
    page !== '...' || (page === '...' && arr[index - 1] !== '...'),
  ).filter(page => page !== 1 || totalPages.value === 1)
})

// Page change handler
const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    // Scroll to top of posts section
    const postsSection = document.getElementById('all-posts-heading')
    if (postsSection) {
      postsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

// Helper functions
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const calculateReadTime = (content: unknown) => {
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
  currentPage.value = 1
  updateUrlParams()
}

// Dynamic SEO based on filters
const seoTitle = computed(() => {
  const basePage = currentPage.value > 1 ? ` - Page ${currentPage.value}` : ''

  if (searchQuery.value && selectedTag.value) {
    return `"${searchQuery.value}" in ${selectedTag.value}${basePage} - Blog | Nethsara Elvitigala`
  }
  else if (searchQuery.value) {
    return `"${searchQuery.value}"${basePage} - Blog | Nethsara Elvitigala`
  }
  else if (selectedTag.value) {
    return `${selectedTag.value} Articles${basePage} - Blog | Nethsara Elvitigala`
  }
  else {
    return `Blog${basePage} - Nethsara Elvitigala | Web Development Insights`
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

/* Floating animation for background effects */
@keyframes floating {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes floating-delayed {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

.floating {
  animation: floating 6s ease-in-out infinite;
}

.floating-delayed {
  animation: floating-delayed 8s ease-in-out infinite;
  animation-delay: 2s;
}
</style>
