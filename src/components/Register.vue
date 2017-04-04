<template>
  <div class="header">
    <div class="title">
      <p>校园跳蚤市场</p>
    </div>
    <form >
      <div class="form-row">
        <span>*</span>
        <mt-field v-model="userName" label="用户名" placeholder="请输入用户名（昵称）"></mt-field>
      </div>
      <div class="form-row">
        <span>*</span>
        <mt-field v-model="password" label="密码" placeholder="请输入密码" type="password"></mt-field>
      </div>
      <div class="form-row">
        <span>*</span>
        <mt-field v-model="passwordCinfirm" label="确认密码" placeholder="请确认密码" type="password"></mt-field>
      </div>
      <mt-field v-model="qqNumber" label="QQ号码" placeholder="请输入QQ号码" type="text"></mt-field>
      <mt-field v-model="privince" label="省份" placeholder="请输入省份" type="text"></mt-field>
      <mt-field v-model="school" label="学校" placeholder="请输入学校" type="text"></mt-field>
      <mt-field v-model="studentId" label="学号" placeholder="请输入学号" type="text"></mt-field>
      <mt-field v-model="educationLevel" label="学位" placeholder="请输入学位" type="text"></mt-field>
      <mt-field v-model="enrollYear" label="入学年份" placeholder="请输入入学年份" type="text"></mt-field>
      <a class="login" @click="register()">注册</a>
      <a class="register" href="#/login">已有账号？直接登录</a>
    </form>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'register',
  data () {
    return {
      url: './api/register.php', // 表单提交的后端地址
      userName: '',
      password: '',
      passwordCinfirm: '',
      qqNumber: '',
      privince: '',
      school: '',
      studentId: '',
      educationLevel: '',
      enrollYear: ''
    }
  },
  props: {

  },
  created: function () {

  },
  methods: {
    register: function () {
      if (this.password !== this.passwordCinfirm) {
        Toast({
          message: '密码和确认密码不相等!请重新输入~',
          position: 'bottom',
        });
        return;
      }
      // 进行用户名和密码的校验，这里只校验非空且不少于6位.验证两个密码是否相等
      if (/\w{6}/.test(this.userName) && /\w{6}/.test(this.password)) {

        this.$http.post('./api/register.php',
          {
            userName: this.userName,
            password: this.password,
            passwordCinfirm: this.passwordCinfirm,
            qqNumber: this.qqNumber,
            privince: this.privince,
            school: this.school,
            studentId: this.studentId,
            educationLevel: this.educationLevel,
            enrollYear: this.enrollYear
          }).then(response => {
          var res = response.body.data.success;
          if (res) {
            // 后端验证成功，跳转到首页
            location.hash = '/';
          } else {
            let errorMsg = response.body.data.error || '用户名、密码错误，请重试';
            Toast(errorMsg);
          }

        }, response => {
        });
      } else {
        Toast({
          message: '用户名、密码必须是6位以上',
          position: 'bottom',
        });
      }
    },
    submit: function () {
      return true;
    }
  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../static/assets/css/common.less';


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
    background-color: @blue;
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

  .form-row {
    position: relative;
    span {
      position: absolute;
      top: 1rem;
      color: red;
      z-index: 1;
    }
  }
</style>
