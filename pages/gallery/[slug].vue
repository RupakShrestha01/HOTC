<template>
  <div class="" v-for="obj in mountain" :key="obj.id">
    <div v-for="item in obj" :key="item.id">
      <img
        class="object-cover w-full h-full md:h-64 xl:h-80"
        :src="item.image.detail"
        alt="Person"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from '#app'
const route = useRoute()
const name = route.params.slug
const { data: mountain } = useFetch('http://127.0.0.1:8000/gallery/' + name)
</script>

<style></style>
