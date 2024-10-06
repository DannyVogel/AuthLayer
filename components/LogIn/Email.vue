<script setup lang="ts">
const items = [
  {
    key: "login",
    label: "Login",
    description: "Login to your account.",
  },
  {
    key: "signup",
    label: "Sign Up",
    description: "Sign up for a new account.",
  },
];
const state = reactive({
  email: "",
  password: "",
});
const isLoading = ref(false);
const error = ref("");

const onSubmit = async (key: string) => {
  error.value = "";
  isLoading.value = true;
  if (key === "login") {
    // error.value = await signIn(state.email, state.password);
  } else {
    // error.value = await signUp(state.email, state.password);
  }
  if (!error.value) navigateTo("/user/dashboard");
  isLoading.value = false;
};
</script>
<template>
  <UTabs :items="items" class="w-full p-2">
    <template #item="{ item }">
      <UCard @submit.prevent="onSubmit(item.key)">
        <template #header>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {{ item.description }}
          </p>
        </template>

        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>
        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" />
        </UFormGroup>

        <template #footer>
          <UButton
            type="submit"
            color="black"
            :loading="isLoading"
            :disabled="isLoading"
          >
            {{ item.key === "login" ? "Login" : "Sign Up" }}
          </UButton>
          <p class="mt-2 text-sm text-red-500">{{ error }}</p>
        </template>
      </UCard>
    </template>
  </UTabs>
</template>
