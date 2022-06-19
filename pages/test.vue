<template>
  <div v-for="obj in galleryResponse.results" :key="obj.id">
    {{ obj.file }}
  </div>
</template>

<script setup>
const { data: galleryResponse } = useFetch('http://127.0.0.1:8000/download/')
definePageMeta({
  layout: false,
})
</script>

<style></style>
