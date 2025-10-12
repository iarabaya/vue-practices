<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <div>
        <RouterLink class="flex items-center gap-2 font-semibold" to="/">
          <img src="@/assets/logo.svg" alt="Vue logo" class="logo" width="30" height="40" />
        </RouterLink>
      </div>
      <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6">
        <RouterLink
          class="bg-blue-500 p-2 rounded-xl text-white font-bold hover:bg-blue-700"
          :to="{ name: 'home' }"
          >Home</RouterLink
        >
        <RouterLink
          class="bg-blue-500 p-2 rounded-xl text-white font-bold hover:bg-blue-700"
          to="/contact"
          >Contact</RouterLink
        >
        <RouterLink
          class="bg-blue-500 p-2 rounded-xl text-white font-bold hover:bg-blue-700"
          to="/features"
          >Features</RouterLink
        >
        <RouterLink
          class="bg-blue-500 p-2 rounded-xl text-white font-bold hover:bg-blue-700"
          to="/pricing"
          >Pricing</RouterLink
        >
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center">
      <RouterView />
    </main>
    <!-- Fin Main -->

    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        {{ new Date().getFullYear() }} Acme Corporation. Derechos reservados.
      </p>
    </footer>
  </div>
</template>

<style scoped></style>
