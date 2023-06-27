<template>
    <div class="text-block">
        <h2 class="block-title">{{ title }}</h2>
        <p class="block-text">{{ text }}</p>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            title: String,
            text: String
        }
    }
</script>

<style lang="scss" scoped>
.text-block {
  text-align: center;
  margin-bottom: 20px;

  .block-title {
    font-size: 24px;
    font-weight: bold;
  }

  .block-text {
    font-size: 16px;
  }
}
</style>