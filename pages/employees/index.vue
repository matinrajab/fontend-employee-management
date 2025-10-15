<template>
  <div class="bg-background h-screen">
    <h1 class="p-6 text-primary-text font-medium text-2xl">Employees table</h1>

    <div class="px-6">
      <table class="table-auto bg-white rounded-3xl">
        <thead class="text-tertiary-text text-left">
          <tr class="border-b border-solid border-line-border">
            <th class="font-normal px-3 py-1 text-xs">No</th>
            <th class="font-normal px-3 py-1 text-xs">NIP</th>
            <th class="font-normal px-3 py-1 text-xs">Nama</th>
            <th class="font-normal px-3 py-1 text-xs">Tempat Lahir</th>
            <th class="font-normal px-3 py-1 text-xs">Alamat</th>
            <th class="font-normal px-3 py-1 text-xs">Tgl Lahir</th>
            <th class="font-normal px-3 py-1 text-xs">L/P</th>
            <th class="font-normal px-3 py-1 text-xs">Gol</th>
            <th class="font-normal px-3 py-1 text-xs">Eselon</th>
            <th class="font-normal px-3 py-1 text-xs">Jabatan</th>
            <th class="font-normal px-3 py-1 text-xs">Tempat Tugas</th>
            <th class="font-normal px-3 py-1 text-xs">Agama</th>
            <th class="font-normal px-3 py-1 text-xs">Unit Kerja</th>
            <th class="font-normal px-3 py-1 text-xs">No. HP</th>
            <th class="font-normal px-3 py-1 text-xs">NPWP</th>
            <th class="font-normal px-3 py-1 text-xs text-center" colspan="2">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-solid border-line-border">
            <td class="px-3 py-1 text-xs">1</td>
            <td class="px-3 py-1 text-xs">12130569001</td>
            <td class="px-3 py-1 text-xs">Malcolm Lockyer</td>
            <td class="px-3 py-1 text-xs">Banjarnegara</td>
            <td class="px-3 py-1 text-xs">
              Jl.Mendut III, Puri Nirwana I RT.03/16
            </td>
            <td class="px-3 py-1 text-xs">10-07-1987</td>
            <td class="px-3 py-1 text-xs">L</td>
            <td class="px-3 py-1 text-xs">IV/e</td>
            <td class="px-3 py-1 text-xs">I</td>
            <td class="px-3 py-1 text-xs">Penyusun laporan keuangan</td>
            <td class="px-3 py-1 text-xs">Jakarta</td>
            <td class="px-3 py-1 text-xs">Islam</td>
            <td class="px-3 py-1 text-xs">Kantor Kementrian</td>
            <td class="px-3 py-1 text-xs">087723454878</td>
            <td class="px-3 py-1 text-xs">8987087723454878</td>
            <td class="px-3 py-1 text-xs"><NuxtLink to="#">Edit</NuxtLink></td>
            <td class="px-3 py-1 text-xs text-danger">
              <NuxtLink to="#">Delete</NuxtLink>
            </td>
          </tr>
          <tr class="border-b border-solid border-line-border">
            <td class="px-3 py-1 text-xs">1</td>
            <td class="px-3 py-1 text-xs">12130569001</td>
            <td class="px-3 py-1 text-xs">Malcolm Lockyer</td>
            <td class="px-3 py-1 text-xs">Banjarnegara</td>
            <td class="px-3 py-1 text-xs">
              Jl.Mendut III, Puri Nirwana I RT.03/16
            </td>
            <td class="px-3 py-1 text-xs">10-07-1987</td>
            <td class="px-3 py-1 text-xs">L</td>
            <td class="px-3 py-1 text-xs">IV/e</td>
            <td class="px-3 py-1 text-xs">I</td>
            <td class="px-3 py-1 text-xs">Penyusun laporan keuangan</td>
            <td class="px-3 py-1 text-xs">Jakarta</td>
            <td class="px-3 py-1 text-xs">Islam</td>
            <td class="px-3 py-1 text-xs">Kantor Kementrian</td>
            <td class="px-3 py-1 text-xs">087723454878</td>
            <td class="px-3 py-1 text-xs">8987087723454878</td>
            <td class="px-3 py-1 text-xs"><NuxtLink to="#">Edit</NuxtLink></td>
            <td class="px-3 py-1 text-xs text-danger">
              <NuxtLink to="#">Delete</NuxtLink>
            </td>
          </tr>
          <tr class="border-b border-solid border-line-border">
            <td class="px-3 py-1 text-xs">1</td>
            <td class="px-3 py-1 text-xs">12130569001</td>
            <td class="px-3 py-1 text-xs">Malcolm Lockyer</td>
            <td class="px-3 py-1 text-xs">Banjarnegara</td>
            <td class="px-3 py-1 text-xs">
              Jl.Mendut III, Puri Nirwana I RT.03/16
            </td>
            <td class="px-3 py-1 text-xs">10-07-1987</td>
            <td class="px-3 py-1 text-xs">L</td>
            <td class="px-3 py-1 text-xs">IV/e</td>
            <td class="px-3 py-1 text-xs">I</td>
            <td class="px-3 py-1 text-xs">Penyusun laporan keuangan</td>
            <td class="px-3 py-1 text-xs">Jakarta</td>
            <td class="px-3 py-1 text-xs">Islam</td>
            <td class="px-3 py-1 text-xs">Kantor Kementrian</td>
            <td class="px-3 py-1 text-xs">087723454878</td>
            <td class="px-3 py-1 text-xs">8987087723454878</td>
            <td class="px-3 py-1 text-xs"><NuxtLink to="#">Edit</NuxtLink></td>
            <td class="px-3 py-1 text-xs text-danger">
              <NuxtLink to="#">Delete</NuxtLink>
            </td>
          </tr>
          <tr class="border-b border-solid border-line-border">
            <td class="px-3 py-1 text-xs">1</td>
            <td class="px-3 py-1 text-xs">12130569001</td>
            <td class="px-3 py-1 text-xs">Malcolm Lockyer</td>
            <td class="px-3 py-1 text-xs">Banjarnegara</td>
            <td class="px-3 py-1 text-xs">
              Jl.Mendut III, Puri Nirwana I RT.03/16
            </td>
            <td class="px-3 py-1 text-xs">10-07-1987</td>
            <td class="px-3 py-1 text-xs">L</td>
            <td class="px-3 py-1 text-xs">IV/e</td>
            <td class="px-3 py-1 text-xs">I</td>
            <td class="px-3 py-1 text-xs">Penyusun laporan keuangan</td>
            <td class="px-3 py-1 text-xs">Jakarta</td>
            <td class="px-3 py-1 text-xs">Islam</td>
            <td class="px-3 py-1 text-xs">Kantor Kementrian</td>
            <td class="px-3 py-1 text-xs">087723454878</td>
            <td class="px-3 py-1 text-xs">8987087723454878</td>
            <td class="px-3 py-1 text-xs"><NuxtLink to="#">Edit</NuxtLink></td>
            <td class="px-3 py-1 text-xs text-danger">
              <NuxtLink to="#">Delete</NuxtLink>
            </td>
          </tr>
          <tr>
            <td class="px-3 py-1 text-xs">1</td>
            <td class="px-3 py-1 text-xs">12130569001</td>
            <td class="px-3 py-1 text-xs">Malcolm Lockyer</td>
            <td class="px-3 py-1 text-xs">Banjarnegara</td>
            <td class="px-3 py-1 text-xs">
              Jl.Mendut III, Puri Nirwana I RT.03/16
            </td>
            <td class="px-3 py-1 text-xs">10-07-1987</td>
            <td class="px-3 py-1 text-xs">L</td>
            <td class="px-3 py-1 text-xs">IV/e</td>
            <td class="px-3 py-1 text-xs">I</td>
            <td class="px-3 py-1 text-xs">Penyusun laporan keuangan</td>
            <td class="px-3 py-1 text-xs">Jakarta</td>
            <td class="px-3 py-1 text-xs">Islam</td>
            <td class="px-3 py-1 text-xs">Kantor Kementrian</td>
            <td class="px-3 py-1 text-xs">087723454878</td>
            <td class="px-3 py-1 text-xs">8987087723454878</td>
            <td class="px-3 py-1 text-xs"><NuxtLink to="#">Edit</NuxtLink></td>
            <td class="px-3 py-1 text-xs text-danger">
              <NuxtLink to="#">Delete</NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  // layout: false,
  middleware: ["sanctum:auth"],
});
</script>
