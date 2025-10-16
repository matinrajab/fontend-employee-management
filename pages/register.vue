<template>
  <div class="flex">
    <div class="w-1/2 h-dvh mx-auto flex flex-col justify-center items-center">
      <div class="w-2/3">
        <h1 class="text-3xl font-bold text-primary-text mb-2">Sign up to</h1>
        <h2 class="text-tertiary-text text-xl font-medium mb-14">
          Employee Management System
        </h2>
        <form @submit.prevent="handleRegister">
          <div class="mb-5">
            <MainFormInput
              id="name"
              label="Name"
              type="text"
              v-model="form.name"
              placeholder="Your Name"
            />
          </div>
          <div class="mb-5">
            <MainFormInput
              id="email"
              label="Email"
              type="email"
              v-model="form.email"
              placeholder="example@email.com"
            />
          </div>
          <div class="mb-5">
            <MainFormInput
              id="password"
              label="Password"
              type="password"
              v-model="form.password"
              placeholder="********"
            />
          </div>
          <div class="mb-5">
            <MainFormInput
              id="password-confirm"
              label="Password Confirmation"
              type="password"
              v-model="form.password_confirmation"
              placeholder="********"
            />
          </div>
          <MainButton text="Sign up" />
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
useHead({
  title: "Register",
});

definePageMeta({
  layout: false,
  middleware: ["sanctum:guest"],
});

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const { refreshIdentity } = useSanctumAuth();

async function handleRegister() {
  try {
    await useSanctumFetch("/api/register", {
      method: "POST",
      body: form.value,
    });
  } catch (err) {
    console.log(err);
  }

  await refreshIdentity();
  return navigateTo("/employees");
}
</script>
