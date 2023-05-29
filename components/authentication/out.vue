<script lang="ts" setup>
const supabase = useSupabaseClient();
const signOut = async () => {
  const response = await supabase.auth.signOut();
  console.log(response);
};
</script>

<template>
  <div>
    <!-- Sign Out -->
    <CustomButton @click="signOut()">Sign Out</CustomButton>
  </div>
</template>

<style scoped></style>
