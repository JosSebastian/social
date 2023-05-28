<script lang="ts" setup></script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  min-width: 6rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: transparent;
  color: #4338ca;
  font-weight: 600;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #6366f1;
}
button:hover {
  background-color: #6366f1;
  color: #ffffff;
  border-color: transparent;
}
</style>
