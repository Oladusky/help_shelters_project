<template>
    <MainView class="social">
        <h2 class="social_title">{{ content.socialLinks.header }}</h2>
        <p class="social_text">{{ content.socialLinks.text }}</p>
        <div class="social_links">
            <div class="social_links_icon"><img :src="`/help_shelters_project/icons/facebook.svg`"/>Facebook:</div>
            <ul v-for="link in content.socialLinks.links.facebook" class="social_links_link">
                <li class="social_links_link_description">
                    <a class="social_links_link_header" :href="link.link">{{link.name}}</a>
                </li>
            </ul>
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

  &_links {
    width: 100%;
    font-size: 20px;
    font-weight: 600;

    &_icon {
      display: flex;
      align-items: center;

      img {
        margin-right: 15px;
        width: 25px;
        height: 25px;
      }
    }

    &_link {
      display: flex;
      align-items: center;
      list-style-type: '\2713';
      color: $main-green;

      &_header {
        margin-left: 10px;
      }
    }
  }
}
</style>