<template>
  <div>
    <h1>User Agent</h1>
    <p>{{ userAgent }}</p>
  </div>
</template>

<script>
export default {
  name: 'ViewUserAgent',
  computed: {
    userAgent () {
      return this.$store.state.userAgent
    }
  }
}
</script>

<style>

</style>
