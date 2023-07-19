import { defineStore } from 'pinia'

export const useSheltersStore = defineStore('shelters', {
    state: () => {
        return {
            content: {
                rus: {
                    buttons: {
                        more: 'подробнее',
                    },
                    shelters: [
                        {
                            id: 0,
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.',
                            textLarge: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                            amount: 'Amount of pets:',
                            location: 'location: Chisinau',
                        },
                        {
                            id: 1,
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.',
                            textLarge: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                            amount: 'Amount of pets:',
                            location: 'location: Chisinau',
                        },
                        {
                            id: 2,
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.',
                            textLarge: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                            amount: 'Amount of pets:',
                            location: 'location: Chisinau',
                        },
                        {
                            id: 3,
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.',
                            textLarge: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                            amount: 'Amount of pets:',
                            location: 'location: Chisinau',
                        },
                    ],
                },
                rom: {
                    buttons: {
                        more: 'подробнее',
                    },
                    shelters: [
                        {
                            id: 0,
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.',
                            textLarge: '<span>О приюте: </span>This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                            amount: 'Amount of pets:',
                            number: 333,
                            location: '<span>Местоположение: </span> Chisinau',
                            workers: '<span>Количество работников: </span> 3 Natasha Marsim....',
                            images: ['a','b','c']
                        },
                        {
                            id: 1,
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.',
                            textLarge: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                            amount: 'Amount of pets:',
                            location: 'location: Chisinau',
                        },
                        {
                            id: 2,
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.',
                            textLarge: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                            amount: 'Amount of pets:',
                            location: 'location: Chisinau',
                        },
                        {
                            id: 3,
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.',
                            textLarge: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                            amount: 'Amount of pets:',
                            location: 'location: Chisinau',
                        },
                    ],
                },
                en: {
                    buttons: {
                        more: 'подробнее',
                    },
                    shelters: [
                        {
                            id: 0,
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.',
                            textLarge: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                            amount: 'Amount of pets:',
                            location: 'location: Chisinau',
                        },
                        {
                            id: 1,
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.',
                            textLarge: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                            amount: 'Amount of pets:',
                            location: 'location: Chisinau',
                        },
                        {
                            id: 2,
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.',
                            textLarge: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                            amount: 'Amount of pets:',
                            location: 'location: Chisinau',
                        },
                        {
                            id: 3,
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.',
                            textLarge: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                            amount: 'Amount of pets:',
                            location: 'location: Chisinau',
                        },
                    ],
                }
            },
        }
    },
})