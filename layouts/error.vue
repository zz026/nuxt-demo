<template>
  <div class="error">
    <h1 v-if="error.statusCode == 404">
      <NuxtLink to="/">
        <img src="~/assets/404.gif" class="404-image" />
      </NuxtLink>
    </h1>
    <h1 v-else>An error occurred</h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page
}
</script>

<style lang="scss" scoped>
.404-image {
  width: 100%;
}
</style>
