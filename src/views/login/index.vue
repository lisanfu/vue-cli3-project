<template>
    <div class="cc-login">
      <div class="cc-login-wrapper">
        <div class="cc-login-form" @keyup.enter="doLogin">
          <el-card shadow="never"
            title="欢迎登陆"
          >
            <div slot="header" class="clearfix">
              <span>欢迎登陆</span>
            </div>
            <el-form ref="form" :model="form" :rules="rules">
              <el-form-item prop="name">
                <el-input v-model="form.name" placeholder="请输入用户名">
                  <cc-svg-icon style="padding-left: 5px;" slot="prefix" icon-class="user"></cc-svg-icon>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input autofocus v-model="form.password" type="password" placeholder="请输入密码">
                  <cc-svg-icon style="padding-left: 5px;" slot="prefix" icon-class="lock"></cc-svg-icon>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" style="width: 100%" size="small" @click="doLogin" :loading="loading">{{loading ? '正在登陆中...' : '登录'}}</el-button>
              </el-form-item>
              <p style="font-size: 12px;text-align: center;color: #999;">输入任意用户名密码登录</p>
            </el-form>
          </el-card>
        </div>
      </div>
    </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')
export default {
    name: 'cc-login',
    data () {
        return {
            form: {
                name: 'hello',
                password: ''
            },
            rules: {
                name: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            },
            loading: false
        }
    },
    computed: {
    },
    methods: {
        ...mapActions(['handleLogin']),
        doLogin () {
            this.loading = true
            this.$refs.form.validate(async validate => {
                if (validate) {
                    this.handleLogin({
                        username: this.form.name,
                        password: this.form.password,
                        loginDateTime: Date.now()
                    }).then(res => {
                        this.loading = false
                        this.$router.push('/dashboard')
                    })
                }
                this.loading = false
            })
        }
    }
}
</script>
<style lang="scss" scoped>
  .cc-login {
    &-wrapper {
      height: 100vh;
    }
    &-form {
      width: 330px;
      position: absolute;
      left: 0;
      right: 0;
      top: 20%;
      margin: auto;
    }
  }
</style>
