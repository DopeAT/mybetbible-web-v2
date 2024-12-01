<script setup lang="ts">
import type { MdiIconString } from 'nuxt-mdi/dist/runtime/components/MdiIcon'
import { socials } from '~/constants'

const pages = [
  { title: 'Sport Bonus Offers', link: '/sports-bonus-offers' },
  { title: 'Betting Sites UK', link: '/betting-sites-uk' },
  { title: 'Casino Offers', link: '/casino-bonus-offers' },
  { title: 'Free Bets', link: '/free-bets' },
  { title: 'Poker Offers', link: '/poker-bonus-offers' },
  { title: 'Slots', link: '/casino-bonus-offers' }
]

const legal = [
  { title: 'Privacy', link: '/privacy' },
  { title: 'Terms of Use', link: '/terms-of-use' },
  { title: 'Cookies', link: '/cookies-policy' }
]

const network = [
  { title: `Facebook`, icon: 'mdiFacebook', link: `https://www.facebook.com/${socials.FACEBOOK}`, mdi: true },
  { title: 'Instagram', icon: 'mdiInstagram', link: `https://www.instagram.com/${socials.INSTAGRAM}`, mdi: true }
  // { title: 'Threads', icon: '/threads.svg', link: 'https://www.threads.net/', mdi: false },
  // { title: 'Tiktok', icon: '/icons8-tiktok-24.png', link: 'https://www.tiktok.com/', mdi: false },
  // { title: 'X', icon: '/icons8-twitterx-24.png', link: 'https://x.com/', mdi: false }
]
</script>

<template>
  <footer class="bg-green pt-12 pb-8">
    <div class="container mx-auto px-3 max-w-screen-xl">
      <div class="row">
        <div class="col-md-3 col-6">
          <ul class="text-white list-none">
            <li
              v-for="page in pages"
              :key="`footer-${page.link}`"
              class="p-sm-0 p-1"
            >
              <nuxt-link
                to="page.link"
                class="hover:underline"
              >
                {{ page.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <ul class="text-white list-none">
            <li class="p-sm-0 p-1">
              <nuxt-link
                v-for="page in legal"
                :key="`footer-${page.link}`"
                :to="page.link"
                class="hover:underline"
              >
                {{ page.link }}
              </nuxt-link>
            </li>
          </ul>

          <ul class="text-white list-none mt-5">
            <li class="p-sm-0 p-1">
              <nuxt-link
                to="/blog"
                class="hover:underline"
              >
                Betting Blog
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3 max-sm:mt-12">
          <div class="flex justify-around items-center">
            <nuxt-img
              width="40"
              height="40"
              format="webp"
              title="Over 18 age - logo"
              src="/footer_18.png"
              alt="Over 18 age - logo"
            />
            <nuxt-img
              width="129"
              height="29"
              format="webp"
              title="Interactive game council logo"
              src="/footer_igc.png"
              alt="Interactive game council logo"
            />
            <nuxt-img
              width="34"
              height="38"
              format="webp"
              title="GemCare"
              src="/footer_gamcare.png"
              alt="GemCare"
            />
          </div>

          <div class="mt-5">
            <nuxt-img
              format="webp"
              title="beGambleAware"
              src="/gambleaware.png"
              alt="beGambleAware"
              class="w-full"
            />
          </div>
        </div>
        <div class="col-md-3 text-center max-sm:my-8">
          <div class="text-white text-lg mb-5 max-sm:text-xl">
            Follow us
          </div>
          <div class="flex justify-center items-center">
            <a
              v-for="(social, index) in network"
              :key="`social-${social.title}`"
              :href="social.link"
              target="_blank"
              :title="social.title"
              class="follow-icon"
            >
              <mbb-icon
                v-if="social.mdi"
                :icon="social.icon as MdiIconString"
                class="text-white"
                :class="{ 'mr-3': index > network.length - 1 }"
              />

              <lazy-nuxt-img
                v-else
                :src="social.icon"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="w-full mt-5">
        <p class="text-center text-white">
          © {{ new Date().getFullYear() }} | Mybetbible All Right Reserved
        </p>
      </div>
    </div>
  </footer>
</template>
