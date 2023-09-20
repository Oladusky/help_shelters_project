import { defineStore } from 'pinia'

export const useInfoStore = defineStore('info', {
    state: () => {
        return {
            content: {
                rus: {},
                rom: {
                },
                en: {
                }
            },
        }
    },
})