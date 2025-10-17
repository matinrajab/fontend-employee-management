import { defineStore } from "pinia";
import { ref } from "vue";

export const useEmployeeStore = defineStore("employeeStore", () => {
  const employees = ref([]);
  const meta = ref(null);
  const isLoading = ref(true);

  async function addEmployee(formData) {
    try {
      isLoading.value = true;
      await useSanctumFetch("/api/employee", {
        method: "POST",
        body: formData,
      });
      await getEmployees(meta.value.current_page);
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
      const response = await useSanctumFetch(`/api/employees?page=${page}`);
      employees.value = response.data.value.data;
      meta.value = response.data.value.meta;
    } finally {
      isLoading.value = false;
    }
  }

  function changePage(page) {
    if (page < 1 || (employees.value && page > meta.value.last_page)) return;
    getEmployees(page);
  }

  async function getEmployeeById(id) {
    try {
      isLoading.value = true;
      const response = await useSanctumFetch(`/api/employee/${id}`);
      return response.data.value.data;
    } catch (error) {
      console.error("Gagal mengambil data pegawai:", error);
      return null;
    } finally {
      isLoading.value = false;
    }
  }

  async function updateEmployee(id, formData) {
    try {
      isLoading.value = true;
      await useSanctumFetch(`/api/employee/${id}`, {
        method: "PUT",
        body: formData,
      });

      await getEmployees(meta.value.current_page);
      navigateTo("/employees");
    } catch (error) {
      console.error("Gagal mengupdate pegawai:", error);
    } finally {
      isLoading.value = false;
    }
  }

  async function deleteEmployee(id) {
    try {
      isLoading.value = true;
      await useSanctumFetch(`/api/employee/${id}`, {
        method: "DELETE",
      });

      if (employees.value) {
        employees.value = employees.value.filter((emp) => emp.id !== id);
        meta.value.total -= 1;
      }

      if (employees.value.length == 0) {
        changePage(meta.value.current_page - 1);
      }
    } catch (error) {
      console.error("Gagal menghapus pegawai: ", error);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    employees,
    meta,
    isLoading,
    addEmployee,
    getEmployees,
    changePage,
    deleteEmployee,
    getEmployeeById,
    updateEmployee,
  };
});
