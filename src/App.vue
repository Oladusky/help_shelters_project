<template>
    <Header/>
    <router-view/>
</template>

<script lang="ts">
    import Header from '@/components/Header.vue'
    import { defineComponent, onMounted } from 'vue'
    import { useMainStore } from '@/store/main'
    import Footer from '@/components/Footer.vue'
    export default defineComponent({
        components: { Footer, Header },
        setup () {
            const mainStore = useMainStore()
            onMounted(() => {
                mainStore.setDevice()
            })
            return {}
        }
    })
</script>

<style scoped>
@import "@/styles/variables.scss";
@import "@/styles/devices.scss";
</style>
