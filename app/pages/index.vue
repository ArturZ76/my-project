<template>
    <div class="flex justify-center items-center flex-col h-screen">
        <h1>index page</h1>
        <Alert />
        <Profile />
        <div class="grid grid-cols-1 gap-4 w-[50%] rounded shadow p-1 bg-gray-200">
            <img src="@/assets/img/unreal2.jpeg" alt="exampleImage">
            <img src="~/assets/img/hd.jpg" alt="exampleImage">
        </div>
    </div>
</template>

<script setup lang="ts">
const { sayHello } = useUtils();
sayHello("Hello Artur");


</script>

<style scoped></style>