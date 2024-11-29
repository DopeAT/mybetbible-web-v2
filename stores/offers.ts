import { ECategories, type IBookieApi } from '~/types'

interface State {
  sport: Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>[]
  casino: Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>[]
  poker: Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>[]
}

export const useOffersStore = defineStore('offersStore', () => {
  const { $api } = useNuxtApp()

  const state = reactive<State>({
    sport: [],
    casino: [],
    poker: []
  })

  const getSportOffers = computed(() => state.sport)
  const getCasinoOffers = computed(() => state.casino)
  const getPokerOffers = computed(() => state.poker)
  const getAllOffers = computed(() => [...state.sport, ...state.casino, ...state.poker])

  function getAllOffersByCount(n: number = 5) {
    const shuffleOffers = uniqBy([...state.sport, ...state.casino, ...state.poker], 'name').sort(() => 0.5 - Math.random())

    return shuffleOffers.slice(0, n)
  }

  function getAllOffersByCategory(category: keyof State = 'sport', n: number = 5) {
    const shuffleOffers = uniqBy(state[category], 'name').sort(() => 0.5 - Math.random())

    return shuffleOffers.slice(0, n)
  }

  async function fetchSport() {
    const res = await $api.categories.fetchByCategory(ECategories.SPORTS)

    if (res.error) return

    state.sport = res.value!.data.bookies.filter(b => b.bonuses.length > 0)
  }

  async function fetchCasino() {
    const res = await $api.categories.fetchByCategory(ECategories.CASINO)

    if (res.error) return

    state.casino = res.value!.data.bookies.filter(b => b.bonuses.length > 0)
  }

  async function fetchPoker() {
    const res = await $api.categories.fetchByCategory(ECategories.POKER)

    if (res.error) return

    state.poker = res.value!.data.bookies.filter(b => b.bonuses.length > 0)
  }

  async function fetchAllCategories() {
    await fetchSport()
    await fetchCasino()
    await fetchPoker()
  }

  return {
    ...toRefs(state),
    fetchPoker,
    fetchSport,
    fetchCasino,
    getAllOffers,
    getSportOffers,
    getPokerOffers,
    getCasinoOffers,
    fetchAllCategories,
    getAllOffersByCount,
    getAllOffersByCategory
  }
})
