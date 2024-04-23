<script setup lang="ts">
const destinations = ref([
  {
    name: 'Rome, Italy',
    price: '5,42',
    days: '10',
    img: '/img/destinations/rome.png',
  },
  {
    name: 'London, UK',
    price: '4,2',
    days: '12',
    img: '/img/destinations/london.jpg',
  },
  {
    name: 'Full Europe',
    price: '15',
    days: '28',
    img: '/img/destinations/europe.png',
  },
]);
</script>

<template>
  <section class="px-6 md:px-10 mt-20 md:mt-40 lg:mt-60 xl:px-0">
    <div class="text-center">
      <span class="font-semibold text-lg lg:text-xl">Top Selling</span>
      <h1
        class="font-volkhov font-bold text-4xl text-dark-midnight-blue mt-2 lg:text-[40px]"
      >
        Top Destinations
      </h1>
    </div>
    <ul class="grid md:grid-cols-3 md:gap-x-4 gap-y-12 mt-16 lg:gap-x-10">
      <li v-for="(destination, index) in destinations" :key="index">
        <div class="rounded-3xl shadow-xl shadow-black/5 group">
          <nuxt-img
            class="w-full object-cover object-top rounded-t-3xl"
            format="webp"
            :src="destination.img"
            loading="lazy"
            width="485"
            height="510"
          />
          <div class="pl-5 pr-6 pt-7 pb-10">
            <div class="flex justify-between">
              <h3
                class="text-[18px] font-medium group-hover:text-tangerine transition-colors"
              >
                {{ destination.name }}
              </h3>
              <span class="text-[18px] font-medium"
                >${{ destination.price }}k</span
              >
            </div>
            <div class="flex items-center gap-x-3 mt-5">
              <Icon class="text-rich-black" name="mingcute:navigation-fill" />
              <span class="font-medium">{{ destination.days }} Days Trip</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
