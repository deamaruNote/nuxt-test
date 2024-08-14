<script setup lang="ts">
const isActive = ref(true);
const errorClass = ref("text-danger");
</script>

<template>
  <Nav />
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>
