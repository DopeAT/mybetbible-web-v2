import type { IBookieApi } from '~/types'

export const useBookiesStore = defineStore('bookiesStore', () => {
  const { $api } = useNuxtApp()

  const bookie = ref<IBookieApi | null>(null)

  const currentBookie = computed(() => bookie.value)

  const fetchBookie = async (slug: string) => {
    const res = await $api.bookies.fetchBookie(slug)

    if (res.error) return

    bookie.value = res.value!.data
  }

  return {
    bookie,
    fetchBookie,
    currentBookie
  }
})
