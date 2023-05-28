<script lang="ts" setup>
const props = defineProps({
  sign: Boolean,
});
const action = props.sign ? "Sign In" : "Sign Up";
const visibility = ref(false);
const changeVisibility = () => {
  visibility.value = !visibility.value;
};
</script>

<template>
  <div>
    <!-- User Visibility -->
    <button v-on:click="changeVisibility()">{{ action }}</button>
    <!-- User -->
    <div
      v-if="visibility"
      class="w-screen h-screen fixed top-0 left-0 bg-indigo-50 bg-opacity-25 flex justify-center items-center"
    >
      <div
        class="px-6 py-8 relative rounded shadow flex flex-col gap-3 bg-white border border-indigo-300"
      >
        <h3 class="text-xl">{{ action }}</h3>
        <!-- User Information -->
        <div class="min-w-[25rem] flex flex-col gap-1.5">
          <!-- User Identification -->
          <div v-if="!sign">
            <label
              for="identification"
              class="block mx-0 my-1 text-sm font-medium"
              >Identification:</label
            >
            <input
              type="email"
              id="identification"
              class="block w-full px-2.5 py-1.5 caret-indigo-700 text-sm outline-none rounded border border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <!-- User Name -->
          <div v-if="!sign" class="w-full flex flex-row justify-around gap-1.5">
            <!-- User First Name -->
            <div class="flex flex-col grow">
              <label for="first" class="block mx-0 my-1 text-sm font-medium"
                >First Name:</label
              >
              <input
                type="text"
                id="first"
                class="w-full px-2.5 py-1.5 flex grow caret-indigo-700 text-sm outline-none rounded border border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <!-- User Last Name -->
            <div class="flex flex-col grow">
              <label for="last" class="block mx-0 my-1 text-sm font-medium"
                >Last Name:</label
              >
              <input
                type="text"
                id="first"
                class="w-full px-2.5 py-1.5 flex grow caret-indigo-700 text-sm outline-none rounded border border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <!-- User Email -->
          <div>
            <label for="email" class="block mx-0 my-1 text-sm font-medium"
              >Email:</label
            >
            <input
              type="email"
              id="email"
              class="block w-full px-2.5 py-1.5 caret-indigo-700 text-sm outline-none rounded border border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <!-- User Password -->
          <div>
            <label for="password" class="block mx-0 my-1 text-sm font-medium"
              >Password:</label
            >
            <input
              type="password"
              id="password"
              class="block w-full px-2.5 py-1.5 caret-indigo-700 text-sm outline-none rounded border border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
        </div>
        <!-- User Functions -->
        <div class="m-0 my-3 flex flex-row gap-1">
          <button v-on:click="changeVisibility()" class="grow">Cancel</button>
          <button class="grow">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
