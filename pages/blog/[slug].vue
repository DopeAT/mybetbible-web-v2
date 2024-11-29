<script setup lang="ts">
import type { IBookieApi } from '~/types'
import { useRoute } from '#app'
import { useBlogStore } from '~/stores/blog'
import { useOffersStore } from '~/stores/offers'
import { useTrackingStore } from '~/stores/tracking'

const route = useRoute()
const blogStore = useBlogStore()
const offersStore = useOffersStore()
const { trackClick } = useTrackingStore()

const article = computed(() => blogStore.article)

const allOffers = computed(() => offersStore.getAllOffersByCount(10))

const breadcrumbs = computed(() => {
  const breadcrumbs = [
    {
      title: 'Home',
      disabled: false,
      href: '/'
    },
    {
      title: 'Blog',
      disabled: false,
      href: '/blog'
    }
  ]

  if (!article.value?.id) return breadcrumbs

  breadcrumbs.push({
    title: article.value!.title,
    disabled: true,
    href: `/${article.value!.slug}`
  })

  return breadcrumbs
})

const track = async (
  element: string,
  booker: IBookieApi | Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>
) => {
  await trackClick({
    bookie_id: booker.id,
    page: `article-${route.params.slug}`,
    client: 'mybetbible',
    element
  })

  window.open(booker.url, '_blank')!.focus()
}

useServerSeoMeta({
  title: () => article.value?.meta_title ?? '',
  ogTitle: () => article.value?.meta_title ?? '',
  titleTemplate: () => article.value?.meta_title ?? '',
  description: () => article.value?.meta_desc ?? '',
  ogDescription: () => article.value?.meta_desc ?? ''
})

useHead({
  link: () => [
    { rel: 'canonical', href: `https://mybetbible.com/blog/${article.value?.slug}` }
  ]
})

useAsyncData(async () => {
  if (!route.params.slug) return

  await blogStore.findArticle(route.params.slug as string)
})

onMounted(async () => {
  await offersStore.fetchAllCategories()
})
</script>

<template>
  <div>
    <nav
      aria-label="breadcrumb"
      class="bg-[#e9ecef] w-full"
    >
      <ol class="flex flex-wrap items-center w-full px-4 py-2 bg-blue-gray-50 bg-opacity-60">
        <li
          v-for="(item, idx) in breadcrumbs"
          :key="idx"
          class="flex items-center font-semibold text-sm transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500"
        >
          <nuxt-link
            :to="item.href"
            class="opacity-60"
            active-class="text-black"
            :class="{ 'text-blue-700 hover:underline': idx < breadcrumbs.length - 1 }"
          >
            {{ item.title }}
          </nuxt-link>
          <span
            v-if="idx < breadcrumbs.length - 1"
            class="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500"
          >
            /
          </span>
        </li>
      </ol>
    </nav>

    <div class="container-sm">
      <div
        v-if="article"
        class="mt-5 row"
      >
        <div class="col-sm-8">
          <h1 class="font-semibold text-2xl">
            {{ article.title }}
          </h1>

          <div
            v-if="article.article_categories"
            class="flex items-center leading-tight my-8"
          >
            <div>Categories:</div>

            <p class="text-green text-sm ml-3 flex">
              <mbb-icon
                size="1rem"
                icon="mdiTag"
                class="mr-1"
              />
              <span class="font-semibold">
                {{
                  [
                    ...article.article_categories.map((t) => t.title),
                    article.article_level?.title ?? ''
                  ].join(', ')
                }}
              </span>
            </p>
          </div>

          <div
            class="article-body"
            v-html="article.body"
          />
        </div>

        <div class="col-sm-4">
          <h2 class="font-semibold text-2xl mb-2 max-sm:text-center">
            Free bets
          </h2>
          <div class="bg-white shadow-2xl">
            <mbb-bonus-card
              v-for="(bookie, idx) in allOffers"
              :id="`offer-card-${idx}-card`"
              :key="`offer-card-${idx}`"
              :bookie="bookie"
              @on-click="track('Sidebar bonus card', bookie)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
