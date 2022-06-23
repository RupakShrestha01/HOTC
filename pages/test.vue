<template lang="">
  <div v-for="obj in apiResponse" ::key="obj.id">
  
    {{obj.menu_items}}
  </div>
</template>
<script setup>
const {data:apiResponse} =  useFetch('http://127.0.0.1:8000/menus/')
</script>
