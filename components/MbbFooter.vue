<script setup lang="ts">

</script>

<template>
  <footer class="bg-green pt-12 pb-8">
    <div class="container mx-auto px-3 max-w-screen-xl">
      <div class="row">
        <div class="col-md-3 col-6">
          <ul class="text-white list-none">
            <li class="p-sm-0 p-1">
              <nuxt-link
                to="/sports-bonus-offers"
                class="hover:underline"
              >
                Sport Bonus Offers
              </nuxt-link>
            </li>
            <li class="p-sm-0 p-1">
              <nuxt-link
                to="/betting-sites-uk"
                class="hover:underline"
              >
                Betting Sites UK
              </nuxt-link>
            </li>
            <li class="p-sm-0 p-1">
              <nuxt-link
                to="/casino-bonus-offers"
                class="hover:underline"
              >
                Casino Offers
              </nuxt-link>
            </li>
            <li class="p-sm-0 p-1">
              <nuxt-link
                to="/free-bets"
                class="hover:underline"
              >
                Free Bets
              </nuxt-link>
            </li>
            <li class="p-sm-0 p-1">
              <nuxt-link
                to="/poker-bonus-offers"
                class="hover:underline"
              >
                Poker Offers
              </nuxt-link>
            </li>
            <li class="p-sm-0 p-1">
              <nuxt-link
                to="/casino-bonus-offers"
                class="hover:underline"
              >
                Slots
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <ul class="text-white list-none">
            <li class="p-sm-0 p-1">
              <nuxt-link
                to="/privacy"
                class="hover:underline"
              >
                Privacy
              </nuxt-link>
            </li>
            <li class="p-sm-0 p-1">
              <nuxt-link
                to="/terms-of-use"
                class="hover:underline"
              >
                Terms of Use
              </nuxt-link>
            </li>
            <li class="p-sm-0 p-1">
              <nuxt-link
                to="/cookies-policy"
                class="hover:underline"
              >
                Cookies
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
              href="https://www.facebook.com/Mybetbible-178342054278713"
              target="_blank"
              title="Facebook"
              class="follow-icon"
            >
              <mbb-icon
                icon="mdiFacebook"
                class="mr-3 text-white"
              />
            </a>
            <a
              href="https://www.facebook.com/Mybetbible-178342054278713"
              target="_blank"
              title="Facebook"
              class="follow-icon"
            >
              <mbb-icon
                icon="mdiTwitter"
                class="mr-3 text-white"
              />
            </a>
            <a
              href="https://www.facebook.com/Mybetbible-178342054278713"
              target="_blank"
              title="Facebook"
              class="follow-icon"
            >
              <mbb-icon
                icon="mdiInstagram"
                class="text-white"
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
