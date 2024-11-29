<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  item: {
    type: Object as PropType<{ title: string, body: string }>,
    required: true
  },
  accordionClass: {
    type: String,
    required: false,
    default: ''
  }
})

const expanded = ref(false)
</script>

<template>
  <div class="relative">
    <div
      class="w-full mx-auto px-4 md:px-6 bg-white rounded-lg mb-3"
      :class="accordionClass"
    >
      <!-- Accordion component -->
      <div class="divide-y divide-slate-200">
        <!-- Accordion item -->
        <div class="py-2">
          <h6 class="text-sm">
            <button
              id="faqs-title-01"
              type="button"
              class="flex items-center justify-between w-full text-left font-semibold py-2"
              :aria-expanded="expanded"
              aria-controls="faqs-text-01"
              @click="expanded = !expanded"
            >
              <span>{{ item.title }}</span>
              <svg
                class="fill-green shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  class="transform origin-center transition duration-200 ease-out"
                  :class="{ '!rotate-180': expanded }"
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  class="transform origin-center rotate-90 transition duration-200 ease-out"
                  :class="{ '!rotate-180': expanded }"
                />
              </svg>
            </button>
          </h6>
          <div
            id="faqs-text-01"
            role="region"
            aria-labelledby="faqs-title-01"
            class="grid text-sm text-slate-900 overflow-hidden transition-all duration-300 ease-in-out"
            :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <p
                class="py-3"
                v-html="item.body"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- End: Accordion component -->
    </div>
  </div>
</template>

<style scoped>

</style>
