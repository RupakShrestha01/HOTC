<template>
  <div class="font-ane">
    <div style="" class=""><TheHeader /></div>

    <div class="lg:flex mt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full-xl ">
      <TheBody></TheBody>
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
