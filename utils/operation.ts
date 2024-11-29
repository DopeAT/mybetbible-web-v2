import type { OperationResult } from '~/types'

export function createOperationResult<T>({
  success,
  value,
  error
}: OperationResult<T>): OperationResult<T> {
  if (success) {
    return {
      success: true as const,
      value: value as T,
      error
    }
  }

  return {
    success: false as const,
    value,
    error: error ?? new Error('No error thrown')
  }
}
