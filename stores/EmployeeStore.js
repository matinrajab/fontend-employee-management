import { defineStore } from "pinia";
import { ref } from "vue";
import axiosClient from "~/axios";

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
      await axiosClient.get(`/api/employees?page=${page}`).then((response) => {
        employees.value = response.data.data;
        meta.value = response.data.meta;
      });
    } finally {
      isLoading.value = false;
    }
  }

  async function searchEmployees(query, page = 1) {
    try {
      isLoading.value = true;
      const params = new URLSearchParams({ ...query, page }).toString();
      await axiosClient
        .get(`/api/search-employees?${params}`)
        .then((response) => {
          employees.value = response.data.data;
          meta.value = response.data.meta;
        });
    } catch (error) {
      console.error("Gagal mencari pegawai:", error);
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
      return await axiosClient.get(`/api/employee/${id}`).then((response) => {
        console.log("==============response===============");
        console.log(response.data.data);
        return response.data.data;
      });
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
      await axiosClient.delete(`/api/employee/${id}`);

      await getEmployees(
        employees.value.length == 1
          ? meta.value.current_page - 1
          : meta.value.current_page
      );
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
    searchEmployees,
    changePage,
    deleteEmployee,
    getEmployeeById,
    updateEmployee,
  };
});
