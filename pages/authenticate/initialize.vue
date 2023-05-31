<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const file = ref(null);
const credentials = ref({
  name: {
    first: "",
    last: "",
  },
  username: "",
  description: "",
});
const upload = (input) => {
  file.value = input.target.files[0];
};
const cancel = () => {
  navigateTo("/");
};
const confirm = async () => {
  const email = await supabase
    .from("users")
    .select()
    .eq("email", user.value?.email)
    .single()
    .then((response) => {
      if (response.data) return false;
      else return true;
    });
  const username = await supabase
    .from("users")
    .select()
    .eq("username", credentials.value.username)
    .single()
    .then((response) => {
      if (response.data) return false;
      else return true;
    });
  const initialize = email && username && file.value;
  if (initialize) {
    await supabase.storage
      .from("profile")
      .upload(`profile/${credentials.username}`, file.value);
    await supabase.from("users").insert([
      {
        email: user.value?.email,
        name: credentials.value.name,
        username: credentials.value.username,
        description: credentials.value.description,
      },
    ]);
  }
  navigateTo("/");
};
</script>

<template>
  <div class="background">
    <div class="foreground">
      <h3 class="text-2xl font-[450]">Initialize</h3>
      <!-- Image -->
      <input v-on:change="upload" type="file" accept=".jpeg,.png" />
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
      <!-- Description -->
      <CustomInput
        v-model="credentials.description"
        label="Description:"
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
