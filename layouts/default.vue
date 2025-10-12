<template>
  <div class="flex">
    <aside class="h-screen border-r border-solid border-line-border">
      <ul>
        <li><NuxtLink to="#">Employees</NuxtLink></li>
        <li><NuxtLink to="#">Work Units</NuxtLink></li>
        <li><NuxtLink to="#">Logout</NuxtLink></li>
      </ul>
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

<script setup></script>
