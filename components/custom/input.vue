<script lang="ts" setup>
const input = defineModel();
const { label, type } = defineProps(["label", "type"]);
</script>

<template>
  <div>
    <label class="input-label">{{ label }}</label>
    <input v-model="input" v-bind:type="type" class="input" required />
  </div>
</template>

<style scoped>
.input-label {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
}
.input {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #a5b4fc;
  outline: 0;
}
</style>
