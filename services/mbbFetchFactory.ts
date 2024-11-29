import type { IFetchError, $Fetch, FetchOptions } from 'ofetch'
import type { OperationResult } from '~/types'
import { createOperationResult } from '~/utils'
import { MbbErrorHandler } from '~/classes'

export class MbbFetchFactory {
  protected $fetch: $Fetch

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher
  }

  private callApi<T>(url: string, options?: FetchOptions): Promise<OperationResult<T>> {
    const { public: publicEnv } = useRuntimeConfig()

    return this.$fetch(url, { ...options, baseURL: options?.baseURL ?? publicEnv.strapiUrl + '/api' })
      .then((res: T) => createOperationResult({ success: true, value: res }))
      .catch((e: IFetchError) => {
        if ('error' in e) {
          return createOperationResult({
            success: false,
            error: MbbErrorHandler.fromFetchError(e).message
          })
        }

        return createOperationResult({
          success: false,
          error: new MbbErrorHandler(new Error('Unknown error has occurred')).message
        })
      })
  }

  public $mbb_get<T>(url: string, options?: FetchOptions): Promise<OperationResult<T>> {
    return this.callApi<T>(url, { method: 'GET', ...options })
  }

  public $mbb_post<T>(url: string, data: RequestInit['body'] | Record<string, any>, options?: FetchOptions): Promise<OperationResult<T>> {
    return this.callApi<T>(url, { method: 'GET', body: data, ...options })
  }
}
