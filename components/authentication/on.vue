<script lang="ts" setup>
const visibility = ref(false);
const changeVisibility = () => {
  visibility.value = !visibility.value;
};
</script>

<template>
  <div>
    <CustomButton @click="changeVisibility">Sign On</CustomButton>
    <CustomModal v-if="visibility">
      <div class="flex flex-col gap-3">
        <h3 class="text-2xl font-[450]">Sign On</h3>
        <CustomInput label="Identification" type="text" />
        <div class="flex flex-row gap-1.5">
          <CustomInput label="First Name:" type="text" />
          <CustomInput label="Last Name:" type="text" />
        </div>
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
