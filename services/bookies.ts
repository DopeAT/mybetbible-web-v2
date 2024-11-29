import { MbbFetchFactory } from '~/services/mbbFetchFactory'
import type { IBookieApi, IStrapiRes, OperationResult } from '~/types'

export class BookiesApi extends MbbFetchFactory {
  fetchBookie(bookie: string): Promise<OperationResult<IStrapiRes<IBookieApi>>> {
    return this.$mbb_get(`/bookies/${bookie}`)
  }
}
