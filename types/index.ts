interface ISuccessOperationResult<T> {
  success: true
  value: T
  error?: {
    status: number
    message: string
  }
}

interface IErrorOperationResult<T> {
  success: false
  value?: T
  error: {
    status: number
    message: string
  } | string
}

export type OperationResult<T> = ISuccessOperationResult<T> | IErrorOperationResult<T>

export interface INav {
  title: string
  href: string
}

export interface IStrapiRes<T> {
  data: T
  meta: Record<string, any>
  error?: {
    status: number
    name: string
    message: string
  }
}

export interface IEntityApi {
  createdAt: string | Date
  id: number
  publishedAt: string | Date
  updatedAt: string | Date
}

export interface IFaq {
  id: number
  question: string
  answer: string
}

export * from './seo'
export * from './bonus'
export * from './offers'
export * from './bookies'
export * from './tracking'
export * from './features'
export * from './articles'
export * from './catogories'
