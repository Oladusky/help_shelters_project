<template>
    <div v-if="links" class="left-nav" :class="{'left-nav_border': showBorder}">
        <router-link
            v-for="link in links"
            :to="{ path: path ? `/vets/${ link.id }` : `/shelters/${ link.id }`, query: {lang: mainStore.language} }"
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
            },
            showBorder: {
                type: Boolean,
                default: true
            },
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
  width: max-content;
  padding-right: 45px;

  &_border {
    height: 40vh;
    border-right: 3px solid gold;
  }

  @include mobileOrTablet {
    border-right: none;
    height: auto;
  }

  &_link {
    display: flex;
    flex-direction: column;
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

  &_nested-link {
    font-size: 18px;
    margin: 5px 5px 5px 15px;

    @include mobileOrTablet {
      font-size: 14px;
    }
  }
}
</style>