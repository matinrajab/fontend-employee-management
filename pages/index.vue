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
            <label class="text-primary-text block mb-3" for="name"
              >Email
            </label>
            <input
              v-model="form.email"
              class="w-full border border-solid border-line-border rounded-2xl text-tertiary-text py-3 px-5 focus:outline-none focus:border-primary focus:shadow-md"
              type="email"
              name="email"
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
              name="password"
              id="password"
              placeholder="********"
            />
          </div>
          <button
            class="w-full bg-primary text-white py-3 rounded-2xl cursor-pointer shadow-md"
            type="submit"
          >
            Sign in
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

<script setup>
// definePageMeta({
//   layout: false,
// });

useHead({
  title: "Login",
});

definePageMeta({
  middleware: "auth",
});

const { login } = useSanctumAuth();

const form = ref({
  email: "",
  password: "",
});

async function handleSubmit() {
  try {
    await login(form.value);
    navigateTo("/employees");
  } catch (error) {
    console.error("Login gagal: ", error);
  }
}
</script>
