<template>
  <h1>Hello Api {{ name }}</h1>
  <h1>{{ mountain }}</h1>
</template>

<script setup lang="ts">
import {} from '#app'
const route = useRoute()
const name = route.params.slug
const { data: mountain } = useFetch('http://127.0.0.1:8000/news/' + name)
</script>

<style></style>
