import { defineStore } from 'pinia'

export const useSmallDataObjStore = defineStore('smallDataObj', {
    state: () => {
        return {
            content: {
                rus: {
                    home: 'Главная',
                    news: 'Как помочь',
                    shelters: 'Приюты',
                },
                en: {
                    home: 'Home',
                    news: 'News',
                    shelters: 'Shelters',
                },
                rom: {
                    home: 'H',
                    news: 'N',
                    shelters: 'Shelters',
                },
            }
        }
    },
    actions: {},
})