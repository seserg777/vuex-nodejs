<template>
  Product | {{ this.$route.query.id }} | {{ this.id }}
</template>

<script>
export default {
  name: "Product",
  props: ['id']
}
</script>

<style scoped>

</style>