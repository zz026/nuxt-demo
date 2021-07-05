<template>
  <div class="container">
    <div>
      <Logo />

      <div style="margin: 30px 0;">store: {{ this.$store.state.count }} {{ count }} {{ userInfo.name }} </div>
      <el-button @click="SET_Count(1)">SET_Count</el-button>
      <el-button @click="SET_Count_ACTION(3)">SET_Count_ACTION</el-button>
      <hr />
      <NuxtLink to="/home">home</NuxtLink>
      <NuxtLink to="/login">login</NuxtLink>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  async asyncData(context) {
    const { data } = await context.$axios.get('v3/user/get-user-protocol')
    return {
      content: data.content
    }
  },
  computed: {
    ...mapGetters(['count', 'userInfo'])
  },
  methods: {
    ...mapMutations(['SET_Count']),
    ...mapActions(['SET_Count_ACTION'])
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    margin: 10px 0;
  }
}
</style>
