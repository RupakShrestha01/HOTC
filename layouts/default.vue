<template>
  <div class="font-ane">
    <TheHeader />
    <div class="flex mt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full-xl">
      <TheBody></TheBody>
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
