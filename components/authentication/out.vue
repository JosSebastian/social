<script lang="ts" setup>
const supabase = useSupabaseClient();
const signOut = async () => {
  await supabase.auth.signOut();
};
</script>

<template>
  <div>
    <CustomButton @click="signOut()">Sign Out</CustomButton>
  </div>
</template>

<style scoped></style>
