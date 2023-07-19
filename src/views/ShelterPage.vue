<template>
    <MainView class="shelters">
        <LeftNav :links="content.shelters"/>
        <div class="shelters_shelter">
            <h2>{{shelterInfo.title}}</h2>
            <div class="shelters_shelter_amount">
                <span class="shelters_shelter_amount">{{shelterInfo.amount}}</span>
                <span class="shelters_shelter_number">{{shelterInfo.number}}</span>
            </div>
            <div class="shelters_shelter_amount" v-html="shelterInfo.workers"/>
            <div class="shelters_shelter_amount" v-html="shelterInfo.textLarge"/>
            <div class="shelters_shelter_amount" v-html="shelterInfo.location"/>
            <div class="shelters_shelter_gallery">images</div>
        </div>
    </MainView>
</template>

<script lang="ts">
    import { ref, watch } from 'vue'
    import { useMainStore } from '@/store/main'
    import { useRoute } from 'vue-router'
    import MainView from '@/views/MainView.vue'
    import LeftNav from '@/components/common/LeftNav.vue'
    import { useSheltersStore } from '@/store/shelters'

    export default {
        components: { LeftNav, MainView },
        setup () {
            const sheltersStore = useSheltersStore()
            const mainStore = useMainStore()
            const route = useRoute()
            let content = ref(sheltersStore.content[route.query.lang])
            let shelterInfo = ref(content.value.shelters && content.value.shelters.find(shelter => {
                return shelter.id.toString() === route.params.id
            }))

            watch(() => route.query.lang, () => {
                content.value = sheltersStore.content[route.query.lang]
            })
            watch(() => route.params.id, () => {
                shelterInfo.value = content.value.shelters && content.value.shelters.find(shelter => {
                    return shelter.id.toString() === route.params.id
                })
            })
            return {
                content,
                mainStore,
                shelterInfo
            }
        }
    }
</script>

<style lang="scss" scoped>
.shelters {
  display: flex;
  &_shelter {
    margin-left: 50px;
    & > div {
      margin-bottom: 30px;
      &::v-deep(span:first-child) {
        font-size: 18px;
        font-weight: 500;
        color: $main-green;
      }
    }
  }
}
</style>