<script lang="ts" setup>
const search = ref("");
const authenticated = ref(false);
</script>

<template>
  <div class="p-3 flex flex-row flex-wrap justify-around items-center gap-3">
    <!-- Header Left -->
    <h3 class="text-3xl text-indigo-700">
      <NuxtLink to="/">Social Media</NuxtLink>
    </h3>
    <!-- Header Right -->
    <div class="gap-3 flex flex-row items-center">
      <!-- User Search -->
      <input
        v-model="search"
        type="text"
        placeholder="Search"
        class="px-2.5 py-1.5 caret-indigo-700 outline-none border focus:border-2 rounded border-indigo-300 focus:border-indigo-600"
      />
      <!-- User Authentication -->
      <div v-if="!authenticated" class="flex flex-row gap-1">
        <AuthenticationOn />
        <AuthenticationIn />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
