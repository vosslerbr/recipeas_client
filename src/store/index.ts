import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    loading: false,
    error: false,
    recipeas: [] as any[],
  }),
  getters: {},
  actions: {},
});
