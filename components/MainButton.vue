<template>
  <button
    class="w-full bg-primary text-white py-3 rounded-2xl cursor-pointer shadow-md"
    type="submit"
  >
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true },
});
</script>
