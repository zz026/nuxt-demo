<template>
  <div>
    这是首页
  </div>
</template>

<script>
export default {
  layout: 'NavBar',
  // 页面内自定义请求头
  head: {
    title: "home",
    meta: [
      { charset: "utf-8" },
      { name: "description", content: "dddddddddddddddddddddddddddddddddd" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto",
      },
    ],
  }
};
</script>

<style lang="scss" scoped>

.color {
  color: $colorRed;
}
</style>