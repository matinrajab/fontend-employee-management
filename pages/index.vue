<template>
  <div class="flex">
    <div class="w-1/2 h-dvh mx-auto flex flex-col justify-center items-center">
      <div class="w-2/3">
        <h1 class="text-3xl font-bold text-primary-text mb-2">Sign in to</h1>
        <h2 class="text-tertiary-text text-xl font-medium mb-14">
          Employee Management System
        </h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-5">
            <MainFormInput
              id="email"
              label="Email"
              type="email"
              v-model="form.email"
              placeholder="example@email.com"
            />
            <span class="text-danger" v-if="errors.email">
              {{ errors.email[0] }}
            </span>
          </div>
          <div class="mb-5">
            <MainFormInput
              id="password"
              label="Password"
              type="password"
              v-model="form.password"
              placeholder="********"
            />
            <span class="text-danger" v-if="errors.password">
              {{ errors.password[0] }}
            </span>
          </div>
          <MainButton text="Sign in" />
        </form>
      </div>
    </div>

    <div class="w-1/2 h-dvh p-4">
      <div
        class="bg-[url(/assets/images/bg-login.jpg)] bg-cover h-full rounded-3xl"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FetchError } from "ofetch";
import MainButton from "~/components/MainButton.vue";
import MainFormInput from "~/components/MainFormInput.vue";

useHead({
  title: "Login",
});

definePageMeta({
  layout: false,
  middleware: ["sanctum:guest"],
});

const { login } = useSanctumAuth();

const form = ref({
  email: "",
  password: "",
});

interface ValidationError {
  [key: string]: string[];
}

const errors = ref<ValidationError>({});

async function handleSubmit() {
  try {
    await login(form.value);
  } catch (e) {
    if (e instanceof FetchError && e.response?.status === 422) {
      errors.value = e.response._data.errors;
    }
  }
}
</script>
