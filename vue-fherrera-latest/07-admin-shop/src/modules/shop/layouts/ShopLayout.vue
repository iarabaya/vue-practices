<script setup lang="ts">
import CustomFooter from '../components/CustomFooter.vue';
import TopMenu from '../components/TopMenu.vue';
</script>

<template>
  <!-- Header Navbar -->
  <top-menu />

  <router-view />

  <!-- Footer -->
  <custom-footer />
</template>
