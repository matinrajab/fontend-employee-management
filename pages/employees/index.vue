<script setup lang="ts">
import { useEmployeeStore } from "~/stores/EmployeeStore";

definePageMeta({
  // layout: false,
  middleware: ["sanctum:auth"],
});

const employeeStore = useEmployeeStore();
const { isLoading, data, currentPage } = storeToRefs(employeeStore);

await useAsyncData("employees", () => employeeStore.getEmployees());
</script>

<template>
  <div class="bg-background">
    <h1 class="p-6 text-primary-text font-medium text-2xl">Employees table</h1>

    <div v-if="isLoading">
      <p>Loading...</p>
    </div>

    <div v-else class="px-6 pb-6">
      <div class="overflow-x-auto rounded-3xl shadow-sm">
        <table
          class="table-auto bg-white min-w-full border-collapse rounded-3xl"
        >
          <thead>
            <tr
              class="border-b border-solid border-line-border text-tertiary-text"
            >
              <th class="font-normal px-2 py-1 text-xs">No</th>
              <th class="font-normal px-2 py-1 text-xs">NIP</th>
              <th class="font-normal px-2 py-1 text-xs">Nama</th>
              <th class="font-normal px-2 py-1 text-xs">Tempat Lahir</th>
              <th class="font-normal px-2 py-1 text-xs">Alamat</th>
              <th class="font-normal px-2 py-1 text-xs">Tgl Lahir</th>
              <th class="font-normal px-2 py-1 text-xs">L/P</th>
              <th class="font-normal px-2 py-1 text-xs">Gol</th>
              <th class="font-normal px-2 py-1 text-xs">Eselon</th>
              <th class="font-normal px-2 py-1 text-xs">Jabatan</th>
              <th class="font-normal px-2 py-1 text-xs">Tempat Tugas</th>
              <th class="font-normal px-2 py-1 text-xs">Agama</th>
              <th class="font-normal px-2 py-1 text-xs">Unit Kerja</th>
              <th class="font-normal px-2 py-1 text-xs">No. HP</th>
              <th class="font-normal px-2 py-1 text-xs">NPWP</th>
              <th class="font-normal px-2 py-1 text-xs text-center" colspan="2">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(employee, index) in data?.data || []"
              :key="employee.id"
              class="border-b border-solid border-line-border"
            >
              <td class="px-2 py-1 text-xs">
                {{ (currentPage - 1) * data.meta.per_page + index + 1 }}
              </td>
              <td class="px-2 py-1 text-xs">{{ employee.nip }}</td>
              <td class="px-2 py-1 text-xs">{{ employee.name }}</td>
              <td class="px-2 py-1 text-xs">{{ employee.birth_place }}</td>
              <td class="px-2 py-1 text-xs">{{ employee.address }}</td>
              <td class="px-2 py-1 text-xs">{{ employee.birth_date }}</td>
              <td class="px-2 py-1 text-xs">{{ employee.gender }}</td>
              <td class="px-2 py-1 text-xs">{{ employee.golongan }}</td>
              <td class="px-2 py-1 text-xs">{{ employee.eselon }}</td>
              <td class="px-2 py-1 text-xs">{{ employee.position }}</td>
              <td class="px-2 py-1 text-xs">{{ employee.work_place }}</td>
              <td class="px-2 py-1 text-xs">{{ employee.religion }}</td>
              <td class="px-2 py-1 text-xs">{{ employee.work_unit }}</td>
              <td class="px-2 py-1 text-xs">{{ employee.phone_number }}</td>
              <td class="px-2 py-1 text-xs">{{ employee.npwp }}</td>
              <td class="px-2 py-1 text-xs">
                <NuxtLink to="#">Edit</NuxtLink>
              </td>
              <td class="px-2 py-1 text-xs text-danger">
                <NuxtLink to="#">Delete</NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        v-if="data?.meta"
        class="flex justify-center items-center gap-2 mt-6 text-sm text-secondary-text flex-wrap"
      >
        <button
          class="px-3 py-1 border rounded-lg disabled:opacity-50"
          :disabled="currentPage === 1"
          @click="employeeStore.changePage(currentPage - 1)"
        >
          Prev
        </button>

        <button
          v-for="page in data.meta.last_page"
          :key="page"
          class="px-3 py-1 border rounded-lg transition"
          :class="{
            'bg-primary text-white': currentPage === page,
            'hover:bg-gray-100': currentPage !== page,
          }"
          @click="employeeStore.changePage(page)"
        >
          {{ page }}
        </button>

        <button
          class="px-3 py-1 border rounded-lg disabled:opacity-50"
          :disabled="currentPage === data.meta.last_page"
          @click="employeeStore.changePage(currentPage + 1)"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
