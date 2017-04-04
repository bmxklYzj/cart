<template>
  <div class="header">
    <div class="title">
      <p>在校园跳蚤市场</p>
      <p>淘到你想要的宝</p>
    </div>
    <mt-field v-model="userName" label="用户名" placeholder="请输入用户名"></mt-field>
    <mt-field v-model="password" label="密码" placeholder="请输入密码" type="password"></mt-field>

    <a class="login" @click="login()" :class="canSubmit ? 'login-can' : ''">登录</a>
    <a class="register" href="#/register">还没有注册？点此注册</a>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'hello',
  data () {
    return {
      userName: '',
      password: '',
      canSubmit: false
    }
  },
  props: {

  },
  created: function () {

  },
  methods: {
    login: function () {
      // 进行用户名和密码的校验，这里只校验非空且不少于6位
      if (this.canSubmit) {
        this.$http.post('/api/login.php',
          {
            userName: this.userName,
            password: this.password
          }).then(response => {
          var res = response.body.data.success;
          if (res) {
            // 后端验证成功，跳转到首页
            location.hash = '/';
          } else {
            Toast('用户名、密码错误，请重新登录');
          }

        }, response => {
        });
      } else {
        Toast({
          message: '用户名、密码必须是6位以上~',
          position: 'bottom',
        });
      }
    }
  },
  watch: {
    userName: function () {
      if (/\w{6,}/.test(this.userName) && /\w{6,}/.test(this.password)) {
        this.canSubmit = true;
      } else {
        this.canSubmit = false;
      }
    },
    password: function () {
      if (/\w{6,}/.test(this.userName) && /\w{6,}/.test(this.password)) {
        this.canSubmit = true;
      } else {
        this.canSubmit = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../static/assets/css/common.less';

  .header {
    margin-top: 5rem;
  }
  .title {
    margin: 2rem 0;
    font-size: 2rem;
    color: #999;
    text-align: center;
    p {
      margin: .5rem;
    }
  }
  a {
    display: block;
  }
  .login {
    width: 100%;
    text-align: center;
    line-height: 2.5rem;
    border-radius: 2px;
    margin: 2rem auto 1rem;
    background-color: lighten(@blue, 40%);
  }
  .login-can {
    background-color: @blue;
  }
  .register {
    font-size: .8rem;
    text-decoration: underline;
    color: @blue;
    text-align: center;
  }
</style>
