<script setup lang="ts">
const isNavOpen = ref(false);
const isDropdownOpen = ref(false);
const isBlur = ref(false);

const blurHeader = () => {
  window.onscroll = () => {
    if (window.scrollY > 0) return (isBlur.value = true);
    isBlur.value = false;
  };
  if (window.scrollY > 0) return (isBlur.value = true);
};

onMounted(() => blurHeader());
</script>

<template>
  <header
    class="fixed top-0 left-0 z-40 h-20 w-full text-midnight-blue"
    :class="[
      isNavOpen
        ? 'bg-alice-blue transition-colors ease-in delay-0'
        : 'transition-colors ease-in delay-500',
      { 'backdrop-blur-xl': isBlur },
    ]"
  >
    <div
      class="flex justify-between items-center h-full px-8 md:px-10 w-full lg:px-12 xl:container xl:mx-auto xl:px-0"
    >
      <nuxt-img
        class="h-7 md:h-8 xl:h-10"
        src="/img/logo.svg"
        alt="Jadoo Logo"
        loading="lazy"
      />
      <nav
        class="absolute lg:relative lg:top-0 top-20 left-0 bg-alice-blue flex flex-col lg:flex-row shadow-md w-full overflow-y-hidden lg:overflow-y-visible max-h-0 lg:max-h-[80px] lg:items-center lg:justify-end lg:gap-x-10 lg:px-0 lg:bg-transparent lg:shadow-none px-8 lg:transition-none transition-all ease-in-out duration-500"
        :class="{ 'max-h-[392px] py-4': isNavOpen }"
      >
        <Nuxt-Link
          class="py-2 lg:py-0 lg:font-medium hover:text-tangerine xl:text-lg"
          to="#"
          >Services</Nuxt-Link
        >
        <Nuxt-Link
          class="py-2 lg:py-0 lg:font-medium hover:text-tangerine xl:text-lg"
          to="#"
          >Bookings</Nuxt-Link
        >
        <Nuxt-Link
          class="py-2 lg:py-0 lg:font-medium hover:text-tangerine xl:text-lg"
          to="#"
          >Destinations</Nuxt-Link
        >
        <Nuxt-Link
          class="py-2 lg:py-0 lg:font-medium hover:text-tangerine xl:text-lg"
          to="#"
          >Testimonials</Nuxt-Link
        >
        <Nuxt-Link
          class="py-2 lg:py-0 lg:font-medium hover:text-tangerine xl:text-lg"
          to="#"
          >Login</Nuxt-Link
        >
        <Nuxt-Link
          class="py-2 lg:py-0 lg:font-medium hover:text-tangerine xl:text-lg"
          to="#"
          >Sign up</Nuxt-Link
        >
        <div
          class="relative flex items-center gap-x-2 py-2 cursor-pointer hover:text-tangerine"
          @click="isDropdownOpen = !isDropdownOpen"
        >
          <span class="lg:font-medium text-lg">EN</span>
          <Icon name="el:chevron-down" size="12" />
        </div>
        <ul
          v-if="isDropdownOpen"
          class="bg-white w-[60%] py-2 rounded-md shadow-xl lg:absolute lg:top-10 lg:right-0 lg:w-[150px] cursor-pointer"
        >
          <li
            class="py-1 px-4 active:text-tangerine hover:bg-white-smoke xl:text-lg"
            @click="isDropdownOpen = false"
          >
            EN
          </li>
          <li
            class="py-1 px-4 active:text-tangerine hover:bg-white-smoke xl:text-lg"
            @click="isDropdownOpen = false"
          >
            ES
          </li>
        </ul>
      </nav>
      <div class="lg:hidden">
        <Icon
          v-if="!isNavOpen"
          name="fa6-solid:bars"
          class="w-6 md:w-7 h-auto"
          @click="isNavOpen = !isNavOpen"
        />
        <Icon
          v-if="isNavOpen"
          name="ic:round-close"
          class="w-7 md:w-8 h-auto"
          @click="(isNavOpen = !isNavOpen), (isDropdownOpen = false)"
        />
      </div>
    </div>
  </header>
</template>
