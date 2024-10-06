<script setup lang="ts"></script>

<template>
  <div>
    <UButton icon="i-simple-icons:github">
      <NuxtLink to="/api/auth/github" external>Login with GitHub </NuxtLink>
    </UButton>
    <UButton icon="i-simple-icons:google">
      <NuxtLink to="/api/auth/google" external>Login with Google </NuxtLink>
    </UButton>
  </div>
</template>
