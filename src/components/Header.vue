<template>
    <MainView v-if="routes">
        <header v-if="mainStore.isPC" class="header">
            <div class="header_logo">
                <img src="/icons8-pets-100.png" alt="Логотип"/>
            </div>
            <div class="header_links">
                <router-link v-for="link in routes" :to="{ name: link.name, query: {...route.query} }"
                             class="header_links_link"
                >
                    {{ links[link.name] }}
                </router-link>
            </div>
            <div class="header_langs">
                <div v-for="lang in languages" :key="lang" class="header_langs_lang" @click="changeLanguage(lang)">
                    {{ lang }}
                </div>
            </div>
        </header>
    </MainView>
    <header v-if="mainStore.isMobileOrTablet && routes" class="header-mob">
        <div class="header-mob_top">
            <div class="header-mob_logo">
                <img src="/icons8-pets-100.png" alt="Логотип"/>
            </div>
            <div class="header-mob_burger">
                <img v-if="!showMobMenu"
                     :src="`/help_shelters_project/icons8-menu-squared-50.png`" alt="Логотип"
                     @click="showMobMenu = true"
                />
                <img v-else
                     :src="`/help_shelters_project/icons8-cross-50.png`" alt="Логотип"
                     @click="showMobMenu = false"
                />
            </div>
        </div>
        <div v-if="showMobMenu" class="header-mob_bottom">
            <div class="header-mob_links">
                <template v-for="link in routes">
                    <router-link :to="{ name: link.name, query: {...route.query} }"
                                 class="header-mob_links_link"
                                 @click="showMobMenu = false"
                    >
                        {{ links[link.name] }}
                    </router-link>
                    <LeftNav 
                        v-if="link.name === 'shelters' && shelters"
                        :links="shelters.shelters"
                        @clicked="showMobMenu = false"
                    />
                    <div v-if="link.name === 'vets'"  class="header-mob_links_vets">
                        <div v-for="sector in sectors" class="header-mob_links_vets_link">
                            <p>{{ sector.name }}</p>
                            <LeftNav v-if="getClinicsById(sector.id).length"
                                     :links="getClinicsById(sector.id)"
                                     path="vets"
                                     :show-border="false"
                                     @clicked="showMobMenu = false"
                            />
                        </div>
                    </div>
                </template>
            </div>
            <div class="header-mob_langs">
                <div v-for="lang in languages"
                     :key="lang"
                     class="header-mob_langs_lang"
                     @click="changeLanguage(lang), showMobMenu = false"
                >
                    {{ lang }}
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
    import { ref, watch } from 'vue'
    import { Language } from '@/types/main'
    import router, { routes } from '../router.js'
    import { useMainStore } from '@/store/main'
    import MainView from '@/views/MainView.vue'
    import { useRoute, useRouter } from 'vue-router'
    import { useSmallDataObjStore } from '@/store/smallDataObj'
    import LeftNav from '@/components/common/LeftNav.vue'
    import { useSheltersStore } from '@/store/shelters'
    import { useVetClinicsStore } from '@/store/vetClinicsInfo'
    import { useCommonDataStore } from '@/store/commonData'

    export default {
        components: { LeftNav, MainView },
        setup () {
            const mainStore = useMainStore()
            const smallDataStore = useSmallDataObjStore()
            const sheltersStore = useSheltersStore()
            const vetsStore = useVetClinicsStore()
            const commonStore = useCommonDataStore()

            const languages = ref<Language[]>(['en', 'rus', 'rom'])
            const router = useRouter()
            const route = useRoute()

            const showMobMenu = ref(false)
            const lang = ref(route.query.lang)
            const links = ref('')
            let shelters = ref(sheltersStore.content[route.query.lang])
            let vetsList = ref(vetsStore.content[route.query.lang])
            let sectors = ref(commonStore.content[route.query.lang]?.sectors)

            watch(() => route.query.lang, (newValue) => {
                lang.value = newValue
                links.value = smallDataStore.content[lang.value]
                shelters.value = sheltersStore.content[route.query.lang]
                vetsList.value = vetsStore.content[route.query.lang]
                sectors.value = commonStore.content[route.query.lang]?.sectors
            })

            const getClinicsById = (id: string) => {
                return vetsList.value.vets.filter(clinic => {
                    return clinic.sector.id === id
                })
            }

            function changeLanguage (lang: Language) {
                mainStore.changeLanguage(lang)
                const currentRoute = router.currentRoute.value
                const { path, params, query } = currentRoute
                const updatedQuery = { ...query, lang: lang }
                router.push({ path, params, query: updatedQuery })
            }

            return {
                languages,
                changeLanguage,
                mainStore,
                routes,
                route,
                showMobMenu,
                links,
                shelters,
                sectors,
                getClinicsById
            }
        }
    }
</script>


<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  &_logo {
    width: 80px;

    & img {
      width: 100%;
    }
  }

  &_links {
    text-transform: uppercase;
    font-weight: 600;

    &_link {
      padding-right: 40px;

      &:hover {
        color: $main-green;
      }
    }

  }

  &_langs {
    display: flex;

    &_lang {
      padding: 5px;
      margin-right: 20px;
      cursor: pointer;
      font-weight: 500;

      &:hover {
        color: $white;
        background: $main-green;
        border-radius: 10%;
      }
    }

  }
}

.header-mob {
  padding: 10px;
  position: relative;
  z-index: 999;

  &_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &_burger {
    width: 40px;

    & img {
      width: 100%;
      border-radius: 35%;
    }
  }

  &_logo {
    width: 64px;

    & img {
      width: 100%;
    }
  }

  &_bottom {
    width: 98vw;
    height: 100vh;
    left: 0;
    position: absolute;
    background: $white;
    z-index: 999;
  }

  &_links {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-weight: 600;
    margin-left: 10px;

    &_link {
      margin-bottom: 15px;
    }

    &_vets {
      margin-left: 10px;
      &_link {
        p {
          font-size: 14px;
          color: $main-green;
          margin-top: 0;
        }
      }
    }
  }

  &_langs {
    display: flex;
    margin-left: 10px;

    &_lang {
      padding: 5px;
      margin-right: 20px;
      cursor: pointer;
      font-weight: 500;

      &:hover {
        color: $white;
        background: $main-green;
        border-radius: 10%;
      }
    }

  }
}
</style>