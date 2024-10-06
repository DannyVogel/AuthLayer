<script setup lang="ts">
const { myLayer } = useAppConfig();

const isOpen = ref(false);
</script>

<template>
  <div>
    <h1>Hello World!</h1>
    <pre>{{ myLayer }}</pre>
  </div>
  <UButton @click="isOpen = true">Click me</UButton>
  <LogIn v-model="isOpen" :type="LoginType.OAUTH" />
</template>
