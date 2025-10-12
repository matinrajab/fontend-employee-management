<template>
  <div class="flex">
    <aside class="h-screen border-r border-solid border-line-border">
      <ul>
        <li><NuxtLink to="#">Employees</NuxtLink></li>
        <li><NuxtLink to="#">Work Units</NuxtLink></li>
        <li v-if="user">Udh</li>
        <li v-if="!user">Blm</li>
        <li v-if="user">{{ user.name }}</li>
      </ul>
      <button @click.prevent="handleLogout">Logout</button>
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
interface MyCustomUser {
  name: string;
  email: string;
}

const user = useSanctumUser<MyCustomUser>();

const { logout } = useSanctumAuth();

function handleLogout() {
  logout();
}
</script>
