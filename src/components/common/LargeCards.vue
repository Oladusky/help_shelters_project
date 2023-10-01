<template>
    <MainView class="cards">
        <div v-for="card in content.shelters" class="card">
            <div v-if="!showLarge" class="card_image">
                <img :src="`/src/assets/shelters/${card.img}`"/>
            </div>
            <div v-if="!showLarge" class="card_content">
                <div class="card_content_title">{{ card.title }}</div>
                <p class="card_content_text">
                    {{ card.text }}
                </p>
            </div>
            <div v-if="showLarge" class="card_image">
                <img :src="`/src/assets/shelters/${card.img}`"/>
            </div>
            <div v-if="showLarge" class="card_content">
                <div class="card_content_title">{{ content.info.title }}</div>
                <div class="card_content_subtitle">{{ content.info.amount }}</div>
                <p class="card_content_text">
                    {{ content.info.text }}
                </p>
            </div>
            <div class="card_footer">
                <div class="card_media">
                    <template v-for="link in card.social">
                        <div v-if="link.link" class="card_social">
                            <router-link :to="link.link">
                                <img :src="`/src/assets/icons/${ link.icon }`"/>
                            </router-link>
                        </div>
                    </template>
                </div>

                <router-link :to="{ path: `shelters/${ card.id }`, query: {lang: mainStore.language} }"
                             class="card_button">{{ content.buttons.more }}
                </router-link>
            </div>
        </div>
    </MainView>
</template>

<script lang="ts">
    import { useMainStore } from '@/store/main'
    import { useRoute } from 'vue-router'
    import { ref, watch } from 'vue'
    import { useSheltersStore } from '@/store/shelters'
    import MainView from '@/views/MainView.vue'

    export default {
        components: { MainView },
        setup () {
            const sheltersStore = useSheltersStore()
            const mainStore = useMainStore()
            const route = useRoute()
            const showLarge = ref(false)
            let content = ref(sheltersStore.content[route.query.lang])
            watch(() => route.query.lang, () => {
                content.value = sheltersStore.content[route.query.lang]
            })
            return {
                content,
                mainStore,
                showLarge,
            }
        }
    }

</script>

<style lang="scss" scoped>
.cards {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 50px;
  @include tablet {
    margin: 30px;
    gap: 20px;
  }
  @include mobile {
    display: block;
    margin-top: 30px;
  }
}

.card {
  width: auto;
  background-color: $white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  padding-bottom: 10px;

  @include mobile {
    margin-bottom: 0;
  }

  &_image {
    width: 100%;
    height: 300px;
    @include mobile {
      height: 300px;
    }

    & img {
      width: 100%;
      height: 100%;
    }
  }

  &_content {
    padding: 10px;
    z-index: 76;

    &_title {
      font-size: 24px;
      font-weight: 600;
      @include mobile {
        font-size: 12px;
      }
    }

    &_text {
      font-size: 16px;
      @include mobile {
        font-size: 10px;
      }
    }
  }

  &_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 5%;
  }

  &_media {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &_social {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &_button {
    display: inline-block;
    padding: 5px 15px;
    border-radius: 10rem;
    color: $white;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: .15rem;
    transition: all .3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    width: 50%;
    text-align: center;
    @include mobile {
      font-size: 10px;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $main-green;
      border-radius: 10rem;
      z-index: -2;
    }

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: darken($main-green, 15%);
      transition: all .3s;
      border-radius: 10rem;
      z-index: -1;
    }

    &:hover {
      color: #fff;

      &:before {
        width: 100%;
      }
    }
  }
}
</style>
