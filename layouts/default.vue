<script setup lang="ts">
import { nav } from '~/constants'

useHead({
  htmlAttrs: {
    lang: 'en-gb',
    dir: 'ltr'
  },
  meta: [],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
    { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
    { rel: 'canonical', href: 'https://mybetbible.com/' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ]
})

const { showMobileNav, toggleNav } = useNav()
</script>

<template>
  <div :class="{ 'overflow-hidden': !!showMobileNav }">
    <div class="relative">
      <mbb-header />

      <div
        id="app-container"
        class="container mx-auto pt-28 px-3 max-w-screen-xl"
      >
        <slot />
      </div>

      <div
        v-if="showMobileNav"
        class="lg:hidden mobile-nav absolute top-0 bottom-0"
      >
        <div class="w-full lg:w-auto lg:pr-4 lg:pt-0">
          <ul class="flex flex-col gap-6 lg:flex-row lg:gap-0 lg:text-md items-center">
            <li
              v-for="(item, idx) in nav"
              :key="idx"
              @click="toggleNav"
            >
              <nuxt-link
                :to="item.href"
                class="block px-12"
              >
                <span>{{ item.title }}</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <mbb-footer />
    </div>
  </div>
</template>
