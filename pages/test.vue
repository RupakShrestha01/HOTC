<template lang="">
  <TheSearch></TheSearch>
</template>
<script setup>
const { data: apiResponse } = await useFetch('http://127.0.0.1:8000/news/')
</script>
