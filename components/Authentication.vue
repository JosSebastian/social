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
    <button v-on:click="changeVisibility()">{{ action }}</button>
    <div
      v-if="visibility"
      class="w-screen h-screen fixed top-0 left-0 bg-indigo-50 bg-opacity-25 flex justify-center items-center"
    >
      <div
        class="px-6 py-8 relative rounded shadow flex flex-col gap-3 bg-white border border-indigo-300"
      >
        <h3 class="text-xl">{{ action }}</h3>
        <div class="min-w-[18rem] flex flex-col gap-1.5">
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
        <div class="m-0 my-3 flex flex-row gap-1">
          <button v-on:click="changeVisibility()" class="grow">Cancel</button>
          <button class="grow">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  width: 5.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: transparent;
  color: #4338ca;
  font-weight: 600;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #6366f1;
}
button:hover {
  background-color: #6366f1;
  color: #ffffff;
  border-color: transparent;
}
</style>
