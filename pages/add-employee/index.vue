<script setup>
import MainFormInput from "~/components/MainFormInput.vue";

definePageMeta({
  middleware: ["sanctum:auth"],
});

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
</script>

<template>
  <div class="bg-background p-6">
    <div class="bg-white rounded-3xl p-6">
      <div class="grid grid-cols-2 gap-10 mb-5">
        <MainFormInput id="nip" label="NIP" v-model="form.nip" />
        <MainFormInput id="nama" label="Nama" v-model="form.nama" />
      </div>
      <div class="grid grid-cols-2 gap-10 mb-5">
        <MainFormInput
          id="tempat-lahir"
          label="Tempat Lahir"
          v-model="form.tempat_lahir"
        />
        <MainFormInput id="alamat" label="Alamat" v-model="form.alamat" />
      </div>
      <div class="grid grid-cols-2 gap-10 mb-5">
        <div>
          <p class="mb-3">Tanggal Lahir</p>
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </div>
            <input
              datepicker
              id="default-datepicker"
              type="date"
              class="border border-line-border rounded-2xl text-sm focus:ring-primary focus:border-primary block w-full ps-10 p-2.5"
            />
          </div>
        </div>
        <div>
          <p class="mb-3">Jenis Kelamin:</p>
          <div class="flex items-center mb-3">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-primary focus:ring-primary"
            />
            <label for="default-radio-1" class="ms-2">L</label>
          </div>
          <div class="flex items-center">
            <input
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-primary focus:ring-primary"
            />
            <label for="default-radio-2" class="ms-2">P</label>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-10 mb-5">
        <div>
          <label for="countries" class="block mb-2">Golongan</label>
          <select
            v-model="gologan"
            id="countries"
            class="border border-line-border rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5"
          >
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div>
          <label for="countries" class="block mb-2">Eselon</label>
          <select
            v-model="eselon"
            id="countries"
            class="border border-line-border rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5"
          >
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-10 mb-5">
        <MainFormInput id="jabatan" label="Jabatan" v-model="form.jabatan" />
        <MainFormInput
          id="tempat-tugas"
          label="Tempat Tugas"
          v-model="form.tempat_tugas"
        />
      </div>
      <div class="grid grid-cols-2 gap-10 mb-5">
        <div>
          <label for="countries" class="block mb-2">Agama</label>
          <select
            v-model="agama"
            id="countries"
            class="border border-line-border rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5"
          >
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <MainFormInput
          id="unit-kerja"
          label="Unit Kerja"
          v-model="form.unit_kerja"
        />
      </div>
      <div class="grid grid-cols-2 gap-10 mb-5">
        <MainFormInput id="no-hp" label="Nomor HP" v-model="form.no_hp" />
        <MainFormInput id="npwp" label="NPWP" v-model="form.npwp" />
      </div>
      <div class="grid grid-cols-2 gap-10 mb-5">
        <div>
          <label class="block mb-3" for="file_input">Upload file</label>
          <input
            class="block w-full border border-line-border rounded-2xl py-3 px-5 cursor-pointer"
            id="file_input"
            type="file"
          />
        </div>
        <div class="flex items-end">
          <MainButton text="Submit" />
        </div>
      </div>
    </div>
  </div>
</template>
