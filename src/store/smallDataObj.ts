import { defineStore } from 'pinia'

export const useSmallDataObjStore = defineStore('smallDataObj', {
    state: () => {
        return {
            content: {
                rus: {
                    home: 'Главная',
                    info: 'Как помочь',
                    shelters: 'Приюты',
                    vets: 'Ветклиники'
                },
                en: {
                    home: 'Home',
                    info: 'How to help',
                    shelters: 'Shelters',
                    vets: 'Vet\'s'
                },
                rom: {},
            }
        }
    },
    actions: {},
})