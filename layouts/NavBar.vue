<template>
  <div class="container">
    <Nuxt class="nuxt" />
    <el-row type="flex">
      <el-col>首页</el-col>
      <el-col>订单</el-col>
      <el-col>消息</el-col>
      <el-col>我的</el-col>
    </el-row>
  </div>
</template>


<style lang="scss" scoped>
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  .nuxt {
    flex: 1;
    width: 100%;
  }
  .el-row {
    width: 100%;
  }
  .el-col {
    text-align: center;
    cursor: pointer;
    height: 80px;
    line-height: 80px;
    background-color: #409EFF;
    color: #fff;
    border-right: 1px solid #fff;
    border-radius: 20px 20px 0 0;
    &:hover {
      transform: translateY(-10px);
      background-color: coral;
    }
  }
}
</style>