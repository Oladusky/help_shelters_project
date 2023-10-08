<template>
    <MainView class="vets">
        <LeftNav :links="content.vets"/>
    </MainView>
</template>

<script lang="ts">
    import LeftNav from '@/components/common/LeftNav.vue'
    import { useMainStore } from '@/store/main'
    import { useRoute } from 'vue-router'
    import { useVetClinicsStore } from '@/store/vetClinicsInfo'
    import { ref, watch } from 'vue'
    import MainView from '@/views/MainView.vue'

    export default {
        components: { MainView, LeftNav },
        setup () {
            const mainStore = useMainStore()
            const vetsStore = useVetClinicsStore()
            const route = useRoute()
            const vetId = route.params.id ?? '0'

            const isPC = ref(mainStore.isPC)
            let content = ref(vetsStore.content[route.query.lang])
            let vetInfo = ref(content.value.vets && content.value.vets.find(vet => {
                return vet.id.toString() === vetId
            }))

            watch(() => route.query.lang, () => {
                content.value = vetsStore.content[route.query.lang]
            })
            watch(() => route.params.id, () => {
                vetInfo.value = content.value.vets && content.value.vets.find(vet => {
                    return vet.id.toString() === vetId
                })
            })

            // const blocksId = vetInfo.value.bankDetailsArr.map((elem) => elem.id)

            return {
                content
            }
        }
    }
</script>