<template>
    <MainView class="vets">
        <LeftNav :links="content.vets"/>
        <div>
            <h2>{{ vetInfo.title }}</h2>
            <div>
                <div>
                    <h4 v-html="vetInfo.address"/>
                    <h4 v-html="vetInfo.worktime"/>
                    <h4 v-html="vetInfo.phone"/>
                    <div>
                        <h4 v-html="vetInfo.social"/>
                        <div>
                            <template v-for="link in vetInfo.socialLinks">
                                <div v-if="link.link">
                                    <router-link :to="link.link">
<!--                                        <img :src="`/src/assets/icons/${ link.icon }`" alt="icon"/>-->
                                    </router-link>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <div v-html="vetInfo.map"/>
            </div>
            <ToggleOpenList :elements="vetInfo.services">
                <template #content="{ elemContent }">
                    <table>
                        <tbody>
                            <tr v-for="(item, index) in elemContent" :key="index">
                                <td>{{ item.title }}</td>
                                <td>{{ item.price }}</td>
                                <td>{{ item.note }}</td>
                            </tr>
                        </tbody>
                    </table>
                </template>
            </ToggleOpenList>
            <div>
                <swiper
                    :spaceBetween="30"
                    :slidesPerView="mainStore.isPC ? 3 : 1"
                    :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false,
                    }"
                    :pagination="{
                        clickable: true,
                    }"
                    :navigation="true"
                >
                    <swiper-slide v-for="(imageName, index) in vetInfo.photos" :key="index">
                        <img :src="`/src/assets/vets/${imageName}`" alt="Image"/>
                    </swiper-slide>
                </swiper>
            </div>
            <div>
                <h4>{{vetInfo.doctors}}</h4>
                <div v-for="doctor in vetInfo.doctorsList">
                    <h4>{{doctor.name}}</h4>
                    <p>{{doctor.info}}</p>
                    <img :src="doctor.photo" alt="doctor-photo"/>
                </div>
            </div>
        </div>
    </MainView>
</template>

<script lang="ts">
    import LeftNav from '@/components/common/LeftNav.vue'
    import { useMainStore } from '@/store/main'
    import { useRoute } from 'vue-router'
    import { useVetClinicsStore } from '@/store/vetClinicsInfo'
    import { ref, watch } from 'vue'
    import MainView from '@/views/MainView.vue'
    import ToggleOpenList from '@/components/common/ToggleOpenList.vue'

    export default {
        components: { ToggleOpenList, MainView, LeftNav },
        setup () {
            const mainStore = useMainStore()
            const vetsStore = useVetClinicsStore()
            const route = useRoute()
            const vetId = route.params.id ?? '12'
            const images = ['/alice/center_banner.jpg', '/alice/left_banner.jpg', '/alice/right_banner.jpg', '/alice/right_banner.jpg']

            const isPC = ref(mainStore.isPC)
            let content = ref(vetsStore.content[route.query.lang])
            let vetInfo = ref(content.value.vets && content.value.vets.find(vet => {
                return vet.id.toString() === vetId
            }))

            watch(() => route.query.lang, () => {
                content.value = vetsStore.content[route.query.lang]
            })
            watch(() => route.params.id, () => {
                vetInfo.value = content.value.vets && content.value.vets.find(vet => {
                    return vet.id.toString() === vetId
                })
            })

            // const blocksId = vetInfo.value.bankDetailsArr.map((elem) => elem.id)

            return {
                content,
                vetInfo,
                mainStore,images
            }
        }
    }
</script>

<style lang="scss">
.vets {
  display: flex;
}

</style>