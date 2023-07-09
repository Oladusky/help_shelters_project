<template>
    <div class="cards">
        <div v-for="card in content.shelters" class="card" onmouseover="showLarge = true" onmouseleave="showLarge = false">
            <img class="card_image" :src="`/src/assets/shelters/${card.img}`"/>
            <div v-if="!showLarge" class="card_content">
                <div class="card_title">{{ card.title }}</div>
                <p class="card_text">
                    {{ card.text }}
                </p>
            </div>
            <div v-if="showLarge" class="card_content">
                <div class="card_title">{{ content.info.title }}</div>
                <p class="card_text">
                    {{ content.info.text }}
                </p>
            </div>
            <button class="btn btn--block card__btn">{{ content.buttons.more }}</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { useMainStore } from '@/store/main'
    import { useRoute } from 'vue-router'
    import { ref, watch } from 'vue'
    import { useSheltersStore } from '@/store/shelters'

    export default {
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
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    .card__image {
      filter: contrast(100%);
    }
  }

  &_image {
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
      filter: contrast(70%);
      overflow: hidden;
      position: relative;
      transition: filter 0.5s cubic-bezier(.43,.41,.22,.91);;
      &::before {
        content: "";
        display: block;
        padding-top: 56.25%;
      }
      @media(min-width: 40rem) {
        &::before {
          padding-top: 66.6%;
        }
      }
  }
}
</style>
