<template>
    <MainView class="social">
        <h2 class="social_title">{{ content.socialLinks.header }}</h2>
        <p class="social_text">{{ content.socialLinks.text }}</p>
        <div class="social_links"></div>
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
.social {
  margin-top: 60px;
  margin-bottom: 60px;
  @include mobile {
    margin-top: 20px;
  }
  &_title {
    text-align: center;
    margin-bottom: 20px;
  }
  &_text {}
}
</style>