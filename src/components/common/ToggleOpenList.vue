<template>
    <div v-if="elements" v-for="elem in elements" class="toggle-list">
        <div class="toggle-list_title">
            <div class="toggle-list_name" :style="{'font-size': headerFontSize}" @click="toggleOpenBlock(elem.id)" v-html="elem.header"/>
            <img class="toggle-list_arrow"
                 src="/icons/icon-arrow.svg"
                 alt="arrow-down"
                 :class="{ 'arrow-up': isBlockOpened(elem.id) }"/>
        </div>
        <div v-if="isBlockOpened(elem.id) && !$slots.content" v-html="elem.content"/>
        <slot v-if="isBlockOpened(elem.id)" name="content" :elemContent="elem.content"/>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue'
    import { useMainStore } from '@/store/main'

    export default {
        props: {
            elements: {
                required: true,
            },
            openedBlocksId: {
                type: Array,
            },
            headerFontSize: {
                type: String
            }
        },
        setup (props) {
            const mainStore = useMainStore()

            // const blocksId = props.elements.map((elem) => elem.id)
            const openedBlocksId = ref(mainStore.isPC ? props.openedBlocksId || [] : [])
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
                isBlockOpened,
                toggleOpenBlock
            }
        }
    }
</script>

<style lang="scss" scoped>
.toggle-list {
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
</style>