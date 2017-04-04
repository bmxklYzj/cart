<template>
  <section class="component-grid-container">
    <div class="component-grid" v-for="(item, index) in items" :style="'width: ' + 100 / column + '%'" @click="goToDetail(item.url)">
      <p class="component-grid-title">{{item.title}}</p>
      <p class="component-grid-desc">{{item.description}}</p>
      <div class="img-wrap">
        <img :src="item.image" alt="image">
      </div>
    </div>
  </section>
</template>

<script>
// import '../../static/assets/css/common.less'

export default {
  name: 'hello',
  data () {
    return {
      items: [{"title":"title0描述0描述0描述0描述0","description":"描述0描述0描述0描述0描述0描述0","image":"https://img6.bdstatic.com/img/image/smallpic/w1.jpg","url":"/detail?id=123"},{"title":"title1","description":"描述1","image":"https://img6.bdstatic.com/img/image/smallpic/w1.jpg","url":"/detail?id=123"},{"title":"title2","description":"描述2","image":"https://img6.bdstatic.com/img/image/smallpic/w1.jpg","url":"/detail?id=123"},{"title":"title3","description":"描述3","image":"https://img6.bdstatic.com/img/image/smallpic/w1.jpg","url":"/detail?id=123"},{"title":"title4","description":"描述4","image":"https://img6.bdstatic.com/img/image/smallpic/w1.jpg","url":"/detail?id=123"},{"title":"title5","description":"描述5","image":"https://img6.bdstatic.com/img/image/smallpic/w1.jpg","url":"/detail?id=123"},{"title":"title6","description":"描述6","image":"https://img6.bdstatic.com/img/image/smallpic/w1.jpg","url":"/detail?id=123"},{"title":"title7","description":"描述7","image":"https://img6.bdstatic.com/img/image/smallpic/w1.jpg","url":"/detail?id=123"},{"title":"title8","description":"描述8","image":"https://img6.bdstatic.com/img/image/smallpic/w1.jpg","url":"/detail?id=123"},{"title":"title9","description":"描述9","image":"https://img6.bdstatic.com/img/image/smallpic/w1.jpg","url":"/detail?id=123"},{"title":"title10","description":"描述10","image":"https://img6.bdstatic.com/img/image/smallpic/w1.jpg","url":"/detail?id=123"},{"title":"title11","description":"描述11","image":"https://img6.bdstatic.com/img/image/smallpic/w1.jpg","url":"/detail?id=123"}]
    }
  },
  props: {
    column: {
      type: Number,
      required: true
    }
  },
  created: function () {
    this.getDataItem();

    // 每一行有几个

  },
  methods: {
    getDataItem: function () {
      this.$http.get('/api/index_item.php').then(response => {
        this.swipeArray = response.body.data;
      }, response => {
      });
    },
    goToDetail: function (url) {
      location.hash = url;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../../static/assets/css/common.less';

  .component-grid {
    &-container {
      font-size: 0;
    }

    box-sizing: border-box;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    width: 33.3%;
    height: 8rem;
    overflow: hidden;
    display: inline-block;
    font-size: .8rem;
    margin-top: .3rem;

    p {
      margin: 0;
      line-height: 1.2;
    }
    &-title,
    &-desc {
      padding-left: .4rem;
      width: 100%;
      .line-camp();
      color: #333;
    }
    &-desc {
      color: #999;
    }
    .img-wrap {
      text-align: center;
      img {
        // width: 60%;
      }
    }
  }
</style>
