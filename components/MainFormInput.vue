<template>
  <div class="mb-5">
    <label :for="id" class="text-primary-text block mb-3">{{ label }}</label>

    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      v-model="model"
      class="w-full border border-solid border-line-border rounded-2xl text-tertiary-text py-3 px-5 focus:outline-none focus:border-primary focus:shadow-md"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  modelValue: { type: String, required: true },
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>
