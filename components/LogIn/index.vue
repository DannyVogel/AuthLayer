<script setup lang="ts">
defineProps({
  type: {
    type: String as PropType<LoginType>,
    required: true,
  },
});
const isOpen = defineModel<boolean>();
</script>
<template>
  <UModal v-model="isOpen">
    <LogInEmail v-if="type === LoginType.EMAIL" />
    <LogInOAuth v-if="type === LoginType.OAUTH" />
  </UModal>
</template>
