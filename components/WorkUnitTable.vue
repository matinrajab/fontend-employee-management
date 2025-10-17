<template>
  <div>
    <div v-if="isLoading"><Loading /></div>

    <div v-else>
      <MainTable :employees="employees" :meta="meta" @change="changePage" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  unitId: Number,
});

const employees = ref([]);
const meta = ref(null);
const isLoading = ref(true);

async function fetchEmployees(page = 1) {
  try {
    isLoading.value = true;
    const response = await useSanctumFetch(
      `/api/work-unit/${props.unitId}?page=${page}`
    );
    employees.value = response.data.value.data;
    meta.value = response.data.value.meta;
  } finally {
    isLoading.value = false;
  }
}

function changePage(page) {
  if (page < 1 || page > meta.value.last_page) return;
  fetchEmployees(page);
}

onMounted(() => {
  fetchEmployees();
});
</script>
