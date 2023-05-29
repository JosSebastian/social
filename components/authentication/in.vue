<script lang="ts" setup>
const visibility = ref(false);
const changeVisibility = () => {
  visibility.value = !visibility.value;
  credentials.value.email = "";
  credentials.value.password = "";
};
const supabase = useSupabaseClient();
const credentials = ref({
  email: "",
  password: "",
});
const signIn = async () => {
  await supabase.auth.signInWithPassword({
    email: credentials.value.email,
    password: credentials.value.password,
  });
  changeVisibility();
};
</script>

<template>
  <div>
    <CustomButton @click="changeVisibility">Sign In</CustomButton>
    <CustomModal v-if="visibility">
      <div class="flex flex-col gap-3">
        <h3 class="text-2xl font-[450]">Sign In</h3>
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
        <div class="flex flex-row gap-1.5">
          <CustomButton v-on:click="changeVisibility()" class="grow"
            >Cancel</CustomButton
          >
          <CustomButton v-on:click="signIn()" class="grow"
            >Confirm</CustomButton
          >
        </div>
      </div>
    </CustomModal>
  </div>
</template>

<style scoped></style>
