<template>
    <MainView class="shelters">
        <LeftNav :links="content.shelters"/>
        <div class="shelters_shelter">
            <h2>{{ shelterInfo.title }}</h2>
            <div class="shelters_shelter_title">
                <span class="shelters_shelter_title">{{ shelterInfo.amount }}</span>
                <span class="shelters_shelter_number">{{ shelterInfo.number }}</span>
            </div>
            <div class="shelters_shelter_title" v-html="shelterInfo.workers"/>
            <div class="shelters_shelter_title" v-html="shelterInfo.textLarge"/>
            <div class="shelters_shelter_title" v-html="shelterInfo.contacts"/>
            <div class="shelters_shelter_title" v-html="shelterInfo.bankDetails"/>
            <div v-for="bank in shelterInfo.bankDetailsArr" class="shelters_shelter_title">
                <div v-html="bank.bank"/>
            </div>
            <div class="shelters_shelter_gallery">
                <div v-for="image in shelterInfo.images" class="shelters_shelter_gallery_image">
                    <img :src="`/src/assets/images/${image}`"/>
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
    import { ref, watch, reactive } from 'vue'
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
            let content = ref(sheltersStore.content[route.query.lang])
            let shelterInfo = ref(content.value.shelters && content.value.shelters.find(shelter => {
                return shelter.id.toString() === route.params.id
            }))

            watch(() => route.query.lang, () => {
                content.value = sheltersStore.content[route.query.lang]
            })
            watch(() => route.params.id, () => {
                console.log('id',route.params.id)
                shelterInfo.value = content.value.shelters && content.value.shelters.find(shelter => {
                    return shelter.id.toString() === route.params.id
                })
            })
            return {
                content,
                mainStore,
                shelterInfo
            }
        }
    }
</script>

<style lang="scss" scoped>
.shelters {
  display: flex;

  &_shelter {
    margin-left: 50px;

    & > div {
      margin-bottom: 25px;

      &::v-deep(span:first-child) {
        font-size: 18px;
        font-weight: 500;
        color: $main-green;
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