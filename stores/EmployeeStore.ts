import { defineStore } from "pinia";
import { ref } from "vue";

interface Employee {
  id: number;
  nip: string | null;
  name: string;
  birth_place: string | null;
  address: string | null;
  birth_date: string | null;
  gender: string | null;
  golongan: string | null;
  eselon: string | null;
  position: string | null;
  work_place: string | null;
  religion: string | null;
  work_unit: string | null;
  phone_number: string | null;
  npwp: string | null;
  photo: string | null;
}

interface PaginationMeta {
  current_page: number;
  last_page: number;
  total: number;
}

interface EmployeeResponse {
  data: Employee[];
  meta: PaginationMeta;
  links: Record<string, any>;
}

export const useEmployeeStore = defineStore("employeeStore", () => {
  const data = ref<EmployeeResponse | null>(null);
  const isLoading = ref(false);

  async function getEmployees(page = 1) {
    isLoading.value = true;

    const response = await useSanctumFetch<EmployeeResponse>(
      `/api/employees?page=${page}`
    );
    data.value = response.data.value;

    isLoading.value = false;
  }

  return { data, isLoading, getEmployees };
});
