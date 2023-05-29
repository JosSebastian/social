<script lang="ts" setup>
const visibility = ref(false);
const changeVisibility = () => {
  visibility.value = !visibility.value;
};
const supabase = useSupabaseClient();
const credentials = ref({
  identification: "",
  name: {
    first: "",
    last: "",
  },
  email: "",
  password: "",
});
const signOn = async () => {
  const response = await supabase.auth.signUp({
    email: credentials.value.email,
    password: credentials.value.password,
  });
  console.log(response);
  changeVisibility();
};
</script>

<template>
  <div>
    <CustomButton @click="changeVisibility">Sign On</CustomButton>
    <CustomModal v-if="visibility">
      <div class="flex flex-col gap-3">
        <h3 class="text-2xl font-[450]">Sign On</h3>
        <!-- Identification -->
        <CustomInput
          v-model="credentials.identification"
          label="Identification"
          type="text"
        />
        <!-- Name -->
        <div class="flex flex-row gap-1.5">
          <CustomInput
            v-model="credentials.name.first"
            label="First Name:"
            type="text"
          />
          <CustomInput
            v-model="credentials.name.last"
            label="Last Name:"
            type="text"
          />
        </div>
        <!-- Email -->
        <CustomInput
          v-model="credentials.email" 
          label="Email:" 
          type="email" 
        />
        <!-- Password -->
        <CustomInput
          v-model="credentials.password"
          label="Password:"
          type="password"
        />
        <!-- Sign On -->
        <div class="flex flex-row gap-1.5">
          <CustomButton v-on:click="changeVisibility()" class="grow"
            >Cancel</CustomButton
          >
          <CustomButton v-on:click="signOn()" class="grow"
            >Confirm</CustomButton
          >
        </div>
      </div>
    </CustomModal>
  </div>
</template>

<style scoped></style>
