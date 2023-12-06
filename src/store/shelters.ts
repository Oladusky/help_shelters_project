import { defineStore } from 'pinia'

export const useSheltersStore = defineStore('shelters', {
    state: () => {
        return {
            content: {
                rus: {
                    buttons: {
                        more: 'подробнее',
                    },
                    title: 'Приюты Кишинева',
                    shelters: [
                        {
                            id: 0,
                            title: 'Приют',
                            img: 'center_banner.jpg',
                            text: 'Емкий текст о приюте. Пример: "Приют "Лайка" создан в 2009 году двумя неравнодушными людьми. Сейчас в приюте находятся 300 кошек и собак."',
                            textLarge: '<span>О приюте: </span>Небольшой блок информации об истории создания приюта, количестве животных, условиях, повседневных делах и трудностях, с которыми ежедневно сталкиваются работники.',
                            amount: 'Amount of pets: ',
                            number: 300,
                            location: '<span>Местоположение: </span> Кишинев, Дурлешты',
                            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21762.176671190573!2d28.736703055782005!3d47.0152640706376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cbd591b9a8ca3d%3A0xa736d6470b727db4!2sApartamente%20de%20la%20Compania%20GarantCons%20%C3%AEn%20v%C3%A2nzare!5e0!3m2!1sru!2sus!4v1701368362140!5m2!1sru!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                            workers: '<span>Количество работников: </span> 2 человека: Наталья и Максим',
                            contacts: '<span>Контакты: </span> Maria - +(373) 677 455 67',
                            socialHeader: '<span>Социальные сети: </span>',
                            social: [
                                { icon: 'facebook.svg', name: 'facebook', link: '/' },
                                { icon: 'instagram.svg', name: 'instagram', link: '/' },
                                { icon: 'tiktok.svg', name: 'website', link: '/' },
                                { icon: 'website.svg', name: 'tiktok', link: '' },
                            ],
                            bankDetails: '<span>Банковские реквизиты: </span>',
                            bankDetailsArr: [
                                {
                                    id: 0,
                                    header: 'Moldincombank',
                                    content: 'Имя получателя: Мария Мария</br>' +
                                        'Номер счета: 0000000000</br>'
                                },
                                {
                                    id: 1,
                                    header: 'Pay Pal',
                                    content: '<strong>example@mail.ru</strong>'
                                },
                            ],
                            images: ['center_banner.jpg', 'left_banner.jpg', 'right_banner.jpg'],
                            needs: 'Что необходимо приюту:',
                            needsArr: ['сухой корм', 'капли от блох', 'миски'],

                        },
                    ],
                },
                rom: {},
                en: {}
            },
        }
    },
})