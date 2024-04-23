<template>
  <section
    class="pt-10 md:pt-20 xl:pt-28 lg:px-12 px-4 md:px-10 xl:px-0 lg:mx-auto"
  >
    <div
      class="bg-[url('/img/decore-mobile.svg')] md:bg-[url('/img/decore.svg')] md:bg-center md:-top-10 md:h-[80vh] lg:h-[90vh] xl:h-[110vh] lg:bg-cover absolute -top-48 left-0 -z-10 w-full h-screen bg-cover bg-no-repeat"
    ></div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:mx-auto">
      <article class="text-center md:text-left lg:mt-10 xl:mt-0">
        <span
          class="text-cinnabar font-bold text-xl block w-[90%] md:w-full xl:text-2xl mx-auto md:whitespace-nowrap"
          >Best destinations around the world</span
        >
        <h1
          class="text-navy-blue font-bold font-volkhov text-5xl mt-6 md:mt-4 overflow-hidden leading-tight xl:text-[83px] xl:leading-tight"
        >
          Travel,
          <div class="relative inline-block">
            <span>enjoy</span>
            <nuxt-img
              class="absolute bottom-2 -left-6 object-cover -z-10 min-w-fit h-2 xl:h-3 xl:bottom-3 xl:-left-10"
              src="/img/decore-line.svg"
              loading="lazy"
            />
          </div>
          and live a new and full life
        </h1>
        <p
          class="text-royal-purple mt-10 font-medium md:mt-2 lg:pr-10 xl:w-[80%] xl:mt-5"
        >
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div
          class="flex flex-col md:flex-row md:justify-between lg:justify-start lg:gap-x-10 items-center mt-10 md:mt-6 gap-y-8 xl:mt-10"
        >
          <button
            class="text-white font-medium bg-tangerine px-6 py-3 rounded-lg text-lg shadow-xl shadow-tangerine/30 xl:py-4 xl:px-8 xl:text-xl"
          >
            Find out more
          </button>
          <div class="flex justify-center items-center gap-x-3">
            <button
              class="w-[52px] h-[52px] rounded-full bg-cinnabar text-white shadow-xl shadow-cinnabar/50"
            >
              <Icon name="ph:play-fill" size="20" />
            </button>
            <span class="font-medium xl:text-xl">Play Demo</span>
          </div>
        </div>
      </article>
      <div class="relative">
        <nuxt-img
          class="relative w-full md:scale-125 2xl:scale-100 md:-left-5 md:top-10 lg:w-full xl:scale-[115%] lg:top-0 xl:-top-10"
          src="/img/traveller.png"
          format="webp"
          loading="lazy"
        />
        <nuxt-img
          class="absolute top-12 left-14 md:-left-11 md:top-8 w-16 lg:w-20 lg:-top-8 lg:-left-16 xl:w-28 xl:-left-16 xl:-top-10"
          src="/img/plane.svg"
          loading="lazy"
        />
        <nuxt-img
          class="absolute top-20 right-5 md:right-8 md:top-16 w-16 -z-10 lg:w-20 lg:top-0 lg:right-12 xl:w-28 xl:right-8 xl:top-4"
          src="/img/plane.svg"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
