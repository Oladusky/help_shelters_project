import { defineStore } from 'pinia'

export const useSmallDataObjStore = defineStore('smallDataObj', {
    state: () => {
        return {
            content: {
                rus: {
                    home: 'Главная',
                    info: 'Как помочь',
                    shelters: 'Приюты',
                },
                en: {
                    home: 'Home',
                    info: 'How to help',
                    shelters: 'Shelters',
                },
                rom: {
                    home: 'H',
                    info: 'How to help',
                    shelters: 'Shelters',
                },
            }
        }
    },
    actions: {},
})