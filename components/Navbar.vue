<script setup>
</script>

<template>
    <!-- Navbar -->
    <UNavbar class="fixed top-0 left-0 right-0 z-10 transition-all duration-300" :class="{ 'opacity-0 pointer-events-none': !atTop }">
      <template #center>
        <h1 class="text-4xl font-bold" style="font-family: 'Ethnocentric', sans-serif;">Extrospection</h1>
      </template>
    </UNavbar>
</template>

<style scoped>
</style>