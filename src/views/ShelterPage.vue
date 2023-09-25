<template>
    <MainView class="shelters">
        <LeftNav v-if="isPC" :links="content.shelters"/>
        <div class="shelters_shelter">
            <div class="shelters_shelter_header">
                <h2>{{ shelterInfo.title }}</h2>
                <div class="shelters_shelter_header_media">
                    <template v-for="link in shelterInfo.social">
                        <div v-if="link.link" class="shelters_shelter_header_social">
                            <router-link :to="link.link">
                                <img :src="`/src/assets/icons/${ link.icon }`"/>
                            </router-link>
                        </div>
                    </template>
                </div>
            </div>
            <div class="shelters_shelter_title">
                <span class="shelters_shelter_title">{{ shelterInfo.amount }}</span>
                <span class="shelters_shelter_number">{{ shelterInfo.number }}</span>
            </div>
            <div class="shelters_shelter_title" v-html="shelterInfo.workers"/>
            <div class="shelters_shelter_title" v-html="shelterInfo.textLarge"/>
            <div class="shelters_shelter_title" v-html="shelterInfo.contacts"/>
            <div class="shelters_shelter_title" @click="toggleOpenBlock(shelterInfo.id)" v-html="shelterInfo.bankDetails"/>

            <div v-for="bank in shelterInfo.bankDetailsArr" class="shelters_shelter_bank">
                <div class="shelters_shelter_bank_title">
                    <div class="shelters_shelter_bank_name" @click="toggleOpenBlock(shelterInfo.id)" v-html="bank.bankName"/>
                    <img class="shelters_shelter_bank_arrow"
                         src="../assets/icons/icon-arrow.svg"
                         alt="arrow-down"
                         :class="{ 'arrow-up': isBlockOpened(bank.id) }"/>
                </div>
                <div v-if="isBlockOpened(bank.id)" v-html="bank.requisites"/>
            </div>

            <div class="shelters_shelter_gallery">
                <div v-for="image in shelterInfo.images" class="shelters_shelter_gallery_image">
                    <img :src="`/src/assets/images/${ image }`"/>
                </div>
            </div>
            <div class="shelters_shelter_title" v-html="shelterInfo.location"/>
            <div class="shelters_shelter_location">
                <div v-html="shelterInfo.map"/>
                <div class="shelters_shelter_info">
                    <div class="shelters_shelter_info_title">{{ shelterInfo.needs }}</div>
                    <ul>
                        <li v-for="elem in shelterInfo.needsArr">{{ elem }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </MainView>
    <Footer/>
</template>

<script lang="ts">
    import {ref, watch, reactive, onMounted, onBeforeMount} from 'vue'
    import { useMainStore } from '@/store/main'
    import { useRoute } from 'vue-router'
    import MainView from '@/views/MainView.vue'
    import LeftNav from '@/components/common/LeftNav.vue'
    import { useSheltersStore } from '@/store/shelters'
    import Footer from '@/components/Footer.vue'

    export default {
        components: { Footer, LeftNav, MainView },
        setup () {
            const sheltersStore = useSheltersStore()
            const mainStore = useMainStore()
            const route = useRoute()
            const isPC = ref(mainStore.isPC)
            let content = ref(sheltersStore.content[route.query.lang])
            let shelterInfo = ref(content.value.shelters && content.value.shelters.find(shelter => {
                return shelter.id.toString() === route.params.id
            }))

            watch(() => route.query.lang, () => {
                content.value = sheltersStore.content[route.query.lang]
            })
            watch(() => route.params.id, () => {
                shelterInfo.value = content.value.shelters && content.value.shelters.find(shelter => {
                    return shelter.id.toString() === route.params.id ?? 0
                })
            })

            const blocksId = shelterInfo.value.bankDetailsArr.map((elem) => elem.id)
            const openedBlocksId = ref(mainStore.isPC ? blocksId : [blocksId[0]])
            const toggleOpenBlock = (id: number): void => {
                if (isBlockOpened(id)) {
                    openedBlocksId.value = openedBlocksId.value.filter((i: number) => i !== id)
                } else {
                    openedBlocksId.value.push(id)
                }
            }

            const isBlockOpened = (id: number) => {
                return openedBlocksId.value.includes(id)
            }

            return {
                content,
                mainStore,
                shelterInfo,
                toggleOpenBlock,
                isBlockOpened,
                isPC,
                route
            }
        }
    }
</script>

<style lang="scss" scoped>
.shelters {
  display: flex;

  &_shelter {
    margin-left: 50px;
    @include mobileOrTablet {
      margin-left: 0;
      width: 100%;
    }

    &_header {
      display: flex;
      justify-content: space-between;
      &_media {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &_social {
        width: 20px;
        height: 20px;
        margin-right: 15px;
      }
    }

    & > div {
      margin-bottom: 25px;

      &::v-deep(span:first-child) {
        font-size: 18px;
        font-weight: 500;
        color: $main-green;
      }
    }

    &_bank {
      margin-left: 20px;
      &_title {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-weight: 500;
      }

      &_name {
        font-size: 16px;
        margin-right: 10px;
        border-bottom: 3px solid $main-green;
      }

      &_arrow {
        width: 15px;
        height: 15px;
        transform: rotate(-180deg);

        &.arrow-up {
          transform: rotate(0);
        }
      }
    }

    &_gallery {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 50px;
      @include tablet {
        margin: 30px;
        gap: 20px;
      }
      @include mobile {
        display: block;
        margin-top: 30px;
      }

      &_image {
        width: 100%;
        height: 250px;
        margin-bottom: 10px;
        @include mobile {
          height: 100px;
        }

        & img {
          width: 100%;
          height: 100%;
        }
      }
    }
    &_location {
      display: flex;
      justify-content: space-between;
      margin-right: 20%;
      @include mobile {
        display: block;
      }
    }
    &_info {
      margin-left: 30px;
      @include mobile {
        margin: 20px 0;
      }
      &_title {
        font-size: 16px;
        font-weight: 500;
        color: $main-green;
      }
    }
  }
}
</style>