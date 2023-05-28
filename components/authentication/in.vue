<script lang="ts" setup>
const visibility = ref(false);
const changeVisibility = () => {
  visibility.value = !visibility.value;
};
</script>

<template>
  <div>
    <CustomButton @click="changeVisibility">Sign In</CustomButton>
    <CustomModal v-if="visibility">
      <div class="flex flex-col gap-3">
        <h3 class="text-2xl font-[450]">Sign In</h3>
        <CustomInput label="Email:" type="email" />
        <CustomInput label="Password:" type="password" />
        <div class="flex flex-row gap-1.5">
          <CustomButton v-on:click="changeVisibility()" class="grow">Cancel</CustomButton>
          <CustomButton class="grow">Confirm</CustomButton>
        </div>
      </div>
    </CustomModal>
  </div>
</template>

<style scoped></style>
