<script setup lang="ts">
import type { PropType } from 'vue'
import type { IBookieApi } from '~/types'

const props = defineProps({
  bookie: {
    type: Object as PropType<IBookieApi>,
    required: true
  }
})

const { public: publicEnv } = useRuntimeConfig()

const bookieImage = computed(() => `${publicEnv.strapiUrl}${props.bookie.logo.url}`)
</script>

<template>
  <div class="rating-card">
    <div class="card-header-image text-center">
      <img
        :src="bookieImage"
        :alt="`${bookie.name} logo image`"
      >
    </div>
    <div class="card-body bg=[#f6f6f6]">
      <!----><!---->
      <div class="card-overview">
        <!----><!---->
        <h4 class="card-title font-semibold mb-1 text-2xl">
          {{ bookie.name }} Overall Rating

          <nuxt-rating
            read-only
            :rating-value="4.5"
          />
        </h4>
        <hr>
        <div class="container mt-3">
          <div class="row">
            <div class="col-sm-6">
              <label class="text-lg font-semibold capitalize">bonus offers</label>
              <div class="star-rating mb-3">
                <nuxt-rating
                  read-only
                  :rating-value="4.5"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <label class="text-lg font-semibold capitalize">customer services</label>
              <div class="star-rating mb-3">
                <nuxt-rating
                  read-only
                  :rating-value="4.5"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <label class="text-lg font-semibold capitalize">betting odds</label>
              <div class="star-rating mb-3">
                <nuxt-rating
                  read-only
                  :rating-value="4.5"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <label class="text-lg font-semibold capitalize">experience</label>
              <div class="star-rating mb-3">
                <nuxt-rating
                  read-only
                  :rating-value="4.5"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <label class="text-lg font-semibold capitalize">payment options</label>
              <div class="star-rating mb-3">
                <nuxt-rating
                  read-only
                  :rating-value="4.5"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <label class="text-lg font-semibold capitalize">live betting</label>
              <div class="star-rating mb-3">
                <nuxt-rating
                  read-only
                  :rating-value="4.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
