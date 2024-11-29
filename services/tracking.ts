import { MbbFetchFactory } from '~/services/mbbFetchFactory'
import type { IStrapiRes, ITrack, OperationResult } from '~/types'

export class TrackingApi extends MbbFetchFactory {
  trackClick(data: ITrack): Promise<OperationResult<IStrapiRes<ITrack>>> {
    return this.$fetch(`/tracks`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: { data }
    })
  }
}
