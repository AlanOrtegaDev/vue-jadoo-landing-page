<template>
  <section class="mt-20 md:mt-40 lg:mt-60 px-4 md:px-10 lg:px-10 xl:px-0">
    <div
      class="relative bg-periwinkle bg-opacity-20 rounded-tl-[130px] rounded-r-[20px] rounded-b-[20px] py-20 px-10 md:px-20 flex justify-center"
    >
      <div class="w-4/6">
        <h1 class="text-2xl font-semibold text-center leading-relaxed">
          Subscribe to get information, latest news and other interesting offers
          about <br class="hidden md:flex" />
          Jadoo
        </h1>
        <div
          class="flex flex-col md:flex-row md:gap-x-4 items-center mt-[74px]"
        >
          <div class="relative w-full flex">
            <nuxt-img
              class="absolute top-1/2 -translate-y-1/2 left-4 h-4 w-[18px]"
              src="/img/mail-icon.svg"
              loading="lazy"
            />
            <input
              class="w-full pl-11 pr-4 py-5 rounded-[10px] text-sm appearance-none placeholder:text-midnight-blue/70 outline-none"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <button
            class="bg-gradient-to-t from-[#FF7D68] to-[#FF946D] text-white font-semibold rounded-[10px] py-4 px-10 mt-4 md:mt-0"
          >
            Suscribe
          </button>
        </div>
      </div>
      <nuxt-img
        class="absolute -top-5 -right-2 w-[70px] h-[70px]"
        src="/img/send-rounded.svg"
        loading="lazy"
      />
      <nuxt-img
        class="absolute top-0 right-0 -z-10 w-[210px] opacity-10"
        src="/img/spring-right.svg"
        loading="lazy"
      />
      <nuxt-img
        class="hidden md:flex absolute bottom-0 left-6 -z-10 w-[350px] opacity-10"
        src="/img/spring-left.svg"
        loading="lazy"
      />
    </div>
  </section>
</template>
