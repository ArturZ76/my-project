<template>
    <div>
        <h1>event id: {{ $route.params.id }}</h1>
    </div>
</template>

<script setup lang="ts">
// const route = useRoute();
const nuxt = useNuxtApp();
console.log(nuxt);
// console.log(`My route is ${route.params.id}`)
</script>

<style scoped></style>