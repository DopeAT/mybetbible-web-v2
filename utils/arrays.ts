export const uniqBy = <T>(arr: Array<T>, iteratee: unknown) => {
  if (typeof iteratee === 'string') {
    const prop = iteratee

    iteratee = (item: Record<string, unknown>) => item[prop]
  }

  return arr.filter(
    (x, i, self) => i === self.findIndex(y => (iteratee as (x: T) => unknown)(x) === (iteratee as (x: T) => unknown)(y))
  )
}
