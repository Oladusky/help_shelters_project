import { defineStore } from 'pinia'

export const useMainPageStore = defineStore('mainPage', {
    state: () => {
        return {
            content: {
                rus: {
                    mainBanner: {
                        banner: '',
                        header: 'Поможем',
                        text: ''
                    },
                    infoBanner: {
                        header: '',
                        text: '',
                    }
                },
                rom: {
                    mainBanner: {
                        banner: '',
                        header: 'Ajutam',
                        text: ''
                    },
                    infoBanner: {
                        header: '',
                        text: '',
                    }

                },

                en: {
                    mainBanner: {
                        banner: '',
                        header: 'Help',
                        text: ''
                    },
                    infoBanner: {
                        header: '',
                        text: '',
                    }

                },
            }
        }
    },
    actions: {},
})