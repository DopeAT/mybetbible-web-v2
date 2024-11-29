import { MbbFetchFactory } from '~/services/mbbFetchFactory'
import type { IStrapiRes, IFaq, OperationResult } from '~/types'

export class FaqsApi extends MbbFetchFactory {
  fetchFaqs(): Promise<OperationResult<IStrapiRes<IFaq[]>>> {
    return this.$mbb_get(`/faqs?fields[0]=id&fields[1]=question&fields[2]=answer`)
  }
}
