<template>
    <MainView class="cards">
        <div v-for="card in content.shelters" class="card" onmouseover="showLarge = true" onmouseleave="showLarge = false">
            <div class="card_image" ><img :src="`/src/assets/shelters/${card.img}`"/></div>
            <div v-if="!showLarge" class="card_content">
                <div class="card_content_title">{{ card.title }}</div>
                <p class="card_content_text">
                    {{ card.text }}
                </p>
            </div>
            <div v-if="showLarge" class="card_content">
                <div class="card_content_title">{{ content.info.title }}</div>
                <p class="card_content_text">
                    {{ content.info.text }}
                </p>
            </div>
            <button class="card_button">{{ content.buttons.more }}</button>
        </div>
    </MainView>
</template>

<script lang="ts">
    import { useMainStore } from '@/store/main'
    import { useRoute } from 'vue-router'
    import { ref, watch } from 'vue'
    import { useSheltersStore } from '@/store/shelters'
    import MainView from "@/views/MainView.vue";

    export default {
        components: {MainView},
        setup () {
            const sheltersStore = useSheltersStore()
            const mainStore = useMainStore()
            const route = useRoute()
            const showLarge = ref(false)
            let content = ref(sheltersStore.content[route.query.lang])
            const cardImageStyle = (imagePath) => {
                return {
                    backgroundImage: `url(${ require(`/src/assets/shelters/${ imagePath }`) })`
                }
            }
            watch(() => route.query.lang, () => {
                content.value = sheltersStore.content[route.query.lang]
            })
            return {
                content,
                mainStore,
                showLarge,
                cardImageStyle
            }
        }
    }

</script>

<style lang="scss" scoped>
.cards {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  @include mobile {
    display: block;
  }
}

.card {
  background-color: $white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  &_image {
      width: 100%;
      height: 300px;
      //position: absolute;
      //top: 0;
      //left: 0;
        & img {
          width: 100%;
          height: 100%;
        }
  }
  &_content {
    padding: 10px;
    &_title {

    }
    &_text {

    }
  }
  &_button {
    width: 50%;
    margin: auto;
    margin-bottom: 15px;
  }
}
</style>
