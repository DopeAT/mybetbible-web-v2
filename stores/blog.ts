import type { IArticleApi } from '~/types'

interface State {
  article: IArticleApi | null
  articles: IArticleApi[]
  homeGuides: Omit<IArticleApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>[]
  homeArticles: Omit<IArticleApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>[]
  bonusArticles: Omit<IArticleApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>[]
  guideArticles: Omit<IArticleApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>[]
}

export const useBlogStore = defineStore('blogStore', () => {
  const { $api } = useNuxtApp()

  const state = reactive<State>({
    article: null,
    articles: [],
    homeGuides: [],
    homeArticles: [],
    bonusArticles: [],
    guideArticles: []
  })

  async function fetchArticles() {
    const res = await $api.blog.fetchArticles()

    if (res.error) return

    state.articles = res.value!.data
  }

  async function findArticle(slug: string) {
    const res = await $api.blog.findArticle(slug)

    if (res.error) return

    state.article = res.value!.data
  }

  async function fetchHomeGuides() {
    const res = await $api.blog.fetchHomeGuides()

    if (res.error) return

    state.homeArticles = res.value!.data
  }

  async function fetchHomeBonusGuides() {
    const res = await $api.blog.fetchHomeBonusGuides()

    if (res.error) return

    state.homeGuides = res.value!.data
  }

  return {
    ...toRefs(state),
    findArticle,
    fetchArticles,
    fetchHomeGuides,
    fetchHomeBonusGuides
  }
})
