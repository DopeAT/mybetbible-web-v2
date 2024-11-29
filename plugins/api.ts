import { type FetchOptions, $fetch } from 'ofetch'
import { FaqsApi, BlogApi, CategoriesApi, TrackingApi, BookiesApi } from '~/services'

interface Api {
  faqs: FaqsApi
  blog: BlogApi
  bookies: BookiesApi
  tracking: TrackingApi
  categories: CategoriesApi
}

declare module '#app' {
  interface NuxtApp {
    $api: Api
  }
}

export default defineNuxtPlugin(({ $config }) => {
  const fetchOptions: FetchOptions = {
    baseURL: $config.public.strapiUrl + '/api'
  }

  const apiFetcher = $fetch.create(fetchOptions)

  const api: Api = {
    faqs: new FaqsApi(apiFetcher),
    blog: new BlogApi(apiFetcher),
    bookies: new BookiesApi(apiFetcher),
    tracking: new TrackingApi(apiFetcher),
    categories: new CategoriesApi(apiFetcher)
  }

  return {
    provide: {
      api: api
    }
  }
})
