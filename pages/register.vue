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
            <label class="text-primary-text block mb-3" for="name">Name </label>
            <input
              v-model="form.name"
              class="w-full border border-solid border-line-border rounded-2xl text-tertiary-text py-3 px-5 focus:outline-none focus:border-primary focus:shadow-md"
              type="text"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div class="mb-5">
            <label class="text-primary-text block mb-3" for="name"
              >Email
            </label>
            <input
              v-model="form.email"
              class="w-full border border-solid border-line-border rounded-2xl text-tertiary-text py-3 px-5 focus:outline-none focus:border-primary focus:shadow-md"
              type="email"
              id="email"
              placeholder="example@email.com"
            />
          </div>
          <div class="mb-5">
            <label class="text-primary-text block mb-3" for="name"
              >Password
            </label>
            <input
              v-model="form.password"
              class="w-full border border-solid border-line-border rounded-2xl text-tertiary-text py-3 px-5 focus:outline-none focus:border-primary focus:shadow-md"
              type="password"
              id="password"
              placeholder="********"
            />
          </div>
          <div class="mb-5">
            <label class="text-primary-text block mb-3" for="name"
              >Password Confirmation
            </label>
            <input
              v-model="form.password_confirmation"
              class="w-full border border-solid border-line-border rounded-2xl text-tertiary-text py-3 px-5 focus:outline-none focus:border-primary focus:shadow-md"
              type="password"
              id="password"
              placeholder="********"
            />
          </div>
          <button
            class="w-full bg-primary text-white py-3 rounded-2xl cursor-pointer shadow-md"
            type="submit"
          >
            Sign up
          </button>
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
