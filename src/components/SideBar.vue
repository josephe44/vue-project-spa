<template>
  <div class="flex flex-col gap-4">
    <ul v-for="icon in icons" :key="icon.id">
      <!-- Left sidebar image -->
      <div class="md:ml-2 w-[14vw] h-[14vw] py-2">
        <li @click="changeState(icon)">
          <img
            class="cursor-pointer hover:translate-y-1 transition-all w-full h-full object-cover"
            :src="icon.status ? icon.imgOne : icon.imgTwo"
            alt="navgation-icon"
          />
        </li>
      </div>

      <!-- Right sidebar image -->
      <div
        v-if="stateStatus"
        class="flex flex-col gap-4 absolute right-0 top-2 pr-2 pt-2 xl:pr-10 w-[70vw] h-[20vw] xl:w-[80vw]"
      >
        <img
          v-for="(imageList, index) in imageLists"
          :key="index"
          class="w-[70vw] h-[20vw] xl:w-[80vw] pt-2 md:ml-8 pl-4 cursor-pointer"
          :src="imageList"
          alt="rightside-image"
        />
      </div>

      <!-- show image on page mount -->
      <div
        v-else
        class="flex flex-col gap-4 absolute right-0 top-2 pr-2 pt-2 xl:pr-10 w-[70vw] h-[20vw] xl:w-[80vw]"
      >
        <img
          src="https://res.cloudinary.com/eworldtech/image/upload/v1663803332/sexy_vmr8om.png"
          alt="rightside-image"
          class="cursor-pointer pl-4 md:ml-8"
        />
        <img
          src="https://res.cloudinary.com/eworldtech/image/upload/v1663803316/ezugi_vis5rs.png"
          alt="rightside-image "
          class="cursor-pointer pl-4 md:ml-8"
        />
      </div>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import sidebarList from "../data/sidebarData";
import sidebarImage from "../data/sidebarImage";

const icons = ref(sidebarList);
const images = ref(sidebarImage);
const imageLists = ref([]);
const stateStatus = ref(false);

// Change the state of the icon by the left sidebar
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
  displayImage(data);
};

// Display image by the rightsidebar when the icon is clicked
const displayImage = (data) => {
  // toggle image visibility
  stateStatus.value = !stateStatus.value;
  // fliter the array
  images.value.filter((image) => {
    if (data.id === image.id) {
      imageLists.value = image.image;
    }
  });
};
</script>

<style lang="scss" scoped></style>
