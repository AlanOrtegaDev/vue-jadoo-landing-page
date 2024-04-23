<script setup lang="ts">
import IconSend from '@/components/icons/SendIcon.vue';
import IconLeaf from '@/components/icons/LeafIcon.vue';
import IconMap from '@/components/icons/MapIcon.vue';

const icons = [IconLeaf, IconMap, IconSend];
</script>

<template>
  <div class="relative mt-20">
    <div
      class="relative rounded-3xl md:w-[350px] md:mx-auto shadow-xl shadow-black/5 pt-5 pb-8 px-6 bg-white lg:pt-7"
    >
      <nuxt-img
        class="w-full"
        format="webp"
        src="/img/bookings/greece.png"
        loading="lazy"
      />
      <div class="mt-6">
        <h2 class="font-medium text-rich-black text-[18px]">Trip To Greece</h2>
        <span class="text-sm font-medium mt-3"
          >14 - 29 June | by Robbin Joseph</span
        >
      </div>
      <ul class="flex gap-x-6 mt-5">
        <li v-for="(icon, index) in icons" :key="index">
          <div
            class="flex justify-center items-center w-9 h-9 bg-white-smoke rounded-full"
          >
            <component :is="icon"></component>
          </div>
        </li>
      </ul>
      <div class="flex items-center justify-between mt-7">
        <div class="flex items-center gap-x-4">
          <IconsBuildingIcon class="w-[18px] h-[18px]" />
          <span class="font-medium text-sm">24 people going</span>
        </div>
        <div class="group">
          <Icon
            class="w-6 h-6 text-royal-blue"
            name="fluent:heart-32-regular"
          />
          <div
            class="absolute bottom-16 left-1/2 group-hover:opacity-100 opacity-0 -translate-x-1/2 flex gap-x-3 shadow-xl shadow-black/5 rounded-[18px] pl-5 pr-6 py-5 bg-white w-[90%] transition-opacity duration-500"
          >
            <nuxt-img
              class="w-[50px] h-[50px]"
              src="/img/bookings/rome-rounded.png"
              format="webp"
              loading="lazy"
            />
            <div>
              <span class="text-sm font-medium">Ongoing</span>
              <h3 class="text-rich-black text-lg font-medium">Trip to rome</h3>
              <div class="mt-3">
                <span class="text-pastel-purple font-medium">40%</span>
                <span class="text-rich-black font-medium ml-1">completed</span>
              </div>
              <div
                class="relative w-[156px] h-[5px] bg-white-smoke rounded-3xl overflow-hidden mt-2"
              >
                <div
                  class="absolute top-0 left-0 w-[73px] h-full bg-pastel-purple"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nuxt-img
        class="absolute -top-48 -left-60 md:-left-52 opacity-40 -z-10 min-w-[500px]"
        src="/img/bookings/blue-shadow.svg"
        loading="lazy"
      />
    </div>
  </div>
</template>
