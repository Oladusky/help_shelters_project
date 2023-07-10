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
                        text: 'Вместе мы можем помочь бездомным животным Молдовы Вместе мы можем помочь бездомным животным Молдовы Вместе мы можем помочь бездомным животным Молдовы Вместе мы можем помочь бездомным животным Молдовы',
                    },
                    socialLinks: {
                        header: 'Группы в социальных сетях',
                        text: 'Здесь вы также можете найти себе домашнего любимца или тех, кому нужна помощь',
                        links: [
                            {
                                name: 'friends of moldovian strays',
                                link: 'b',
                                icon: 'c',
                            },
                            {
                                name: 'friends of moldovian strays',
                                link: 'b',
                                icon: 'c',
                            },
                            {
                                name: 'friends of moldovian strays',
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
            },
        }
    },
    actions: {},
})