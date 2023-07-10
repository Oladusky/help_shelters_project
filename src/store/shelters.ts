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
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.',
                            textLarge: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                            amount: 'Amount of pets:',
                            location: 'location: Chisinau',
                        },
                        {
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                        },
                        {
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                        },
                        {
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                        },
                    ],
                },
                rom: {
                    buttons: {
                        more: 'подробнее',
                    },
                    shelters: [
                        {
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                        },
                        {
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                        },
                        {
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                        },
                        {
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                        },
                    ],
                },
                en: {
                    buttons: {
                        more: 'подробнее',
                    },
                    shelters: [
                        {
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                        },
                        {
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                        },
                        {
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                        },
                        {
                            title: 'Лайка',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                        },
                    ],
                }
            },
        }
    },
})