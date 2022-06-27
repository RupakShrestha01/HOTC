<template>
  <div class="font-ane">
    <div style="" class=""><TheHeader /></div>

    <div
      class="lg:flex sm:max-w-xl md:max-w-full lg:max-w-full-xl flex flex-wrap-reverse"
    >
      <TheBody></TheBody>
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
