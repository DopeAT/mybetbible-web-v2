<script setup lang="ts">
const breadcrumbs = [
  {
    title: 'Home',
    disabled: false,
    href: '/'
  },
  {
    title: 'Contact us',
    disabled: true,
    href: `#`
  }
]

const contactFaqs = [
  {
    title: 'How long does it take to get a response?',
    body: 'Our team typically responds to inquiries within 24-48 hours during business days.'
  },
  {
    title: 'Can I submit suggestions for the site?',
    body: 'Absolutely! We value your input. Feel free to share your thoughts via email or the contact form.'
  },
  {
    title: 'Do you offer customer support for betting sites?',
    body: 'While we provide resources and reviews for betting platforms, we recommend contacting the respective betting site directly for account-related issues.'
  }
]
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
          Get in Touch
        </h1>

        <p class="mb-5">
          At myBetBible, we’re dedicated to providing you with the best resources and information for all your betting and casino needs. Your feedback and inquiries are important to us, and we strive to respond as quickly and thoroughly as possible.
        </p>

        <p class="mb-5">
          Whether you’re looking for advice on the latest sports promotions, casino bonus offers, or have suggestions to improve our site, feel free to reach out using the options below.
        </p>

        <hr>
      </div>

      <div class="col-sm-6">
        <h2 class="mb-5 text-lg font-semibold">
          How to reach us
        </h2>

        <p class="mb-5">
          Fill out the form below with your query, and our team will get back to you within 24-48 hours. Please provide detailed information so we can assist you effectively.
        </p>

        <form class="bg-white shadow-md rounded p-8 mb-4 w-full">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              id="name"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
            >
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              id="name"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email"
            >
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="message"
            >
              Message
            </label>

            <textarea
              id="message"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your message"
              rows="5"
            />
          </div>
          <div>
            <button
              class="bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div class="col-sm-6">
        <h3 class="mb-5 text-lg font-semibold">
          Email Support
        </h3>

        <p>
          Prefer email? Reach us directly at <b class="underline text-green">support@mybetbible.com</b>. For general inquiries, suggestions, or partnership opportunities, this is the best way to get in touch.
        </p>

        <div class="mt-5">
          <h3 class="mb-5 text-lg font-semibold">
            Social Media
          </h3>

          <p class="mb-5">
            Stay connected and reach out to us on our social media channels:
          </p>

          <div class="flex justify-start items-center">
            <a
              href="https://www.facebook.com/Mybetbible-178342054278713"
              target="_blank"
              title="Facebook"
              class="follow-icon"
            >
              <mbb-icon
                icon="mdiFacebook"
                class="mr-3"
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
                class="mr-3"
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
                class=""
              />
            </a>
          </div>
        </div>
      </div>

      <div class="col-12 my-8">
        <hr class="mb-5">

        <h2 class="mb-5 text-lg font-semibold">
          Frequently Asked Questions
        </h2>

        <div class="w-full m-auto">
          <mbb-accordion
            v-for="(faq, idx) in contactFaqs"
            :key="`faq-${idx}`"
            :item="faq"
          />
        </div>
      </div>

      <div class="col-12 my-8">
        <hr class="mb-5">

        <h2 class="mb-5 text-lg font-semibold">
          Partner with Us
        </h2>

        <p>
          Are you interested in partnering with myBetBible? We’re always open to exploring collaborations with betting operators, casinos, or affiliate programs. Reach out to us at
          <a
            class="font-semibold text-green underline"
            href="mailto:partners@mybetbible.com"
            target="_blank"
          >partners@mybetbible.com</a>
          to discuss opportunities.
        </p>
      </div>
    </div>
  </div>
</template>
