<template>
  <div class="flex">
    <aside
      class="font-medium text-unselected h-screen border-r border-solid border-line-border w-72"
    >
      <h1 class="font-bold text-3xl text-secondary-text py-5 px-10">Admin</h1>
      <div class="w-fit mx-auto">
        <ul class="gap-2 flex flex-col my-4">
          <li>
            <NuxtLink to="#">
              <div
                class="bg-primary-bg text-primary px-4 py-2 rounded-full flex gap-2"
              >
                <i class="material-icons mr-2">groups</i>
                <span>Employee List</span>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">
              <div class="px-4 py-2 flex gap-2">
                <i class="material-icons mr-2">search</i>
                <span>Search Employee</span>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">
              <div class="px-4 py-2 flex gap-2">
                <i class="material-icons mr-2">account_tree</i>
                <span>Work Unit</span>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">
              <div class="px-4 py-2 flex gap-2">
                <i class="material-icons mr-2">person_add</i>
                <span>Add Employee</span>
              </div>
            </NuxtLink>
          </li>
        </ul>
        <button
          class="px-4 py-2 flex gap-2"
          @click.prevent="handleLogout"
          v-if="isAuthenticated"
        >
          <i class="material-icons mr-2">logout</i>
          Logout
        </button>
      </div>
    </aside>
    <div>
      <header
        class="flex justify-between items-center border-b border-solid border-line-border py-5 px-10"
      >
        <h1 class="font-semibold text-3xl text-secondary-text">
          Employee List
        </h1>
        <nav>
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
      <main>
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
</script>
