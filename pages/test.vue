<template>
  <div v-for="obj in apiResponse.results" :key="obj.id">
    <img :src="obj.header_image.small_square_crop" alt="" />
    <div v-bind="slug">{{ obj.slug }}</div>
  </div>
</template>

<script setup>
const { data: apiResponse } = await useFetch('http://127.0.0.1:8000/news/')
const slug = ref([])
console.log(slug)

definePageMeta({
  layout: false,
})
</script>

<style></style>
