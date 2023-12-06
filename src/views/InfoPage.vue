<template>
    <MainView v-if="content" class="info-page">
        <div v-for="infoBlock in content" class="info-page_block">
            <h3 class="info-page_block_title" @click="toggleOpenBlock(infoBlock.id)">
                {{ infoBlock.title }}
                <img class="info-page_block_title_arrow"
                     src="/icons/icon-arrow.svg"
                     alt="arrow-down"
                     :class="{ 'arrow-up': isBlockOpened(infoBlock.id) }"/>
            </h3>
            <div v-if="isBlockOpened(infoBlock.id)" class="info-page_block_text" v-html="infoBlock.text"/>
        </div>
    </MainView>
    <Footer/>
</template>

<script lang="ts">
    import { defineComponent, ref, watch } from 'vue'
    import { useMainStore } from '@/store/main'
    import { useRoute } from 'vue-router'
    import { useInfoStore } from '@/store/info'
    import MainView from '@/views/MainView.vue'
    import Footer from '@/components/Footer.vue'

    export default defineComponent({
        name: 'InfoPage',
        components: { Footer, MainView },
        setup () {
            const infoStore = useInfoStore()
            const mainStore = useMainStore()
            const route = useRoute()
            let content = ref(infoStore.content[route.query.lang])
            watch(() => route.query.lang, () => {
                content.value = infoStore.content[route.query.lang]
            })

            const blocksId = content.value.map((infoBlock) => infoBlock.id)
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
                toggleOpenBlock,
                isBlockOpened
            }
        }
    })
</script>

<style lang="scss">
.info-page {
  &_block {
    &_title {
      color: $main-green;
      text-transform: uppercase;
      font-weight: 600;

      &_arrow {
        width: 15px;
        height: 15px;
        transform: rotate(-180deg);

        &.arrow-up {
          transform: rotate(0);
        }
      }
    }

    &_text {

        strong {
          color: $main-green;
        }

        & ul li {
          margin-bottom: 15px;
        }

    }
  }
}
</style>