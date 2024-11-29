<script setup lang="ts">
import type { IBookieApi } from '~/types'

const route = useRoute()
const offersStore = useOffersStore()
const bookiesStore = useBookiesStore()
const { trackClick } = useTrackingStore()

const bookie = computed<Required<IBookieApi>>(() => bookiesStore.currentBookie!)
const allOffers = computed(() => offersStore.getAllOffersByCount(10))

const breadcrumbs = computed(() => {
  const breadcrumbs = [
    {
      title: 'Home',
      disabled: false,
      href: '/'
    }
  ]

  if (!bookie.value) return breadcrumbs

  breadcrumbs.push(
    {
      title: bookie.value?.categories[0].name,
      disabled: false,
      href: `/${bookie.value.categories[0].slug!}-bonus-offers`
    },
    {
      title: bookie.value.name,
      disabled: true,
      href: `/review/${bookie.value.slug}`
    }
  )

  return breadcrumbs
})

const track = async (
  element: string,
  booker:
    | IBookieApi
    | Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'> = bookie.value
) => {
  if (!bookie.value) return

  await trackClick({
    bookie_id: booker.id,
    page: 'landing-id-view',
    client: 'mybetbible',
    element
  })

  if (window) {
    window.open(booker.url, '_blank')!.focus()
  }
}

useServerSeoMeta({
  title: () => bookie.value?.seo?.title ?? '',
  ogTitle: () => bookie.value?.seo?.title ?? '',
  description: () => bookie.value?.seo?.description ?? '',
  ogDescription: () => bookie.value?.seo?.description ?? ''
})

useAsyncData(async () => {
  if (!route.params.id) return

  await bookiesStore.fetchBookie(route.params.id as string)
})

onMounted(async () => {
  await offersStore.fetchAllCategories()
})
</script>

<template>
  <div class="bookie-landing">
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
        v-if="bookie"
        class="mt-5 row"
      >
        <div class="col-sm-8">
          <h1 class="font-semibold text-2xl">
            {{ bookie.name }} Welcome Bonus, Bonus Offers and Reviews
          </h1>

          <div class="welcome-box text-center mt-5">
            <div class="welcome-bonus-fist hero-dark-background">
              <span
                :title="`${bookie.name} Welcome Bonus`"
                class="text-[#777] cursor-pointer hover:underline"
                @click="track('welcome bonus title')"
              >
                {{ bookie.name }} Welcome Bonus
              </span>
              <h2 class="my-2 font-semibold text-3xl">
                {{ bookie.bonuses[0].title }}
              </h2>
              <p class="terms">
                New customer offer. T&amp;Cs apply.
              </p>
              <div class="mt-3">
                <button
                  class="bg-green hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-xl"
                  @click="track('Header cta')"
                >
                  Claim Bonus
                </button>
              </div>
              <div class="small mt-3">
                <span
                  class="text-[#777] underline cursor-pointer"
                  @click="track('Header bottom link')"
                >
                  Visit {{ bookie.name }} website
                </span>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <mbb-rating-card :bookie="bookie" />
          </div>

          <div
            v-if="bookie.body"
            class="mt-4 promotions"
          >
            <h2 class="font-semibold text-xl border-green border-b">
              {{ bookie.name }} Overview
            </h2>

            <div class="my-5">
              <div
                class="mb-5 description-body"
                v-html="bookie.body"
              />

              <a
                :href="bookie.url"
                target="_blank"
                class="font-bold underline"
                :class="`color-${bookie.slug}`"
              >
                Open an account now
              </a>
            </div>
          </div>

          <div
            v-if="bookie.offers.length"
            class="mt-4 promotions"
          >
            <h2 class="font-semibold text-xl border-green border-b">
              {{ bookie.name }} Offers
            </h2>

            <div
              v-for="(offer, idx) in bookie.offers"
              :key="`offer-${idx}`"
              class="offer-promo my-5"
            >
              <h3 class="text-xl mb-3 font-semibold">
                <mbb-icon
                  icon="mdiMenuRight"
                  class="text-green inline mr-1"
                />

                {{ offer.name }}
              </h3>

              <p
                v-if="offer.description"
                class="text-muted mb-4"
              >
                {{ offer.description }}
              </p>

              <div
                v-if="offer.body"
                class="offers-body-description"
                v-html="offer.body"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <h2 class="font-semibold text-2xl mb-2 max-sm:text-center">
            {{ bookie.name }} Bonus Offers
          </h2>
          <div class="side-offers">
            <div
              v-for="(bonus, idx) in bookie.bonuses"
              :key="`bonus-${idx}`"
              class="bg-white rounded p-3 mb-5 shadow-lg"
            >
              <h6 class="font-semibold border-bottom-green border-b pb-2">
                {{ bonus.name }}
              </h6>

              <div class="title-link mt-3">
                <span
                  :title="bonus.title"
                  class="text-blue-700 font-semibold hover:underline cursor-pointer"
                  @click="track('Welcome bonus card title')"
                >
                  {{ bonus.title }}
                </span>
              </div>

              <div class="bonus-description my-4">
                <div v-html="bonus.body" />
              </div>

              <button
                type="button"
                class="bg-green hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl w-full"
                @click="track('Welcome bonus card cta')"
              >
                Claim Now
              </button>
            </div>
          </div>

          <template v-if="bookie.features.length">
            <h2 class="font-semibold text-2xl mb-3 max-sm:text-center">
              {{ bookie.name }} Features
            </h2>
            <div class="side-offers">
              <div class="bg-white rounded p-3 mb-5 shadow-lg">
                <ul class="check-type-list list-unstyled px-3">
                  <li
                    v-for="feature in bookie.features"
                    :key="feature.name"
                    class="font-semibold mb-2 flex items-center"
                  >
                    <mbb-icon
                      icon="mdiCheck"
                      class="text-green mr-3"
                    />

                    {{ feature.name }}
                  </li>
                </ul>
              </div>
            </div>
          </template>

          <h2 class="font-semibold text-2xl mb-2 max-sm:text-center">
            Free bets
          </h2>
          <div class="bg-white shadow-2xl">
            <mbb-bonus-card
              v-for="(offer, idx) in allOffers"
              :key="`offer-card-${idx}`"
              :bookie="offer"
              @on-click="track('Sidebar bonus card', offer)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
