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
  const currentPage = ref(1);

  async function addEmployee(formData: FormData) {
    try {
      isLoading.value = true;
      await useSanctumFetch("/api/employee", {
        method: "POST",
        body: formData,
      });
      await getEmployees(currentPage.value);
      navigateTo("/employees");
    } catch (error) {
      console.error("Gagal menambahkan pegawai:", error);
    } finally {
      isLoading.value = false;
    }
  }

  async function getEmployees(page = 1) {
    try {
      isLoading.value = true;
      const response = await useSanctumFetch<EmployeeResponse>(
        `/api/employees?page=${page}`
      );
      data.value = response.data.value;
      currentPage.value = page;
    } finally {
      isLoading.value = false;
    }
  }

  function changePage(page: number) {
    if (page < 1 || (data.value && page > data.value.meta.last_page)) return;
    getEmployees(page);
  }

  async function deleteEmployee(id: number) {
    try {
      isLoading.value = true;
      await useSanctumFetch(`/api/employee/${id}`, {
        method: "DELETE",
      });

      if (data.value) {
        data.value.data = data.value.data.filter((emp) => emp.id !== id);
        data.value.meta.total -= 1;
      }

      if (data.value?.data.length == 0) {
        changePage(currentPage.value - 1);
      }
    } catch (error) {
      console.error("Gagal menghapus pegawai: ", error);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    data,
    isLoading,
    currentPage,
    addEmployee,
    getEmployees,
    changePage,
    deleteEmployee,
  };
});
