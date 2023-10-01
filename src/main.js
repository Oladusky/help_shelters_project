import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SwiperCore from 'swiper/core'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const pinia = createPinia()

SwiperCore.use([Autoplay, Pagination, Navigation])

const app = createApp(App)

app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

app.use(router)
app.use(pinia)
app.mount('#app')