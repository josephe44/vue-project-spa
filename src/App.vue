<template>
  <div
    class="xl:container flex flex-col min-h-screen font-Roboto bg-primary-color p-2"
  >
    <HomeView />
    <Navigation />
  </div>
</template>

<script setup>
import HomeView from "./views/HomeView.vue";
import Navigation from "./components/Navigation.vue";
</script>

<style scoped></style>
