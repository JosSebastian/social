<script lang="ts" setup>
const url =
  "https://xqrobrhpuzeqalqtwkfk.supabase.co/storage/v1/object/public/";
const { profile } = defineProps(["profile"]);
</script>

<template>
  <div
    class="px-9 py-3 flex flex-row flex-wrap md:flex-nowrap justify-center sm:justify-start items-center gap-6"
  >
    <!-- Profile Picture -->
    <input
      v-bind:src="profile.image"
      type="image"
      class="w-60 h-60 p-1 rounded-full border-2 border-indigo-300"
    />
    <!-- Profile Information -->
    <div class="grow">
      <!-- Profile Name -->
      <h3 class="text-xl font-medium">{{ profile.name }}</h3>
      <!-- Profile UserName -->
      <p class="-translate-y-1 text-sm">{{ profile.username }}</p>
      <!-- Profile Parameters -->
      <div class="flex flex-row flex-wrap gap-x-3 gap-y-0">
        <p>{{ profile.entries }} Entries</p>
        <div class="flex flex-row flex-wrap gap-3">
          <p>{{ profile.following }} Following</p>
          <p>{{ profile.followed }} Followed</p>
        </div>
      </div>
      <!-- Profile Description -->
      <p class="px-0 py-1">{{ profile.description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
