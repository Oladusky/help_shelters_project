import { defineStore } from 'pinia'

export const useVetClinicsStore = defineStore('vets', {
    state: () => {
        return {
            content: {
                rus: {
                    vets: [
                        {
                            id: 12,
                            title: 'Vet',
                            address: '<span>Адрес:</span> Кишинев, ...',
                            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34051.885190169116!2d28.84550931997744!3d47.0123540745651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d94c9a75c61%3A0xeae8ca6c6af66c7!2z0J_RgNC40Y7Rgg!5e0!3m2!1sru!2s!4v1689878722113!5m2!1sru!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                            worktime: '<span>Часы работы:</span><br> Пн - Сб: 9 - 19 <br> Вс: выходной',
                            phone: '<span>Телефон:</span> <a href="tel:+37367741522">+373 677-415-22</a>',
                            sector: { id: 'botanica', name: 'Ботаника' },
                            infoTitle: 'О клинике',
                            infoContent: 'Клиника Vet работает с 2019 года, предоставляет широкий спектр услуг...',
                            social: '<span>Социальные сети:</span>',
                            socialLinks: [
                                { icon: 'facebook.svg', name: 'facebook', link: '/' },
                                { icon: 'instagram.svg', name: 'instagram', link: '/' },
                                { icon: 'tiktok.svg', name: 'website', link: '/' },
                                { icon: 'website.svg', name: 'tiktok', link: '' },
                            ],
                            photos: ['alice/left_banner.jpg', 'alice/right_banner.jpg', 'alice/center_banner.jpg'],
                            servicesTitle: 'Услуги',
                            servicesList: [
                                {
                                    header: 'Категория 1',
                                    content: [
                                        {
                                            title: 'Услуга',
                                            price: 'Цена',
                                            note: 'Заметки',
                                        },
                                        {
                                            title: 'Услуга 1',
                                            price: '200',
                                            note: 'Не кормить за 24 часа',
                                        },
                                        {
                                            title: 'Услуга 2',
                                            price: '200',
                                            note: ''
                                        }
                                    ]
                                }
                            ],
                            doctors: 'Врачи',
                            doctorsList: [
                                {
                                    name: 'Мария',
                                    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                    photo: 'alice/doctor.jpg'
                                }
                            ]
                        },
                        {
                            id: 13,
                            title: 'Vet 2',
                            address: '<span>Адрес:</span> Кишинев, ...',
                            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34051.885190169116!2d28.84550931997744!3d47.0123540745651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d94c9a75c61%3A0xeae8ca6c6af66c7!2z0J_RgNC40Y7Rgg!5e0!3m2!1sru!2s!4v1689878722113!5m2!1sru!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                            worktime: '<span>Часы работы:</span><br> Пн - Сб: 9 - 19 <br> Вс: выходной',
                            phone: '<span>Телефон:</span> <a href="tel:+37367741522">+373 677-415-22</a>',
                            sector: { id: 'center', name: 'Ботаника' },
                            infoTitle: 'О клинике',
                            infoContent: 'Клиника AliceVet работает с 2019 года, предоставляет широкий спектр услуг...',
                            social: '<span>Социальные сети:</span>',
                            socialLinks: [
                                { icon: 'facebook.svg', name: 'facebook', link: '/' },
                                { icon: 'instagram.svg', name: 'instagram', link: '/' },
                                { icon: 'tiktok.svg', name: 'website', link: '/' },
                                { icon: 'website.svg', name: 'tiktok', link: '' },
                            ],
                            photos: ['alice/left_banner.jpg', 'alice/right_banner.jpg', 'alice/center_banner.jpg'],
                            servicesTitle: 'Услуги',
                            servicesList: [
                                {
                                    header: 'Категория 1',
                                    content: [
                                        {
                                            title: 'Услуга',
                                            price: 'Цена',
                                            note: 'Заметки',
                                        },
                                        {
                                            title: 'Услуга 1',
                                            price: '200',
                                            note: 'Не кормить за 24 часа',
                                        },
                                        {
                                            title: 'Услуга 2',
                                            price: '200',
                                            note: ''
                                        }
                                    ]
                                }
                            ],
                            doctors: 'Врачи',
                            doctorsList: [
                                {
                                    name: 'Alice',
                                    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                    photo: 'alice/doctor.jpg'
                                }
                            ]
                        }
                    ]
                },
                rom: {},
                en: {}
            },
        }
    },
})