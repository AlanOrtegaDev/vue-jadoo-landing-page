<script setup lang="ts">
const list = ref([
  {
    title: 'Choose Destination',
    description:
      'Choose your favourite place. No matter where you travel inside the World.',
    img: '/img/bookings/square.svg',
  },
  {
    title: 'Make Payment',
    description:
      'After find your perfect spot, make your payment and get ready to travel.',
    img: '/img/bookings/water-sport.svg',
  },
  {
    title: 'Reach Airport on Selected Date',
    description:
      'Lastly, you have to arrive at the airport on time and enjoy the vacation.',
    img: '/img/bookings/taxi.svg',
  },
]);
</script>

<template>
  <section class="mt-20 md:mt-40 lg:mt-60 px-4 md:px-10 xl:px-0">
    <div class="grid lg:grid-cols-2">
      <div>
        <div>
          <span class="font-semibold text-lg lg:text-xl">Easy and Fast</span>
          <h1
            class="font-volkhov font-bold text-4xl text-dark-midnight-blue mt-2 lg:text-[40px] lg:pr-10 capitalize leading-snug"
          >
            Book Your Next Trip In 3 Easy Steps
          </h1>
        </div>
        <ul class="grid gap-y-12 mt-12 lg:mt-8">
          <li
            class="md:even:flex md:even:justify-end lg:even:justify-start"
            v-for="(item, index) in list"
            :key="index"
          >
            <div class="flex md:w-1/2 lg:w-full gap-x-4">
              <nuxt-img class="w-14 h-14" :src="item.img" loading="lazy"/>
              <div>
                <h2 class="font-bold">{{ item.title }}</h2>
                <p class="mt-2">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <BookCard />
    </div>
  </section>
</template>
