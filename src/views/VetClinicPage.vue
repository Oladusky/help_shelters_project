<template>
    <MainView class="vets">
        <LeftNav :links="content.vets"/>
        <div class="vets_wrapper">
            <h1>{{ vetInfo.title }}</h1>
            <div class="vets_wrapper_main-info">
                <div class="vets_wrapper_main-info_left">
                    <h3 v-html="vetInfo.address"/>
                    <h3 v-html="vetInfo.worktime"/>
                    <h3 v-html="vetInfo.phone"/>
                    <div>
                        <h3 v-html="vetInfo.social"/>
                        <div class="vets_wrapper_main-info_left_social">
                            <template v-for="link in vetInfo.socialLinks">
                                <div v-if="link.link" class="vets_wrapper_main-info_left_social_link">
                                    <router-link :to="link.link">
                                        <img :src="`/src/assets/icons/${ link.icon }`" alt="icon"/>
                                    </router-link>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="vets_wrapper_main-info_map" v-html="vetInfo.map"/>
            </div>
            <div class="vets_wrapper_list">
                <ToggleOpenList :elements="vetInfo.services" header-font-size="18px">
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
                    :slidesPerView="isPC ? 2 : 1"
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
                        <img class="vets_wrapper_gallery_swiper_image" :src="`/src/assets/vets/${imageName}`" alt="Image"/>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="vets_wrapper_doctors">
                <h1>{{ vetInfo.doctors }}</h1>
                <div v-for="doctor in vetInfo.doctorsList" class="vets_wrapper_doctors_doctor">
                    <div class="vets_wrapper_doctors_doctor_left">
                        <h3>{{ doctor.name }}</h3>
                        <p>{{ doctor.info }}</p>
                    </div>
                    <img class="vets_wrapper_doctors_doctor_photo" :src="`/src/assets/vets/${doctor.photo}`" alt="doctor-photo"/>
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
                isPC, images
            }
        }
    }
</script>

<style lang="scss" scoped>
.vets {
  display: flex;
  overflow-x: hidden;

  &_wrapper {
    margin-left: 20px;
    width: 90%;

    @include mobileOrTablet {
      margin-left: 5px;
    }

    &_main-info {
      display: flex;
      justify-content: space-between;

      &_left {
        &_social {
          display: flex;

          &_link {
            width: 30px;
            height: 30px;
            margin-right: 15px;
          }
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
      }
    }

    &_gallery {
      height: 700px;
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

          &_left {
            margin-right: 50px;
            width: calc(100% - 300px);

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