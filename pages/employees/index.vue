<template>
  <div class="bg-background h-screen">
    <p class="text-3xl bold underline">Employee</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["sanctum:auth"],
});
</script>
