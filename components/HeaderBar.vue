<script lang="ts" setup>
const search = ref("");
</script>

<template>
  <div class="p-3 flex flex-row flex-wrap justify-around items-center gap-3">
    <h3 class="text-3xl text-indigo-700">
      <NuxtLink to="/">Social Media</NuxtLink>
    </h3>
    <div class="gap-3 flex flex-row items-center">
      <input
        v-model="search"
        type="text"
        placeholder="Search"
        class="px-2.5 py-1.5 caret-indigo-700 outline-none border focus:border-2 rounded border-indigo-300 focus:border-indigo-600"
      />
      <div class="flex flex-row gap-1">
        <Authentication v-bind:sign="false" />
        <Authentication v-bind:sign="true" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
