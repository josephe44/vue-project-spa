<template>
  <div class="px-4 py-2 pb-4 bg-[#303032] rounded-xl">
    <h1
      class="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-lg text-[#EBD193] font-normal my-3 ml-2"
    >
      Hot Game
    </h1>
    <div class="flex overflow-x-auto m-0 gap-4 w-full">
      <img
        v-for="image in imageData"
        :src="image"
        :key="image"
        class="rounded-2xl w-[16vw] h-[16vw] mb-1 hover:translate-x-1 transition-all duration-300 cursor-pointer"
        alt="hot-image"
      />
    </div>
  </div>
  
  <!-- Second section -->
  <div
    class="bg-[#303032] rounded-xl px-8 py-4 md:p-8 my-2 flex justify-between items-center w-full gap-14 mb-4 overflow-hidden"
  >
    <div class="flex justify-center items-center ml-2">
      <img
        src="../assets/images/ho_mo@3x.png"
        alt="folder-img"
        class="w-[40px] h-[40px]"
      />
      <p class="ml-4 text-sm md:text-lg font-bold italic break-words text-[#EBD193]">
        User Name
      </p>
    </div>
    <div>
      <div class="flex justify-center items-center mr-1 md:mr-14">
        <img
          src="../assets/images/line-height.png"
          alt="line-height"
          class="pr-4 h-full"
        />
        <img
          src="../assets/images/ho_no@3x.png"
          alt="sound-img"
          class="w-[40px] h-[40px]"
        />
        <p
          class="ml-2 md:ml-4 italic text-[#8b8780] mt-4 break-words text-sm md:text-lg"
        >
          Dragon Boat Festival holiday!holiday!
        </p>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const images = ref([
  "https://res.cloudinary.com/eworldtech/image/upload/v1663769681/hot-game_ht4cos.jpg",
  "https://res.cloudinary.com/eworldtech/image/upload/v1663769681/hot-game_ht4cos.jpg",
  "https://res.cloudinary.com/eworldtech/image/upload/v1663769681/hot-game_ht4cos.jpg",
  "https://res.cloudinary.com/eworldtech/image/upload/v1663769681/hot-game_ht4cos.jpg",
  "https://res.cloudinary.com/eworldtech/image/upload/v1663769681/hot-game_ht4cos.jpg",
  "https://res.cloudinary.com/eworldtech/image/upload/v1663769681/hot-game_ht4cos.jpg",
  "https://res.cloudinary.com/eworldtech/image/upload/v1663769681/hot-game_ht4cos.jpg",
  "https://res.cloudinary.com/eworldtech/image/upload/v1663769681/hot-game_ht4cos.jpg",
]);

const imageData = images.value;
</script>

<style lang="scss" scoped></style>
