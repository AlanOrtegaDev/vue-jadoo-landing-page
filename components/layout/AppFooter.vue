<template>
  <footer
    class="px-4 pb-12 md:px-10 lg:px-10 mt-20 md:mt-40 lg:mt-60 xl:w-[90%] xl:px-0 xl:mx-auto"
  >
    <div class="flex flex-wrap lg:grid lg:grid-cols-12 lg:gap-x-10">
      <div class="order-1 flex-auto col-span-3">
        <h1 class="font-medium text-navy-blue text-[44px] leading-none">
          Jadoo.
        </h1>
        <p class="text-sm font-medium mt-3">
          Book your trip in minute, get full Control for much
          <br class="hidden md:flex lg:hidden" />
          longer.
        </p>
      </div>
      <div class="grid md:grid-cols-3 order-2 w-full col-span-6">
        <div class="mt-8 lg:mt-0">
          <h4 class="text-xl font-bold text-rich-black">Company</h4>
          <ul class="mt-4 flex flex-col gap-y-2">
            <li>
              <NuxtLink class="font-medium text-[18px]" to="#">About</NuxtLink>
            </li>
            <li>
              <NuxtLink class="font-medium text-[18px]" to="#"
                >Carrers</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="font-medium text-[18px]" to="#">Mobile</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="mt-8 lg:mt-0">
          <h4 class="text-xl font-bold text-rich-black">Contact</h4>
          <ul class="mt-4 flex flex-col gap-y-2">
            <li>
              <NuxtLink class="font-medium text-[18px]" to="#"
                >Help/FAQ</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="font-medium text-[18px]" to="#">Press</NuxtLink>
            </li>
            <li>
              <NuxtLink class="font-medium text-[18px]" to="#"
                >Affiliate</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="mt-8 lg:mt-0">
          <h4 class="text-xl font-bold text-rich-black">More</h4>
          <ul class="mt-4 flex flex-col gap-y-2">
            <li>
              <NuxtLink class="font-medium text-[18px]" to="#"
                >Airlinefess</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="font-medium text-[18px]" to="#"
                >Airline</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="font-medium text-[18px]" to="#"
                >Low fare tips</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-auto order-3 md:order-1 lg:order-3 col-span-3">
        <ul class="flex gap-x-6 mt-8 md:mt-0">
          <li>
            <NuxtLink
              class="flex items-center justify-center text-rich-black w-10 h-10 rounded-full shadow-md"
              to="#"
            >
              <Icon name="ri:facebook-fill" size="18" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="flex items-center justify-center text-rich-black w-10 h-10 rounded-full shadow-md"
              to="#"
            >
              <Icon name="ri:instagram-fill" size="18" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="flex items-center justify-center text-rich-black w-10 h-10 rounded-full shadow-md"
              to="#"
            >
              <Icon name="ri:twitter-x-fill" size="18" />
            </NuxtLink>
          </li>
        </ul>
        <div class="mt-8">
          <h4 class="text-xl font-medium">Discover our app</h4>
          <div class="flex gap-x-3 mt-4">
            <nuxt-img class="w-28" src="/img/google-play.svg" loading="lazy" />
            <nuxt-img class="w-28" src="/img/apple-store.svg" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
    <span class="text-sm font-medium text-center mt-16 block order-4 w-full"
      >All rights reserved@jadoo.co</span
    >
  </footer>
</template>
