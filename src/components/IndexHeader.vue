<template>
  <div class="header">
    <input type="text" @click="goToSearch()">
    <span @click="login()">登录</span>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  },
  props: {

  },
  created: function () {

  },
  methods: {
    goToSearch: function () {
        location.hash = '/search';
    },
    login: function () {
        location.hash = '/login';
    }
  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .header {
    height: 2rem;
    line-height: 2rem;
    padding: 0 .5rem;
  }
  input {
    width: 80%;
  }
  span {
    float: right;
    width: 15%;
  }
</style>
