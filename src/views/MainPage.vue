<template>
    <MainBanner/>
    <MainText/>
    <LargeCards/>
    <SocialLinks/>
    <Footer/>
</template>

<script lang="ts">
    import MainBanner from '@/components/main-page/MainBanner.vue'
    import MainText from '@/components/main-page/MainText.vue'
    import LargeCards from '@/components/common/LargeCards.vue'
    import SocialLinks from '@/components/main-page/SocialLinks.vue'
    import Footer from '@/components/Footer.vue'
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'MainPage',
        components: { MainBanner, LargeCards, SocialLinks, Footer, MainText },
        setup () {}
    })
</script>