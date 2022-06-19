<template>
  <div
    class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
  >
    <div class="mx-auto sm:text-center lg:max-w-2xl">
      <div
        class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  text-gray-900 sm:text-4xl md:mx-auto uppercase"
        >
          {{ mountain.title }}
        </h2>
              <div class="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
        <img
          class="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
          :src="mountain.header_image.detail"
          alt=""
        />
      </div>
              <p class="max-w-xl mb-4 text-base text-gray-700 font-semibold sm:mx-auto text-right">
        {{ mountain.updated_at}}
      </p>
        <p class="text-base text-gray-700 md:text-lg" >
          <div class="text-justify first-line:uppercase
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left" v-html="mountain.content ">
          </div>
        </p>
      </div>


    </div>
  </div>
</template>

<script setup >
import {} from '#app'
const route = useRoute()
const name = route.params.slug
const { data: mountain } = useFetch('http://127.0.0.1:8000/news/' + name)
</script>

<style></style>
