<template>
  <div class="flex">
    <aside class="h-screen border-r border-solid border-line-border">
      <ul>
        <li><NuxtLink to="#">Employees</NuxtLink></li>
        <li><NuxtLink to="#">Work Units</NuxtLink></li>
        <li v-if="isAuthenticated">Udh</li>
        <li v-if="!isAuthenticated">Blm</li>
        <li v-if="user">{{ user.email }}</li>
      </ul>
      <button @click.prevent="handleLogout" v-if="isAuthenticated">
        Logout
      </button>
    </aside>
    <div class="w-full">
      <header
        class="flex justify-between border-b border-solid border-line-border"
      >
        <h1>Nama Halaman</h1>
        <nav>
          <ul class="flex gap-6">
            <li>Fitur Pencarian</li>
            <li>Profil</li>
          </ul>
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
