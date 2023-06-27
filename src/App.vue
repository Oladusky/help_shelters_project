<template>
    <Header/>
    <router-view/>
</template>

<script lang="ts">
    import Header from '@/components/Header.vue'
    import { defineComponent, onMounted, ref, watch } from 'vue'
    import { useMainStore } from '@/store/main'
    export default defineComponent({
        components: { Header },
        setup () {
            const mainStore = useMainStore()
            onMounted(() => {
                mainStore.setDevice()
              console.log(mainStore.isPC, mainStore.isMobile)
            })
            return {}
        }
    })
</script>

<style scoped>
@import "@/styles/variables.scss";
@import "@/styles/devices.scss";
</style>
