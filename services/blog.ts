import { MbbFetchFactory } from '~/services/mbbFetchFactory'
import type { IArticleApi, IArticleCategoryApi, IArticleLevelApi, IStrapiRes, OperationResult } from '~/types'

export class BlogApi extends MbbFetchFactory {
  fetchArticles(): Promise<OperationResult<IStrapiRes<IArticleApi[]>>> {
    return this.$mbb_get('/articles')
  }

  fetchCategories(): Promise<OperationResult<IStrapiRes<IArticleCategoryApi[]>>> {
    return this.$mbb_get(`/article-categories`)
  }

  fetchLevels(): Promise<OperationResult<IStrapiRes<IArticleLevelApi[]>>> {
    return this.$mbb_get(`/article-levels`)
  }

  findArticle(slug: string): Promise<OperationResult<IStrapiRes<IArticleApi>>> {
    return this.$mbb_get(`/articles/${slug}`)
  }

  findArticlesByCategory(slug: string): Promise<OperationResult<IStrapiRes<IArticleCategoryApi>>> {
    return this.$mbb_get(`/article-categories/${slug}`)
  }

  findArticlesByLevel(slug: string): Promise<OperationResult<IStrapiRes<IArticleLevelApi>>> {
    return this.$mbb_get(`/article-levels/${slug}`)
  }

  fetchHomeGuides(): Promise<OperationResult<IStrapiRes<IArticleApi[]>>> {
    return this.$mbb_get(`/guides-preview`)
  }

  fetchHomeBonusGuides(): Promise<OperationResult<IStrapiRes<IArticleApi[]>>> {
    return this.$mbb_get(`/bonus-guides-preview`)
  }
}
