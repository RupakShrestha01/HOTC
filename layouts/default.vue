<template>
  <TheHeader />
  <div
    class="flex mt-12 lg:gap-32 md:gap-22 sm:gap-10 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full-xl md:px-6 lg:px-8 sm:px-4"
  >
    <TheBody></TheBody>
    <slot />
  </div>
  <TheFooter />
</template>
