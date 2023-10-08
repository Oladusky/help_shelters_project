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
                            title: 'Приют AOVA',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.',
                            textLarge: '<span>О приюте: </span>This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                            amount: 'Amount of pets: ',
                            number: 333,
                            location: '<span>Местоположение: </span> Chisinau',
                            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34051.885190169116!2d28.84550931997744!3d47.0123540745651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d94c9a75c61%3A0xeae8ca6c6af66c7!2z0J_RgNC40Y7Rgg!5e0!3m2!1sru!2s!4v1689878722113!5m2!1sru!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                            workers: '<span>Количество работников: </span> 3 Natasha Marsim....',
                            contacts: '<span>Контакты: </span> Maria - +(373) 677 455 67',
                            socialHeader: '<span>Социальные сети: </span>',
                            social: [
                                { icon:'facebook.svg', name:'facebook', link:'/' },
                                { icon:'instagram.svg', name:'instagram', link:'/' },
                                { icon:'tiktok.svg', name:'website', link:'/' },
                                { icon:'website.svg', name:'tiktok', link:'' },
                            ],
                            bankDetails: '<span>Банковские реквизиты: </span>',
                            bankDetailsArr: [ {
                                id: 0,
                                header: 'Moldincombank',
                                content: 'BC "Moldindconbank" S.A.</br>' +
                                    'Pay Pal: <strong>VERA.BEKTORASH@MAIL.RU</strong></br>' +
                                    '<strong>Реквизиты для переводов в MDL:</strong></br>' +
                                    'Банк-получатель: BC "Moldindconbank" S.A., SWIFT: MOLDMD2X</br>' +
                                    'Имя получателя: Galina Cighir</br>' +
                                    'IDNP: 2005002106695</br>' +
                                    'Номер счета (IBAN): MD31ML000002259A34221281</br>' +
                                    'MOLDINDCONBANK nr. card. 4028110227987838</br>' }],
                            images: ['center_banner.jpg','left_banner.jpg','right_banner.jpg'],
                            needs: 'Что необходимо приюту:',
                            needsArr: ['сухой корм','капли от блох','миски'],

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
                            title: 'Приют AOVA',
                            img: 'center_banner.jpg',
                            text: 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.',
                            textLarge: '<span>О приюте: </span>This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.',
                            amount: 'Amount of pets: ',
                            number: 333,
                            location: '<span>Местоположение: </span> Chisinau',
                            workers: '<span>Количество работников: </span> 3 Natasha Marsim....',
                            contacts: '<span>Контакты: </span> Maria - +(373) 677 455 67',
                            socialHeader: '<span>Социальные сети: </span>',
                            social: [
                                { icon:'facebook.svg', name:'facebook', link:'' },
                                { icon:'instagram.svg', name:'instagram', link:'' },
                                { icon:'tiktok.svg', name:'tiktok', link:'' },
                                { icon:'website.svg', name:'website', link:'' },
                            ],
                            bankDetails: '<span>Реквизиты счета: </span>',
                            bankDetailsArr: [ { bank: 'BC "Moldindconbank" S.A.</br>' +
                                    'Pay Pal: <strong>VERA.BEKTORASH@MAIL.RU</strong></br>' +
                                    '<strong>Реквизиты для переводов в MDL:</strong></br>' +
                                    'Банк-получатель: BC "Moldindconbank" S.A., SWIFT: MOLDMD2X</br>' +
                                    'Имя получателя: Galina Cighir</br>' +
                                    'IDNP: 2005002106695</br>' +
                                    'Номер счета (IBAN): MD31ML000002259A34221281</br>' +
                                    'MOLDINDCONBANK nr. card. 4028110227987838</br>' }],
                            images: ['center_banner.jpg','left_banner.jpg','right_banner.jpg']
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