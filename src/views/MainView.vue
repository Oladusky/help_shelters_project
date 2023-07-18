<template>
    <div class="container">
        <slot/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'MainView',
    })
</script>

<style scoped lang="scss">
.container {
  margin: 0 10%;
  @include mobile {
    margin: 0 5px;
  }
}
</style>