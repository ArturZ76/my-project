<template>
  <div>
    <h1>Events Page</h1>
    {{ message }}
  </div>
</template>

<script setup lang="ts">
const { $sayHelloToUser } = useNuxtApp();
const message = $sayHelloToUser("Henryczku");
</script>

<style scoped></style>