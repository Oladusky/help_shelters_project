<template>
    <MainView class="vets">
        <div v-if="isPC" class="vets_nav">
            <div v-for="sector in sectors" class="vets_nav_link">
                {{ sector.name }}
                <LeftNav v-if="getClinicsById(sector.id).length" :links="getClinicsById(sector.id)" path="vets" :show-border="false"/>
            </div>
        </div>
        <div class="vets_wrapper">
            <h1>{{ vetInfo.title }}</h1>
            <div class="vets_wrapper_main-info">
                <div class="vets_wrapper_main-info_left">
                    <p v-html="vetInfo.address"/>
                    <p v-html="vetInfo.worktime"/>
                    <p v-html="vetInfo.phone"/>
                    <div>
                        <p v-html="vetInfo.social"/>
                        <div class="vets_wrapper_main-info_left_social">
                            <template v-for="link in vetInfo.socialLinks">
                                <div v-if="link.link" class="vets_wrapper_main-info_left_social_link">
                                    <router-link :to="link.link">
                                        <img :src="`/icons/${link.icon}`" alt="icon"/>
                                    </router-link>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="vets_wrapper_main-info_map" v-html="vetInfo.map"/>
            </div>
            <div class="vets_wrapper_info">
                <h2>{{ vetInfo.infoTitle }}</h2>
                <p>{{ vetInfo.infoContent }}</p>
            </div>
            <div class="vets_wrapper_list">
                <h2>{{ vetInfo.servicesTitle }}</h2>
                <ToggleOpenList :elements="vetInfo.servicesList" header-font-size="18px">
                    <template #content="{ elemContent }">
                        <table class="vets_wrapper_services">
                            <tbody>
                                <tr v-for="(item, index) in elemContent" :key="index" class="vets_wrapper_services_row">
                                    <td class="vets_wrapper_services_cell">{{ item.title }}</td>
                                    <td class="vets_wrapper_services_cell">{{ item.price }}</td>
                                    <td class="vets_wrapper_services_cell">{{ item.note }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </template>
                </ToggleOpenList>
            </div>
            <div class="vets_wrapper_gallery">
                <swiper
                    class="vets_wrapper_gallery_swiper"
                    :spaceBetween="30"
                    :slidesPerView="isPC ? 3 : 2"
                    :autoplay="{
                        delay: 6000,
                        disableOnInteraction: false,
                    }"
                    :pagination="{
                        clickable: true,
                    }"
                    :navigation="true"
                >
                    <swiper-slide v-for="(imageName, index) in vetInfo.photos" :key="index">
                        <img class="vets_wrapper_gallery_swiper_image" :src="`/vets/${imageName}`"
                             alt="Image"/>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="vets_wrapper_doctors">
                <h2>{{ vetInfo.doctors }}</h2>
                <div v-for="doctor in vetInfo.doctorsList" class="vets_wrapper_doctors_doctor">
                    <div class="vets_wrapper_doctors_doctor_left">
                        <h3>{{ doctor.name }}</h3>
                        <p>{{ doctor.info }}</p>
                    </div>
                    <img class="vets_wrapper_doctors_doctor_photo" :src="`/vets/${doctor.photo}`"
                         alt="doctor-photo"/>
                </div>
            </div>
        </div>
    </MainView>
    <Footer/>
</template>

<script lang="ts">
    import LeftNav from '@/components/common/LeftNav.vue'
    import { useMainStore } from '@/store/main'
    import { useRoute } from 'vue-router'
    import { useVetClinicsStore } from '@/store/vetClinicsInfo'
    import { ref, watch } from 'vue'
    import MainView from '@/views/MainView.vue'
    import ToggleOpenList from '@/components/common/ToggleOpenList.vue'
    import Footer from '@/components/Footer.vue'
    import { useCommonDataStore } from '@/store/commonData'

    export default {
        components: { Footer, ToggleOpenList, MainView, LeftNav },
        setup () {
            const mainStore = useMainStore()
            const vetsStore = useVetClinicsStore()
            const commonStore = useCommonDataStore()

            const route = useRoute()
            const vetId = route.params.id ?? '12'
            const images = ['/alice/center_banner.jpg', '/alice/left_banner.jpg', '/alice/right_banner.jpg', '/alice/right_banner.jpg']

            const isPC = ref(mainStore.isPC)
            let content = ref(vetsStore.content[route.query.lang])
            let vetInfo = ref(content.value.vets && content.value.vets.find(vet => {
                return vet.id.toString() === vetId
            }))
            let sectors = ref(commonStore.content[route.query.lang].sectors)

            watch(() => route.query.lang, () => {
                content.value = vetsStore.content[route.query.lang]
                sectors.value = commonStore.content[route.query.lang].sectors
            })
            watch(() => route.params.id, () => {
                vetInfo.value = content.value.vets && content.value.vets.find(vet => {
                    return vet.id.toString() === route.params.id
                })
            })

            const getClinicsById = (id: string) => {
                return content.value.vets.filter(clinic => {
                    return clinic.sector.id === id
                })
            }

            // const blocksId = vetInfo.value.bankDetailsArr.map((elem) => elem.id)

            return {
                mainStore,
                content,
                vetInfo,
                isPC,
                images,
                sectors,
                getClinicsById
            }
        }
    }
</script>

<style lang="scss" scoped>
.vets {
  display: flex;
  overflow-x: hidden;

  &_nav {
    display: flex;
    flex-direction: column;
    border-right: 3px solid gold;
    height: 40vh;
  }

  &_wrapper {
    margin-left: 20px;
    width: 90%;

    @include mobileOrTablet {
      margin-left: 5px;
    }

    &_main-info {
      display: flex;
      justify-content: space-between;

      @include mobileOrTablet {
        display: block;
      }

      &_left {
        p {
          font-weight: 400;

          :deep(span) {
            font-weight: 600;
            color: $main-green;
          }
        }

        &_social {
          display: flex;

          &_link {
            width: 30px;
            height: 30px;
            margin-right: 15px;
          }
        }

        @include mobileOrTablet {
          margin-bottom: 30px;
        }
      }

      &_map {
        width: 500px;
        @include mobileOrTablet {
          width: 300px;
        }

        & iframe {
          width: 100%;
        }
      }
    }

    &_list {
      margin-top: 100px;
    }

    &_services {
      width: 100%;
      margin: 20px 0 60px;

      &_row {
        &:first-child {
          font-weight: 500;
          font-size: 18px;
        }
      }

      &_cell {
        padding: 10px 0;
        border-bottom: 1px solid $main-green;
        min-width: 80px;
      }
    }

    &_gallery {
      height: 400px;
      margin: 40px 0;

      &_swiper {
        height: 100%;

        :deep(*) {
          span {
            background: $main-green;
          }

          color: $main-green;
        }

        &_image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    &_doctors {
      margin: 20px 0;

      &_doctor {
        display: flex;
        @include mobileOrTablet {
          display: block;
        }

        &_left {
          margin-right: 50px;
          width: calc(100% - 300px);

          @include mobileOrTablet {
            width: auto;
            margin-right: 0;
          }

          & p {
            font-size: 16px;
            line-height: 22px;
          }
        }

        &_photo {
          width: 250px !important;
          height: 250px;
          border-radius: 50%;
          margin-right: 60px;
          display: flex;
          justify-content: center;

          @include mobileOrTablet {
            border-radius: 4px;
            margin: auto;
          }

          & img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
}

</style>