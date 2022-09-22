<template>
  <Teleport to="body">
    <div class="fixed bottom-2 w-full px-5">
      <div
        class="bg-[#303032] text-white border-2 border-blue-50 shadow-black rounded-xl p-3 md:p-4"
      >
        <ul class="grid grid-cols-5 gap-4">
          <li v-for="icon in icons" :key="icon.id" @click="changeState(icon)">
            <img
              class="w-6 h-6 md:w-9 md:h-9 cursor-pointer hover:translate-y-1 transition-all duration-300"
              :src="icon.status ? icon.imgOne : icon.imgTwo"
              alt="navgation-icon"
            />
          </li>
        </ul>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";
import iconsList from "../data/iconsData";
const icons = ref(iconsList);

// change the state of the navigation icon
const changeState = (data) => {
  const iconsValue = icons.value;
  iconsValue.forEach((icon) => {
    if (icon.id === data.id) {
      data.status = !icon.status;
    }
    if (icon.id !== data.id) {
      icon.status = true;
    }
  });
};
</script>
