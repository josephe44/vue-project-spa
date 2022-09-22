<template>
  <div>
    <Navbar />
    <Slider />
    <HotGame />
    <div class="relative px-4 py-2 pb-20 md:pb-36 bg-[#303032] rounded-xl min-h-screen">
      <SideBar />
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Slider from "../components/Slider.vue";
import HotGame from "../components/HotGame.vue";
import SideBar from "../components/SideBar.vue";
</script>

<style scoped></style>
