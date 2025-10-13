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
      <nav class="flex flex-col ml-auto space-x-4 items-start h-10 sm:space-x-6">
        <div class="space-x-4">
          <!-- exact-active-class="underline font-semibold" -->
          <RouterLink class="hover:bg-blue-100" :to="{ name: 'home' }">Home</RouterLink>
          <RouterLink class="hover:bg-blue-100" to="/features">Features</RouterLink>
          <RouterLink class="hover:bg-blue-100" to="/pricing">Pricing</RouterLink>
          <RouterLink class="hover:bg-blue-100" to="/contact">Contact</RouterLink>
        </div>

        <div class="space-x-4">
          <RouterLink class="hover:bg-blue-100" to="/pokemon/1">Pokémons</RouterLink>
          <RouterLink class="hover:bg-blue-100" to="/auth">Login</RouterLink>
        </div>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>

      <!-- <RouterView /> -->
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
