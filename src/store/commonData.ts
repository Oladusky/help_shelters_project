import { defineStore } from 'pinia'

export const useCommonDataStore = defineStore('common', {
    state: () => {
        return {
            content: {
                rus: {
                    sectors: [
                        {
                            id: 'botanica',
                            name: 'Ботаника'
                        },
                        {
                            id: 'center',
                            name: 'Центр'
                        },
                        {
                            id: 'chekani',
                            name: 'Чеканы'
                        },
                        {
                            id: 'buiucani',
                            name: 'Буюканы'
                        },
                        {
                            id: 'riscani',
                            name: 'Рышкановка'
                        }
                    ]
                },
                rom: {
                },
                en: {
                }
            },
        }
    },
})