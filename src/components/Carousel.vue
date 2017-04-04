<template>
  <mt-swipe class="swipe" :style="compHeight">
    <mt-swipe-item  v-for="(item, index) in swipeArray" track-by="index">
      <img :src="item.image" alt="img" @click="goToDetail(item.url)">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      // 默认先来三张图，防止不显示组件
      swipeArray: [
        {
          "image": "https://img6.bdstatic.com/img/image/smallpic/w1.jpg",
          "url": "/detail?id=123"
        },
        {
          "image": "https://img6.bdstatic.com/img/image/smallpic/w2.jpg",
          "url": "/detail"
        },
        {
          "image": "https://img6.bdstatic.com/img/image/smallpic/guorong.jpg",
          "url": "/detail"
        }
      ],
      compHeight: ''
    }
  },
  props: {
    // 轮播图最多几个，从后端截取
    swipeNum: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  created: function () {
    this.getDataSwipe();

    this.compHeight = 'height: ' + this.height + 'rem';
  },
  methods: {
    getDataSwipe: function () {
      this.$http.get('/api/index_swipe.php').then(response => {
        console.log(response);
        this.swipeArray = response.body.data;
        this.swipeArray = this.swipeArray.slice(0, this.swipeNum);
      }, response => {
        console.log(response);
      });
    },
    goToDetail: function (url) {
        location.hash = url;
    }
  },
  watch: {
    swipeArray: function () {
      // this.swipeArray = this.swipeArray.slice(0, this.swipeNum);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .swipe {
    height: 8rem;
      img {
        width: 100%;
      }
  }
</style>
