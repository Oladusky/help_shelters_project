<template>
    <MainView>
        <div class="main-block">
            <div class="main-block_text">
                <div class="main-block_text_blur"/>
                <h1>{{ content.mainBanner.header }}</h1>
                <h2>Другая надпись</h2>
            </div>
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
                class="main-block__swiper"
            >
                <swiper-slide v-for="(imageName, index) in images" :key="index">
                    <img :src="`/images/${imageName}`" alt="Image" class="main-block__swiper-image"/>
                </swiper-slide>
            </swiper>
        </div>
    </MainView>
</template>

<script lang="ts">
    import { ref, watch } from 'vue'
    import { useMainStore } from '@/store/main'
    import { useMainPageStore } from '@/store/mainPage'
    import { useRoute } from 'vue-router'
    import MainView from '@/views/MainView.vue'

    export default {
        components: { MainView },
        setup () {
            const mainPageStore = useMainPageStore()
            const mainStore = useMainStore()
            const route = useRoute()

            const images = ['center_banner.jpg', 'left_banner.jpg', 'right_banner.jpg', 'right_banner.jpg']

            let content = ref(mainPageStore.content[route.query.lang])
            watch(() => route.query.lang, () => {
                content.value = mainPageStore.content[route.query.lang]
            })
            return {
                content,
                mainStore,
                images
            }
        }
    }
</script>

<style lang="scss" scoped>
.main-block {
  height: 500px;
  position: relative;

  &__swiper {
    height: 500px;
    border-radius: 4px;

    :deep(*) {
      span {
        background: $white;
      }

      color: $white;
    }
  }

  &__swiper-image {
    width: 100%;
    height: 100%;
  }

  &_text {
    z-index: 99;
    padding: 15px 0;
    text-align: center;
    position: absolute;
    left: 50%;
    width: 35%;
    transform: translate(-50%);
    color: $white;
    @include mobileOrTablet {
      margin-top: 0;
      width: 100%;
    }

    &_blur {
      position: absolute;
      backdrop-filter: blur(3px);
      width: 100%;
      height: 150px;
      top: 10%;
      z-index: -1;
    }
  }
}
</style>