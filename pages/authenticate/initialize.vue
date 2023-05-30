<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const credentials = ref({
  name: {
    first: "",
    last: "",
  },
  username: "",
});
const cancel = () => {
  navigateTo("/");
};
const confirm = async () => {
  const email = async () => {
    const response = await supabase
      .from("users")
      .select()
      .eq("email", user.value?.email)
      .single();
    if (response.data) return false;
    else return true;
  };
  const username = async () => {
    const response = await supabase
      .from("users")
      .select()
      .eq("username", credentials.value.username)
      .single();
    if (response.data) return false;
    else return true;
  };
  const initialize = await (email() && username());
  if (initialize) {
    await supabase.from("users").insert([
      {
        email: user.value?.email,
        name: credentials.value.name,
        username: credentials.value.username,
      },
    ]);
  }
};
</script>

<template>
  <div class="background">
    <div class="foreground">
      <h3 class="text-2xl font-[450]">Initialize</h3>
      <!-- Name -->
      <div class="flex flex-row gap-3">
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
      <!-- UserName -->
      <CustomInput
        v-model="credentials.username"
        label="UserName:"
        type="text"
      />
      <!-- Action -->
      <div class="flex flex-row gap-1.5">
        <CustomButton v-on:click="cancel()" class="grow">Cancel</CustomButton>
        <CustomButton v-on:click="confirm()" class="grow">Confirm</CustomButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.foreground {
  width: 24rem;
  position: relative;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #a5b4fc;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
</style>
