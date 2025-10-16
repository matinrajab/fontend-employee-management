<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
  >
    <div class="bg-white rounded-2xl shadow-xl p-6 w-80 animate-fade-in">
      <h2 class="text-lg font-semibold text-primary-text mb-3">
        {{ title }}
      </h2>
      <p class="text-sm text-secondary-text mb-6">{{ message }}</p>

      <div class="flex justify-end gap-3">
        <button
          @click="$emit('cancel')"
          class="px-4 py-1.5 text-sm rounded-lg border border-line-border"
        >
          Batal
        </button>
        <button
          @click="$emit('confirm')"
          class="px-4 py-1.5 text-sm rounded-lg bg-danger text-white"
        >
          Hapus
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean;
  title?: string;
  message?: string;
}>();

defineEmits(["confirm", "cancel"]);
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fade-in {
  animation: fade-in 0.2s ease-out;
}
</style>
