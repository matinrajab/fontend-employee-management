<template>
  <div class="border border-line-border rounded-2xl mb-4">
    <div
      class="flex justify-between items-center px-5 py-3 cursor-pointer rounded-t-2xl"
      @click="toggleExpand"
    >
      <h2 class="text-lg font-semibold text-secondary-text">
        {{ unit.name }}
      </h2>
      <i class="material-icons text-secondary-text">
        {{ isExpanded ? "expand_less" : "expand_more" }}
      </i>
    </div>

    <transition name="expand">
      <div
        v-if="isExpanded"
        class="p-5 border-t border-line-border bg-background"
      >
        <WorkUnitTable :unitId="unit.id" />
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  unit: Object,
});

const isExpanded = ref(false);
function toggleExpand() {
  isExpanded.value = !isExpanded.value;
}
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
}
.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}
</style>
