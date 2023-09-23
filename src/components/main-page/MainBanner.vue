<template>
    <MainView v-if="mainStore.isPC">
        <div class="main-block">
            <div class="main-block_left"/>
            <div class="main-block_center">
                <div class="main-block_center_text">
                    <div class="main-block_center_blur"/>
                    <h1 class="main-heading">{{ content.mainBanner.header }}</h1>
                    <h2 class="sub-heading">Другая надпись</h2>
                </div>
            </div>
            <div class="main-block_right"/>
        </div>
    </MainView>
    <div v-else class="main-block_center">
        <div class="main-block_center_text">
            <div class="main-block_center_blur"/>
            <h1 class="main-heading">{{ content.mainBanner.header }}</h1>
            <h2 class="sub-heading">Другая надпись</h2>
        </div>
    </div>
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
            let content = ref(mainPageStore.content[route.query.lang])
            watch(() => route.query.lang, () => {
                content.value = mainPageStore.content[route.query.lang]
            })
            return {
                content,
                mainStore

            }
        }
    }
</script>

<style lang="scss" scoped>
.main-block {
  display: flex;
  height: 500px;
  position: relative;

  &_left, &_center, &_right {
    height: 100%;
    width: calc(100% / 3);
    background: no-repeat center center;
    object-fit: contain;
    background-size: 100% 100%;
  }

  &_left {
    background-image: url("../../assets/images/left_banner.jpg");
  }

  &_center {
    position: relative;
    background-image: url("../../assets/images/center_banner.jpg");
    @include mobileOrTablet {
      width: 100%;
      height: 60vh;
    }

    &_text {
      margin-top: 10%;
      z-index: 99;
      padding: 15px 0;
      text-align: center;
      position: relative;
      color: $white;
      @include mobileOrTablet {
        margin-top: 0;
      }
    }

    &_blur {
      position: absolute;
      backdrop-filter: blur(2px);
      width: 100%;
      height: 150px;
      top: 10%;
      z-index: -1;
    }
  }

  &_right {
    background-image: url("../../assets/images/right_banner.jpg");
  }
}
</style>