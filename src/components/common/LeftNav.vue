<template>
    <div class="left-nav">
        <router-link
            v-for="link in links"
            :to="{ path: path ? `${ path }/${ link.id }` : `/shelters/${ link.id }`, query: {lang: mainStore.language} }"
            class="left-nav_link"
            @click="$emit('clicked')"
        >
            {{ link.title }}
        </router-link>
    </div>
</template>

<script lang="ts">
    import { ref, watch } from 'vue'
    import { useMainStore } from '@/store/main'
    import { useRoute } from 'vue-router'
    import MainView from '@/views/MainView.vue'
    import { useSheltersStore } from '@/store/shelters'

    export default {
        components: { MainView },
        props: {
            links: {
                type: Array,
                required: true
            },
            path: {
                type: String,
            }
        },
        setup () {
            const sheltersStore = useSheltersStore()
            const mainStore = useMainStore()
            const route = useRoute()
            let content = ref(sheltersStore.content[route.query.lang])
            watch(() => route.query.lang, () => {
                content.value = sheltersStore.content[route.query.lang]
            })

            return {
                content,
                mainStore,
            }
        }
    }
</script>

<style lang="scss" scoped>
.left-nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-right: 3px solid gold;
  width: max-content;
  height: 40vh;
  padding-right: 45px;

  @include mobileOrTablet {
    border-right: none;
    height: auto;
  }

  &_link {
    margin: 10px 0;
    font-size: 20px;
    font-weight: 500;
    white-space: nowrap;

    @include mobileOrTablet {
        font-size: 14px;
        margin: -10px 10px 20px 10px;
    }

    &:hover {
      color: $main-green;
      text-decoration: underline;
    }
  }
}
</style>