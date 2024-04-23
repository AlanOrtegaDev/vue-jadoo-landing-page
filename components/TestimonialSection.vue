<script setup lang="ts">
const active = ref(0);
const testimonials = ref([
  {
    name: 'Mike taylor',
    comment:
      'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    location: 'Lahore, Pakistan',
    img: '/img/people/person-1.png',
  },
  {
    name: 'Kelly Willium',
    comment:
      'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    location: 'Khulna, Bangladesh',
    img: '/img/people/person-2.png',
  },
  {
    name: 'Thomas Wagon',
    comment:
      'Jadoo is recognized as one of the finest travel agency in the world. When it came to planning a trip, I found them to be dependable.',
    location: 'CEO of Red Button',
    img: '/img/people/person-3.png',
  },
]);
const slideNext = () => {
  if (active.value === 2) return (active.value = 0);
  active.value++;
};

const slidePrev = () => {
  if (active.value === 0) return (active.value = 2);
  active.value--;
};

onMounted(() => {
  setInterval(() => {
    if (active.value === 0) return (active.value = 1);
    if (active.value === 1) return (active.value = 2);
    if (active.value === 2) return (active.value = 0);
  }, 5000);
});
</script>

<template>
  <section
    class="grid lg:grid-cols-2 mt-20 md:mt-40 lg:mt-60 px-4 md:px-10 lg:px-10 xl:px-0"
  >
    <div class="relative mt-0">
      <span class="font-semibold text-lg lg:text-xl">Testimonials</span>
      <h1
        class="font-volkhov font-bold text-4xl text-dark-midnight-blue mt-2 lg:text-[40px] lg:pr-10 lg:leading-snug capitalize"
      >
        What people say about Us.
      </h1>
      <ul class="hidden lg:flex gap-x-6 mt-16">
        <li v-for="i in 3" :key="i">
          <div
            class="w-3 h-3 rounded-full"
            :class="
              active + 1 === i ? 'bg-midnight-blue' : 'bg-midnight-blue/50'
            "
          ></div>
        </li>
      </ul>
    </div>
    <div class="relative mt-20 lg:mt-0">
      <div class="relative pl-8 pr-14">
        <article
          class="relative bg-white shadow-xl shadow-black/5 rounded-2xl pt-7 px-8 pb-8"
          :class="active !== index ? 'hidden opacity-0' : 'visible opacity-100'"
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <nuxt-img
            class="absolute -top-[30px] -left-[30px] w-[60px] h-[60px]"
            :src="testimonial.img"
            format="webp"
            loading="lazy"
          />
          <div>
            <p class="font-medium">“{{ testimonial.comment }}”</p>
            <h2 class="font-semibold text-[18px] mt-8">
              {{ testimonial.name }}
            </h2>
            <span class="font-medium text-sm mt-1 block">{{
              testimonial.location
            }}</span>
          </div>
          <div
            class="absolute top-6 left-6 w-full h-full bg-white outline outline-2 rounded-xl outline-light-gray -z-10"
          ></div>
        </article>
        <ul
          class="lg:hidden absolute -bottom-20 left-1/2 -translate-x-1/2 ml-4 flex gap-x-6 pr-5"
        >
          <li v-for="i in 3" :key="i">
            <div
              class="w-3 h-3 rounded-full"
              :class="
                active + 1 === i ? 'bg-midnight-blue' : 'bg-midnight-blue/50'
              "
            ></div>
          </li>
        </ul>
        <div
          class="absolute right-0 md:-right-3 bottom-8 flex flex-col gap-y-6"
        >
          <Icon
            name="fluent:chevron-up-12-filled"
            size="16"
            @click="slideNext"
          />
          <Icon
            name="fluent:chevron-down-12-filled"
            size="16"
            @click="slidePrev"
          />
        </div>
      </div>
    </div>
  </section>
</template>
