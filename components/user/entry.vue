<script lang="ts" setup>
const props = defineProps({
  post: String,
  profile: String,
  name: String,
  identification: String,
  description: String,
});
const { post, profile, name, identification, description } = toRefs(props);
</script>

<template>
  <div class="w-96 rounded border-2 border-indigo-600">
    <!-- Entry -->
    <input v-bind:src="post" type="image" class="w-96 h-96 object-none" />
    <!-- Entry Information -->
    <div class="mx-3 mt-2 mb-3 flex flex-col justify-center">
      <div class="flex flex-row items-center">
        <!-- Profile Picture -->
        <input
          v-bind:src="profile"
          type="image"
          class="w-12 h-12 rounded-full object-none border border-indigo-600"
        />
        <!-- Profile Information -->
        <div class="flex flex-col">
          <p class="ml-2">{{ name }}</p>
          <p class="ml-2 -translate-y-1 text-xs">@{{ identification }}</p>
        </div>
      </div>
      <!-- Entry Caption -->
      <p class="mt-1 truncate">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
