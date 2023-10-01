import {defineStore} from 'pinia'

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
                        text: `Наверное, Вы замечали как много бездомных животным в Молдове. К сожалению, ситуация и правда плачевная. В Молдове почти нет городских приютов, в тех что есть ужасные условия, а ситуацией почти не занимаются.
                        Приюты созданы неравнодушными людьми и существуют только на пожертвования
                        Волонтеры стараются изо всех сил, но им тоже нужна помощь. Важен любой вклад. Вместе мы сможем помочь бездомным животным!`,
                    },
                    socialLinks: {
                        header: 'Группы в социальных сетях',
                        text: 'В этих группах люди выставляют информацию о животных, которые ищут дом или о тех, кому нужна помощь. Если вы не нашли подходящего питомца, напишите обьявление и вам обязательно помогут.',
                        links: {
                            facebook: [
                                {
                                    name: 'animalute pe degeaba',
                                    link: 'https://www.facebook.com/groups/809873382465795/',
                                },
                                {
                                    name: 'Кишиневский клуб любителей животных/Clubul Iubitorilor De Animale Chisinau',
                                    link: 'https://www.facebook.com/groups/catanddogmd/',
                                },
                                {
                                    name: 'Protectia animalelor Chisinau',
                                    link: 'https://www.facebook.com/groups/protectia.animalelor.chisinau/',
                                },
                                {
                                    name: 'Adopta - Moldova (Мы ищем дом)',
                                    link: 'https://www.facebook.com/groups/AdoptaMoldova/'
                                },
                                {
                                    name: 'Волонтерская группа\'\'Забота о бездомных животных Молдова.\'\'Помощь.Ищем дом.',
                                    link: 'https://www.facebook.com/groups/237652107095330/'
                                }
                            ],
                            instagram: []
                        }
                    },
                    footer: {
                        line_one: 'Данный сайт носит исплючительно информационный характер и создан с целью помочь информационно в сборе средств для приютов',
                        line_two: 'По поводу проблем в работе сайта, а также идей, предложений или претензий писать на почту: ',
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
                        text: 'В этих группах люди выставляют информацию о животных, которые ищут дом или о тех, кому нужна помощь. Если вы не нашли подходящего питомца, напишите обьявление и вам обязательно помогут.',
                        links: {
                            facebook: [
                                {
                                    name: 'animalute pe degeaba',
                                    link: 'https://www.facebook.com/groups/809873382465795/',
                                },
                                {
                                    name: 'Кишиневский клуб любителей животных/Clubul Iubitorilor De Animale Chisinau',
                                    link: 'https://www.facebook.com/groups/catanddogmd/',
                                },
                                {
                                    name: 'Protectia animalelor Chisinau',
                                    link: 'https://www.facebook.com/groups/protectia.animalelor.chisinau/',
                                },
                                {
                                    name: 'Adopta - Moldova (Мы ищем дом)',
                                    link: 'https://www.facebook.com/groups/AdoptaMoldova/'
                                },
                                {
                                    name: 'Волонтерская группа\'\'Забота о бездомных животных Молдова.\'\'Помощь.Ищем дом.',
                                    link: 'https://www.facebook.com/groups/237652107095330/'
                                }
                            ],
                            instagram: []
                        }
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
                        text: 'В этих группах люди выставляют информацию о животных, которые ищут дом или о тех, кому нужна помощь. Если вы не нашли подходящего питомца, напишите обьявление и вам обязательно помогут.',
                        links: {
                            facebook: [
                                {
                                    name: 'animalute pe degeaba',
                                    link: 'https://www.facebook.com/groups/809873382465795/',
                                },
                                {
                                    name: 'Кишиневский клуб любителей животных/Clubul Iubitorilor De Animale Chisinau',
                                    link: 'https://www.facebook.com/groups/catanddogmd/',
                                },
                                {
                                    name: 'Protectia animalelor Chisinau',
                                    link: 'https://www.facebook.com/groups/protectia.animalelor.chisinau/',
                                },
                                {
                                    name: 'Adopta - Moldova (Мы ищем дом)',
                                    link: 'https://www.facebook.com/groups/AdoptaMoldova/'
                                },
                                {
                                    name: 'Волонтерская группа\'\'Забота о бездомных животных Молдова.\'\'Помощь.Ищем дом.',
                                    link: 'https://www.facebook.com/groups/237652107095330/'
                                }
                            ],
                            instagram: []
                        }
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