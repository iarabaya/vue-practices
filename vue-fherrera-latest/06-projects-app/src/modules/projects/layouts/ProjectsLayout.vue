<template>
  <div class="flex flex-col">
    <!-- Top Menu -->
    <TopMenu />
    <main class="flex flex-row">
      <!-- Side Menu -->
      <SideMenu />

      <!-- Router View -->
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';
</script>
