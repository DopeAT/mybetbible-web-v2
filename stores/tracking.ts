import type { ITrack } from '~/types'

export const useTrackingStore = defineStore('trackingStore', () => {
  const { $api } = useNuxtApp()

  const trackClick = async (payload: ITrack) => {
    return await $api.tracking.trackClick(payload)
  }

  return { trackClick }
})
