<script setup>
const router = useRouter();
const supabase = useSupabaseClient();
const url =
  "https://xqrobrhpuzeqalqtwkfk.supabase.co/storage/v1/object/public/";
const profile = ref({
  image: "",
  name: "",
  username: "",
  entries: 0,
  following: 0,
  followed: 0,
  description: "",
});
onMounted(async () => {
  await supabase
    .from("users")
    .select()
    .eq("username", router.currentRoute.value.params.user)
    .single()
    .then((response) => {
      console.log(response.data.image);
      if (response.data) {
        profile.value.image = `${url}profiles/${response.data.image}`;
        profile.value.name = `${response.data.name.first} ${response.data.name.last}`;
        profile.value.username = `@${response.data.username}`;
        profile.value.entries = response.data.entries;
        profile.value.following = response.data.following;
        profile.value.followed = response.data.followed;
        profile.value.description = response.data.description;
      }
    });
});
</script>

<template>
  <div>
    <UserProfile v-bind:profile="profile" />
  </div>
</template>

<style scoped></style>
