import type { ICategoryWithBookiesApi, IStrapiRes, ECategories, OperationResult } from '~/types'
import { MbbFetchFactory } from '~/services/mbbFetchFactory'

export class CategoriesApi extends MbbFetchFactory {
  fetchByCategory(category: ECategories): Promise<OperationResult<IStrapiRes<ICategoryWithBookiesApi>>> {
    return this.$mbb_get(`/categories/${category}`)
  }
}
