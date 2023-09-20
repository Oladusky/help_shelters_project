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
                        header: 'Вместе мы можем помочь бездомным животным Молдовы',
                        text: 'Наверное, Вы замечали как много бездомных животным в Молдове. К сожалению, ситуация и правда плачевная. Волонтеры и неравнодушные люди стараются изо всех сил, но им тоже нужна помощь. Важен любой вклад. Вместе мы сможем их спасти!',
                    },
                    socialLinks: {
                        header: 'Группы в социальных сетях',
                        text: 'Здесь вы также можете найти себе домашнего любимца или тех, кому нужна помощь',
                        links: [
                            {
                                name: 'friends of moldovian strays',
                                description: 'friends of moldovian straysfriends of moldovian strays',
                                link: 'b',
                                icon: 'c',
                            },
                            {
                                name: 'friends of moldovian strays',
                                description: 'friends of moldovian straysfriends of moldovian strays',
                                link: 'b',
                                icon: 'c',
                            },
                            {
                                name: 'friends of moldovian strays',
                                description: 'friends of moldovian straysfriends of moldovian strays',
                                link: 'b',
                                icon: 'c',
                            },
                        ]
                    },
                    footer: {
                        line_one: 'Данный сайт носит исплючительно информационный характер и создан с целью помочь информационно в сборе средств для приютов',
                        line_two: 'По поводу идей, предложений или претензий писать на почту ',
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
                    },
                    socialLinks: {
                        header: 'Группы в социальных сетях',
                        text: 'Здесь вы также можете найти себе домашнего любимца или тех, кому нужна помощь',
                        links: [
                            {
                                name: 'friends of moldovian strays',
                                description: 'friends of moldovian straysfriends of moldovian strays',
                                link: 'b',
                                icon: 'c',
                            },
                            {
                                name: 'friends of moldovian strays',
                                description: 'friends of moldovian straysfriends of moldovian strays',
                                link: 'b',
                                icon: 'c',
                            },
                            {
                                name: 'friends of moldovian strays',
                                description: 'friends of moldovian straysfriends of moldovian strays',
                                link: 'b',
                                icon: 'c',
                            },
                        ]
                    },
                    footer: {
                        line_one: 'Данный сайт носит исплючительно информационный характер и создан с целью помочь информационно в сборе средств для приютов',
                        line_two: 'По поводу идей, предложений или претензий писать на почту ',
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
                    },
                    socialLinks: {
                        header: 'Группы в социальных сетях',
                        text: 'Здесь вы также можете найти себе домашнего любимца или тех, кому нужна помощь',
                        links: [
                            {
                                name: 'friends of moldovian strays',
                                description: 'friends of moldovian straysfriends of moldovian strays',
                                link: 'b',
                                icon: 'icons8-pets-32.png',
                            },
                            {
                                name: 'friends of moldovian strays',
                                description: 'friends of moldovian straysfriends of moldovian strays',
                                link: 'b',
                                icon: 'icons8-pets-32.png',
                            },
                            {
                                name: 'friends of moldovian strays',
                                description: 'friends of moldovian straysfriends of moldovian strays',
                                link: 'b',
                                icon: 'icons8-pets-32.png',
                            },
                        ]
                    },
                    footer: {
                        line_one: 'Данный сайт носит исплючительно информационный характер и создан с целью помочь информационно в сборе средств для приютов',
                        line_two: 'По поводу идей, предложений или претензий писать на почту ',
                    }
                },
            },
        }
    },
    actions: {},
})