<script lang="ts" setup>
const supabase = useSupabaseClient();
const router = useRouter();
const sign = computed(() => {
  const query = router.currentRoute.value.query;
  if (query.sign === "on") return "Sign On";
  else if (query.sign === "in") return "Sign In";
  else if (query.sign === "out") return "Sign Out";
});
const credentials = ref({
  email: "",
  password: "",
});
const signOn = async () => {
  const user = credentials.value;
  await supabase.auth.signUp(user);
};
const signIn = async () => {
  const user = credentials.value;
  await supabase.auth.signInWithPassword(user);
};
const signOut = async () => {
  await supabase.auth.signOut();
};
const cancel = () => {
  navigateTo("/");
};
const confirm = () => {
  const query = router.currentRoute.value.query;
  if (query.sign === "on") signOn();
  else if (query.sign === "in") signIn();
  else if (query.sign === "out") signOut();
  navigateTo("/");
};
</script>

<template>
  <div class="background">
    <div class="foreground">
      <h3 v-if="sign" class="text-2xl font-[450]">{{ sign }}</h3>
      <div
        v-if="sign == 'Sign On' || sign == 'Sign In'"
        class="flex flex-col gap-3"
      >
        <!-- Email -->
        <CustomInput v-model="credentials.email" label="Email:" type="email" />
        <!-- Password -->
        <CustomInput
          v-model="credentials.password"
          label="Password:"
          type="password"
        />
      </div>
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
  gap: 1.5em;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #a5b4fc;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
</style>
