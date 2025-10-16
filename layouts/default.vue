<template>
  <div class="flex min-h-screen">
    <aside
      class="fixed lg:static top-0 left-0 h-screen w-64 bg-white border-r border-line-border transform transition-transform duration-300 z-40"
      :class="
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      "
    >
      <h1 class="font-bold text-3xl text-secondary-text py-5 px-10">Admin</h1>
      <div class="w-fit mx-auto">
        <ul class="gap-2 flex flex-col my-4">
          <li>
            <NuxtLink to="#">
              <div
                class="bg-primary-bg text-primary font-medium px-4 py-2 rounded-full flex gap-2"
              >
                <i class="material-icons mr-2">groups</i>
                <span>Employee List</span>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">
              <div class="text-unselected font-medium px-4 py-2 flex gap-2">
                <i class="material-icons mr-2">search</i>
                <span>Search Employee</span>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">
              <div class="text-unselected font-medium px-4 py-2 flex gap-2">
                <i class="material-icons mr-2">account_tree</i>
                <span>Work Unit</span>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">
              <div class="text-unselected font-medium px-4 py-2 flex gap-2">
                <i class="material-icons mr-2">person_add</i>
                <span>Add Employee</span>
              </div>
            </NuxtLink>
          </li>
        </ul>
        <button
          class="text-unselected font-medium px-4 py-2 flex gap-2"
          @click.prevent="handleLogout"
          v-if="isAuthenticated"
        >
          <i class="material-icons mr-2">logout</i>
          Logout
        </button>
      </div>
    </aside>

    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
      @click="isSidebarOpen = false"
    ></div>

    <div class="flex-1 flex flex-col overflow-x-hidden">
      <header
        class="flex justify-between items-center gap-4 border-b border-line-border py-5 px-6 lg:px-10 bg-white z-20"
      >
        <div class="flex items-center gap-4">
          <button class="lg:hidden focus:outline-none" @click="toggleSidebar">
            <i class="material-icons text-secondary-text text-3xl">menu</i>
          </button>
          <h1 class="font-semibold text-2xl lg:text-3xl text-secondary-text">
            Employee List
          </h1>
        </div>

        <nav class="flex-1 max-w-md ml-auto">
          <div class="relative w-full">
            <i
              class="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-tertiary-text"
              >search</i
            >
            <input
              class="w-full bg-background rounded-full text-tertiary-text py-3 pl-12 pr-6 focus:outline-none focus:border-primary focus:shadow-md"
              type="text"
              id="name"
              placeholder="Search by name"
            />
          </div>
        </nav>
      </header>
      <main class="flex-1 max-w-full overflow-x-hidden">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
interface User {
  name: string;
  email: string;
}

const { isAuthenticated, user, logout } = useSanctumAuth<User>();

function handleLogout() {
  logout();
}
const isSidebarOpen = ref(false);
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<style scoped>
aside {
  transition: transform 0.3s ease;
}
</style>
