import type { IEntityApi } from '~/types'

export interface IBonusApi extends IEntityApi {
  body: string
  isWelcome: boolean
  name: string
  title: string
}
