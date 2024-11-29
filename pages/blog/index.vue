<script setup lang="ts">
import type { IBookieApi } from '~/types'
import { useBlogStore } from '~/stores/blog'
import { useOffersStore } from '~/stores/offers'
import { useTrackingStore } from '~/stores/tracking'

const blogStore = useBlogStore()
const offersStore = useOffersStore()
const { trackClick } = useTrackingStore()

const articles = computed(() => blogStore.articles)

const breadcrumbs = computed(() => {
  return [
    {
      title: 'Home',
      disabled: false,
      href: '/'
    },
    {
      title: 'Blog',
      disabled: true,
      href: `#`
    }
  ]
})

const sportsOffers = computed(() => offersStore.getAllOffersByCount(10))

const track = async (
  element: string,
  booker: IBookieApi | Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>
) => {
  await trackClick({
    bookie_id: booker.id,
    page: 'article-index-view',
    client: 'mybetbible',
    element
  })

  window.open(booker.url, '_blank')!.focus()
}

useHead({
  title: 'Betting & Casino Blog | Tips, Strategies, and Latest News at myBetBible',
  titleTemplate: 'Betting & Casino Blog | Tips, Strategies, and Latest News at myBetBible',
  meta: [
    { name: 'description', content: 'Stay updated with the latest betting and casino news at myBetBible. Read expert tips, strategies, and guides to improve your gaming and betting success.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://mybetbible.com/blog/' }
  ]
})

useAsyncData(async () => await offersStore.fetchAllCategories())
useAsyncData(async () => await blogStore.fetchArticles())
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

    <div class="row">
      <div class="col-12 my-8">
        <h1 class="font-semibold text-2xl mb-3">
          Welcome to the myBetBible Blog
        </h1>

        <p class="mb-5">
          Whether you're just starting or you're a betting veteran, our sports betting guides cover everything you need to know to succeed. Learn about different types of bets, odds calculation, bankroll management, and advanced betting strategies. Here are some key guides you can click and explore.
        </p>
      </div>

      <div class="col-sm-8">
        <div class="flex-wrap items-center w-full px-4 py-2 bg-blue-gray-50 bg-opacity-60">
          <nuxt-link
            v-for="article in articles"
            :key="article.slug"
            class="col-md-6 px-3 mb-8"
            :to="`/blog/${article.slug}`"
          >
            <article class="overflow-hidden rounded-lg shadow-lg min-h-[120px] hover:shadow-2xl">
              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg font-semibold">
                  {{ article.title }}
                </h1>
              </header>

              <div class="flex items-center leading-tight md:pl-4">
                <p class="text-green text-sm ml-3 flex">
                  <mbb-icon
                    size="1rem"
                    icon="mdiTag"
                    class="mr-1"
                  />

                  <span class="">
                    {{
                      [
                        ...article.article_categories.map((t) => t.title),
                        article.article_level?.title ?? ''
                      ].join(', ')
                    }}
                  </span>
                </p>
              </div>

              <footer class="flex items-center justify-between text-muted p-2 md:p-4">
                <p>{{ article.description }}</p>
              </footer>
            </article>
          </nuxt-link>
        </div>
      </div>
      <div class="col-sm-4">
        <h2 class="font-semibold text-2xl mb-2 max-sm:text-center">
          Free bets
        </h2>
        <div class="bg-white shadow-2xl">
          <mbb-bonus-card
            v-for="(bookie, idx) in sportsOffers"
            :id="`offer-card-${idx}-card`"
            :key="`offer-card-${idx}`"
            :bookie="bookie"
            @on-click="track('Sidebar bonus card', bookie)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
