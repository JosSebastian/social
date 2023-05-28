<script lang="ts" setup>
const props = defineProps({
  image: String,
  name: String,
  identification: String,
  posts: Number,
  following: Number,
  followed: Number,
  description: String,
});
const { image, name, identification, posts, following, followed, description } =
  toRefs(props);
</script>

<template>
  <div
    class="px-9 py-3 flex flex-row flex-wrap md:flex-nowrap justify-center sm:justify-start items-center gap-6"
  >
    <!-- Profile Picture -->
    <input
      v-bind:src="image"
      type="image"
      class="w-60 h-60 p-1 rounded-full border-2 border-indigo-300"
    />
    <!-- Profile Information -->
    <div class="grow">
      <!-- Profile Name -->
      <h3 class="text-xl font-medium">{{ name }}</h3>
      <!-- Profile Identification -->
      <p class="-translate-y-1 text-sm">{{ identification }}</p>
      <!-- Profile Parameters -->
      <div class="flex flex-row flex-wrap gap-x-3 gap-y-0">
        <p>{{ posts }} Posts</p>
        <div class="flex flex-row flex-wrap gap-3">
          <p>{{ following }} Following</p>
          <p>{{ followed }} Followed</p>
        </div>
      </div>
      <!-- Profile Description -->
      <p class="px-0 py-1">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
