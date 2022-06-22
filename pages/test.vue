<template>
  <div>
    <h1>This is the Persons page</h1>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.query.page); // john
  },
};
</script>
