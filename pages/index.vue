<script setup lang="ts">
const { $api } = useNuxtApp()

const blogStore = useBlogStore()
const offersStore = useOffersStore()

const sportsOffers = computed(() => offersStore.getSportOffers)
const casinoOffers = computed(() => offersStore.getCasinoOffers)
const pokerOffers = computed(() => offersStore.getPokerOffers)
const guideArticles = computed(() => blogStore.homeGuides)
const bonusArticles = computed(() => blogStore.homeArticles)

useAsyncData(async () => await offersStore.fetchSport())
useAsyncData(async () => await offersStore.fetchCasino())
useAsyncData(async () => await offersStore.fetchPoker())
useAsyncData(async () => await blogStore.fetchHomeGuides())
useAsyncData(async () => await blogStore.fetchHomeBonusGuides())

const { data: faqs } = useAsyncData(async () => {
  const res = await $api.faqs.fetchFaqs()

  if (!res.value) return []

  return res.value.data.map(f => ({ ...f, title: f.question, body: f.answer }))
})

useHead({
  title: 'Your Ultimate Guide to Online Betting & Casino Reviews | myBetBible',
  titleTemplate: 'Your Ultimate Guide to Online Betting & Casino Reviews | myBetBible',
  meta: [
    { name: 'description', content: 'Discover the best online betting sites, casino reviews, and exclusive bonuses at myBetBible. Compare top platforms, explore detailed guides, and claim unbeatable offers to elevate your gaming experience!' }
  ]
})
</script>

<template>
  <div>
    <div class="home-offer-cards">
      <h1 class="font-semibold text-2xl mb-3">
        Best betting sites & Bet Bonus Offers 2024
      </h1>
      <p class="mb-3">
        Welcome to MyBetBible.co.uk, your one-stop destination for the latest sports betting tips,
        bookmaker reviews, betting guides, and exclusive bonuses. Whether you're a seasoned punter
        or a newcomer, our expert insights and comprehensive resources are designed to help you
        maximize your betting potential.
      </p>

      <p class="mb-3">
        It has never been easier to find the best sport bonus offers available .We searched and
        found for you the best bonus offers.
      </p>
      <p class="mb-3">
        You can save time by browsing from site to site, and giving a list with the best available
        bonus offers in the market.
      </p>
      <p class="mb-3">
        It's really simple. Just click <b>Claim Bonus</b> and <b>create an account</b> to access
        <b>free bets and welcome bonus offers</b>.
      </p>
      <p class="mb-3">
        <strong>Find the best Bonus Offers that suits you now!</strong>
      </p>

      <mbb-bonus-table :data="sportsOffers" />

      <div class="mt-3 font-semibold w-full text-right">
        <nuxt-link
          to="/sports-bonus-offers"
          class="text-blue-500 underline"
        >
          Show more sport bonus offer
        </nuxt-link>
      </div>
    </div>

    <hr class="my-5 divide-y-5">

    <div class="home-offer-cards">
      <h2 class="font-semibold text-2xl mb-3">
        Best Casino Bonus Offers 2024
      </h2>
      <p class="mb-3">
        Casino bonus offers and free slots are an easy way for players to get an extra edge. There
        are all sorts of bonuses out there, some good, some not so good.
      </p>
      <p class="mb-3">
        <b>The best bonus is the one that the player is going to use and enjoy.</b>
      </p>
      <p class="mb-3">
        That's why we created a list of bonuses from reputable casinos, so you know you're getting a
        great deal.
      </p>
      <p class="mb-3">
        <strong>You can choose from our list and claim your casino bonus.</strong>
      </p>

      <mbb-bonus-table
        :headers="['Casino', 'Bonus', 'Claim bonus']"
        :data="casinoOffers"
      />

      <div class="mt-3 font-semibold w-full text-right">
        <nuxt-link
          to="/casino-bonus-offers"
          class="text-blue-500 underline"
        >
          Show more casino bonus offers
        </nuxt-link>
      </div>
    </div>

    <hr class="my-5 divide-y-5">

    <div class="home-offer-cards">
      <h2 class="font-semibold text-2xl mb-3">
        Our top Poker Bonus Offers 2024
      </h2>
      <p class="mb-3">
        Below you will find the best Poker tables available online. You can claim you free bonus
        offer by simply click on Claim Bonus button and enter the online Poker world.
      </p>

      <MbbBonusTable
        :headers="['Poker site', 'Bonus', 'Claim bonus']"
        :data="pokerOffers"
      />

      <div class="mt-3 font-semibold w-full text-right">
        <nuxt-link
          to="/poker-bonus-offers"
          class="text-blue-500 underline"
        >
          Show more poker bonus offers
        </nuxt-link>
      </div>
    </div>

    <hr class="my-5 divide-y-5">

    <div class="articles-section">
      <h3 class="text-3xl font-medium my-5">
        Sports Betting Guides for Beginners and Experts
      </h3>

      <p class="mb-5">
        Whether you're just starting or you're a betting veteran, our sports betting guides cover
        everything you need to know to succeed. Learn about different types of bets, odds
        calculation, bankroll management, and advanced betting strategies. Here are some key guides
        you can click and explore:
      </p>

      <div class="row my-3">
        <div
          v-for="(level, index) in guideArticles"
          :key="`guide-${index}`"
          class="col-md-3"
        >
          <nuxt-link :to="`/blog/${level.slug}`">
            <mbb-item-card
              :title="level.title"
              :text="level.description"
            />
          </nuxt-link>
        </div>

        <div class="col-12">
          <div class="text-center my-5">
            <nuxt-link
              to="/blog/"
              class="cursor-pointer text-blue-500 underline font-semibold"
            >
              View all
            </nuxt-link>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-medium my-5">
        Understanding Betting Bonuses
      </h3>

      <p class="mb-5">
        Betting bonuses are promotional offers provided by bookmakers to attract new customers and
        retain existing ones. These bonuses can significantly boost your betting bankroll. Here's
        what you need to know about betting bonuses:
      </p>

      <div class="row my-3">
        <div
          v-for="(guide, index) in bonusArticles"
          :key="`guide-${index}`"
          class="col-sm-4"
        >
          <nuxt-link :to="`/blog/${guide.slug}`">
            <mbb-item-card
              :title="guide.title"
              :text="guide.description"
            />
          </nuxt-link>
        </div>

        <div class="col-sm-4">
          <nuxt-link to="/blog/">
            <mbb-item-card
              title="Terms and Conditions of Betting Bonuses"
              text="Always read the terms and conditions to understand the requirements for each bonus. Our guides help you navigate the fine print and avoid common pitfalls."
            />
          </nuxt-link>
        </div>
      </div>

      <h3 class="text-2xl font-medium my-5">
        Exclusive Betting Bonuses and Promotions
      </h3>

      <p class="mb-5">
        At MyBetBible.co.uk, we partner with top UK bookmakers to bring you exclusive betting
        bonuses and promotions. Check out our latest offers to find the best deals and take
        advantage of special promotions:
      </p>

      <ul class="list-inside list-disc">
        <li class="mb-3">
          <nuxt-link
            to="/sports-bonus-offers"
            class="text-green underline"
          >
            Football Welcome Bonuses for New Players:
          </nuxt-link>
          Get extra funds to start your betting journey with our exclusive welcome bonuses.
        </li>

        <li class="mb-3">
          <nuxt-link
            to="/free-bets"
            class="text-green underline"
          >
            Bonuses and Free Bets:
          </nuxt-link>
          Find out which bookmakers offer additional funds when you make a deposit or place specific
          bets.
        </li>

        <li class="mb-3">
          <nuxt-link
            to="/casino-bonus-offers"
            class="text-green underline"
          >Casino Bonuses and Special Promotions:</nuxt-link>
          Stay updated with our latest casino bonuses, cashback offers, and special promotions for
          existing players.
        </li>

        <li class="mb-3">
          <nuxt-link
            to="/poker-bonus-offers"
            class="text-green underline"
          >
            Poker Bonuses and Promotions:
          </nuxt-link>
          Stay updated with our latest poker bonuses, tournament tables, and special promotions for
          existing and new players.
        </li>
      </ul>
    </div>

    <hr class="my-5 divide-y-5">

    <div class="faqs-section my-12">
      <client-only>
        <mbb-accordion
          v-for="faq in faqs"
          :key="faq.question"
          accordion-class="max-w-2xl"
          :item="faq"
        />
      </client-only>
    </div>

    <!--    <div class="flex align-middle justify-center mb-5"> -->
    <!--      <div class="md:max-w-2xl"> -->
    <!--        <p> -->
    <!--          Subscribe to our newsletter for regular updates on the latest sports betting news, -->
    <!--          exclusive bonuses, and expert betting tips. Don't miss out on special offers and important -->
    <!--          betting insights. -->
    <!--        </p> -->

    <!--        <p class="my-5"> -->
    <!--          <b>Sign up today to stay ahead in the betting world!</b> -->
    <!--        </p> -->

    <!--        <form> -->
    <!--          <label -->
    <!--            for="default-search" -->
    <!--            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300" -->
    <!--          > -->
    <!--            Enter your email address -->
    <!--          </label> -->
    <!--          <div class="relative"> -->
    <!--            <input -->
    <!--              type="email" -->
    <!--              class="block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue focus:border-blue" -->
    <!--              placeholder="Enter your email address" -->
    <!--              required -->
    <!--            > -->

    <!--            <button -->
    <!--              type="submit" -->
    <!--              class="text-white absolute right-2.5 bottom-2.5 bg-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2" -->
    <!--              @click.prevent="addToNewsletter" -->
    <!--            > -->
    <!--              Submit -->
    <!--            </button> -->
    <!--          </div> -->
    <!--        </form> -->
    <!--      </div> -->
    <!--    </div> -->
  </div>
</template>
