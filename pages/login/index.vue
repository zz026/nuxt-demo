<template>
  <div>
    <el-form
      ref="formData"
      :model="formData"
      :rules="formRules"
      label-width="150px"
      label-suffix="："
      size="mini"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="formData.username" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formData.password" type="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="formData.gender">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="2">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
      </el-form-item>
    </el-form>
    <user-agreement />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import UserAgreement from './components/UserAgreement'

export default {
  components: {
    UserAgreement
  },
  data() {
    return {
      formData: {
        username: '',
        password: '',
        gender: ''
      },
      formRules: {
        username: [
          { required: true, message: '请输入账号' }
        ],
        password: [
          { required: true, message: '请输入密码' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['token'])
  },
  methods: {
    ...mapMutations(['SET_Count']),
    ...mapActions(['SET_Token_ACTION']),
     handleSubmit() {
      this.$refs.formData.validate(async (valid) => {
        if (valid) {
          const { data } = await this.$axios.post('/user/login', this.formData)
          console.log('r', data)
          this.SET_Token_ACTION(data.access_token)
          // const { path = '' } = this.$route.query
          // this.$router.replace({
          //   path
          // })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.el-form {
  width: 500px;
  padding: 50px 0;
}
</style>