<template>
  <mt-search
    v-model="value"
    cancel-text="取消"
    placeholder="搜索"
    :result.sync="result" @input="search()">

    <ul class="search-result">
      <li v-for="(item, index) in result" @click="goToDetail(item.detailUrl)">
        <span class="left">{{item.title}}</span>
        <span class="right">{{item.value}}</span>
      </li>
    </ul>
   <!--  <mt-cell
      v-for="item in result"
      :title="item.title"
      :value="item.value" :to="'#' + item.detailUrl">
    </mt-cell> -->
  </mt-search>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      value: '',
      result: [{
        "title": 'title',
        "value": "value",
        "detailUrl": "detail?id=123"
      }, {
        "title": 'title',
        "value": "value",
        "detailUrl": "detail?id=123"
      }, {
        "title": 'title',
        "value": "value",
        "detailUrl": "detail?id=123"
      }]
    }
  },
  created: function () {
      // this.search();
  },
  methods: {
    search: function () {
      this.$http.post('./api/search.php?limit=10', {value: this.value}).then(response => {
        this.result = response.body.data;
        // this.swipeArray = response.body.data;
        }, response => {
      });
    },
    goToDetail: function (hash) {
      location.hash = hash;
    }
  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .search-result {
    margin-top: 1rem;
    line-height: 2rem;
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
    span {
      display: inline-block;
    }
    .left {
      width: 40%;
    }
    .right {
      width: 55%;
      text-align: right;
    }
  }
</style>
