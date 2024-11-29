<script setup lang="ts">
import type { PropType } from 'vue'
import type { IBookieApi } from '~/types'

defineProps({
  headers: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => ['Betting site', 'Bonus', 'Claim bonus']
  },
  data: {
    type: Array as PropType<any>,
    required: true
  }
})

const route = useRoute()
const { trackClick } = useTrackingStore()
const { public: publicEnv } = useRuntimeConfig()

const imageLink = (logo?: { url: string }) => {
  if (!logo) return `logo.png`

  return `${publicEnv.strapiUrl}${logo.url}`
}

const track = async (bookie: IBookieApi) => {
  await trackClick({
    bookie_id: bookie.id,
    page: route.fullPath,
    client: 'mybetbible',
    element: 'offer-table'
  })

  if (window) {
    window.open(bookie.url, '_blank')!.focus()
  }
}
</script>

<template>
  <div class="bonus-table container">
    <div class="bonus-header hidden sm:flex">
      <div
        v-for="header in headers"
        :key="header"
        class="font-semibold"
      >
        {{ header }}
      </div>
    </div>

    <div
      v-for="(bookie, idx) in data"
      :key="`bookie-offer-${idx}`"
      class="bookies-bonus sm:flex flex-row flex-wrap max-sm:text-center"
    >
      <div class="text-center">
        <img
          :src="imageLink(bookie.logo)"
          class="sm:w-full sm:h-auto mx-auto"
          :alt="`${bookie.name} logo image`"
        >
        <div class="max-sm:hidden">
          <nuxt-link
            :to="`/review/${bookie.slug}`"
            class="text-xs underline"
          >
            See review
          </nuxt-link>
        </div>
      </div>

      <div>
        <div class="font-semibold max-sm:my-5 text-green text-xl">
          {{ bookie.bonuses[0].title }}
        </div>
      </div>

      <div>
        <div class="max-sm:mb-5">
          <button
            type="button"
            class="bg-green hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl w-full"
            @click="track(bookie)"
          >
            Claim Bonus
          </button>
        </div>

        <div class="text-center">
          <nuxt-link
            :to="`/review/${bookie.slug}`"
            class="text-sm underline"
          >
            See details
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
