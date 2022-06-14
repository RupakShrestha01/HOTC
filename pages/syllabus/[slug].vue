<!-- <template>
  <h1>Hello Api {{ name }}</h1>
  <h1>{{ mountain }}</h1>
</template> -->
<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="mx-auto sm:text-center lg:max-w-2xl">
      <div
        class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
        >
          {{ name }}
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          {{ mountain.content }}
        </p>
      </div>
      <div class="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
        <link rel="file" :href="mountain.file" />
      </div>
      <p class="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud ullamco laboris aliquip ex ea.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from '#app'
const route = useRoute()
const name = route.params.slug
const { data: mountain } = useFetch('http://127.0.0.1:8000/syllabus/' + name)
</script>

<style></style>
