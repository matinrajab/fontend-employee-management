<template>
  <div>
    <div v-if="isLoading"><Loading /></div>

    <div v-else>
      <MainTable
        :employees="employees"
        :meta="meta"
        :changePage="fetchEmployees"
        :afterDelete="afterDelete"
      />
    </div>
  </div>
</template>

<script setup>
import axiosClient from "~/axios";

const props = defineProps({
  unitId: Number,
});

const employees = ref([]);
const meta = ref(null);
const isLoading = ref(true);

async function fetchEmployees(page = 1) {
  try {
    isLoading.value = true;
    await axiosClient
      .get(`/api/work-unit/${props.unitId}?page=${page}`)
      .then((response) => {
        employees.value = response.data.data;
        meta.value = response.data.meta;
      });
  } finally {
    isLoading.value = false;
  }
}

async function afterDelete() {
  fetchEmployees(
    employees.value.length == 1
      ? meta.value.current_page - 1
      : meta.value.current_page
  );
}

fetchEmployees();
</script>
