<template>
    <div class="DefaultLayout">
        <header>
            <ul class="flex flex-row justify-end mr-5 mt-3">
                <li class="mx-2 rounded bg-blue-400 text-white px-3 py-1">
                    <nuxt-link to="/events/profile">Profile</nuxt-link>
                </li>
                <li class="mx-2 rounded bg-blue-400 text-white px-3 py-1">
                    <nuxt-link to="/events">Events</nuxt-link>
                </li>
                <li class="mx-2 rounded bg-blue-400 text-white px-3 py-1">
                    <nuxt-link to="/">Back Home</nuxt-link>
                </li>
            </ul>
        </header>
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>