<template>
  <section class="mt-20 md:mt-40 lg:mt-60">
    <div class="text-center">
      <span class="font-semibold text-lg lg:text-xl xl:text-2xl xl:uppercase"
        >Category</span
      >
      <h1
        class="font-volkhov font-bold text-4xl text-dark-midnight-blue mt-2 lg:text-[40px] xl:text-6xl capitalize"
      >
        We Offer Best Services
      </h1>
    </div>
    <ul
      class="grid md:grid-cols-2 lg:grid-cols-4 place-items-center gap-y-6 mt-16 lg:px-10 lg:gap-x-10"
    >
      <li class="relative group">
        <div
          class="hover:shadow-lg hover:shadow-black/10 rounded-[36px] w-[280px] h-[334px] xl:w-[320px] xl:px-12 xl:h-[350px] px-8 lg:w-auto lg:px-5 lg:py-5 py-11 transition-shadow duration-500 bg-white"
        >
          <nuxt-img
            class="w-28 h-24 mx-auto"
            format="webp"
            src="/img/services/satellite.svg"
            loading="lazy"
          />
          <div class="text-center mt-8">
            <h1 class="text-midnight-blue text-xl font-semibold">
              Calculated Weather
            </h1>
            <p class="font-medium mt-6">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
        </div>
        <nuxt-img
          class="absolute bottom-0 left-0 -translate-y-6 translate-x-6 group-hover:translate-y-6 group-hover:-translate-x-6 w-20 h-20 -z-10 transition-transform duration-500"
          src="/img/services/decore-rectangle.svg"
          loading="lazy"
        />
      </li>
      <li class="relative group">
        <div
          class="hover:shadow-lg hover:shadow-black/10 rounded-[36px] w-[280px] h-[334px] lg:w-auto lg:px-5 px-14 py-11 lg:py-5 transition-shadow duration-500 bg-white"
        >
          <nuxt-img
            class="w-32 h-24 mx-auto"
            format="webp"
            src="/img/services/plane.svg"
            loading="lazy"
          />
          <div class="text-center mt-8">
            <h1 class="text-midnight-blue text-xl font-semibold">
              Best Flights
            </h1>
            <p class="font-medium mt-6">
              Engrossed listening. Park gate sell they west hard for the.
            </p>
          </div>
          <nuxt-img
            class="absolute bottom-0 left-0 -translate-y-6 translate-x-6 group-hover:translate-y-6 group-hover:-translate-x-6 w-20 h-20 -z-10 transition-transform duration-500"
            src="/img/services/decore-rectangle.svg"
            loading="lazy"
          />
        </div>
      </li>
      <li class="relative group">
        <div
          class="hover:shadow-lg hover:shadow-black/10 rounded-[36px] w-[280px] h-[334px] px-8 lg:w-auto lg:px-5 py-11 lg:py-5 transition-shadow duration-500 bg-white"
        >
          <nuxt-img
            class="w-[85px] h-24 mx-auto"
            format="webp"
            src="/img/services/microphone.png"
            loading="lazy"
          />
          <div class="text-center mt-8">
            <h1 class="text-midnight-blue text-xl font-semibold">
              Local Events
            </h1>
            <p class="font-medium mt-6">
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </p>
          </div>
        </div>
        <nuxt-img
          class="absolute bottom-0 left-0 -translate-y-6 translate-x-6 group-hover:translate-y-6 group-hover:-translate-x-6 w-20 h-20 -z-10 transition-transform duration-500"
          src="/img/services/decore-rectangle.svg"
          loading="lazy"
        />
      </li>
      <li class="relative group">
        <div
          class="hover:shadow-lg hover:shadow-black/10 rounded-[36px] w-[280px] h-[334px] px-8 lg:w-auto lg:px-4 py-11 lg:py-5 transition-shadow duration-500 bg-white"
        >
          <nuxt-img
            class="w-24 h-24 mx-auto"
            src="/img/services/power-supply.svg"
            loading="lazy"
          />
          <div class="text-center mt-8">
            <h1 class="text-midnight-blue text-xl font-semibold">
              Customization
            </h1>
            <p class="font-medium mt-6">
              We deliver outsourced aviation services for military customers.
            </p>
          </div>
        </div>
        <nuxt-img
          class="absolute bottom-0 left-0 -translate-y-6 translate-x-6 group-hover:translate-y-6 group-hover:-translate-x-6 w-20 h-20 -z-10 transition-transform duration-500"
          src="/img/services/decore-rectangle.svg"
          loading="lazy"
        />
      </li>
    </ul>
  </section>
</template>
