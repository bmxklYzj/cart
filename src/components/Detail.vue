<template>
  <div>
    <mt-navbar v-model="selected" :fixed="true">
      <mt-tab-item :id="1">图文详情</mt-tab-item>
      <mt-tab-item :id="2">他人评价</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="1" class="tab-container-item">
        <p>{{detailContent}}</p>
        <ul>
          <li v-for="item in picList">
            <img v-lazy="item">
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item :id="2" class="tab-container-item tab-container-item-comment">
        <ul>
          <li v-for="item in comment">
            <div class="head">
              <img :src="item.avator" alt="userAvator">
              <span class="time">{{item.commentTime}}</span>
            </div>
            <div class="content">{{item.content}}</div>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>


    <!-- footer: 收藏、加入购物车、立即购买 -->
    <footer>
      <ul>
        <li class="collect" @click="collect()">{{isCollected ? "取消收藏" : "收藏"}}</li>
        <li class="cart" @click="addToCart()">{{isAddedToCart ? "移除" : "加入购物车"}}</li>
        <li class="buy" @click="buy()">立即购买</li>
      </ul>
    </footer>

  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'hello',
  data () {
    return {
      selected: 1,
      detailId: '123',
      isCollected: false,
      isAddedToCart: false,
      detailContent: "详情页介绍详情页介绍详情页介绍详情页介绍详情页介绍详情页介绍详情页介绍详情页介绍详情页介绍详情页介绍详情页介绍",
      picList: [
        "https://img6.bdstatic.com/img/image/smallpic/w1.jpg",
        "https://img6.bdstatic.com/img/image/smallpic/w2.jpg",
        "https://img6.bdstatic.com/img/image/smallpic/guorong.jpg",
        "https://img6.bdstatic.com/img/image/smallpic/w4.jpg",
        "https://img6.bdstatic.com/img/image/smallpic/w5.jpg",
        "https://img6.bdstatic.com/img/image/smallpic/w6.jpg",
        "https://img6.bdstatic.com/img/image/smallpic/w7.jpeg",
        "https://img6.bdstatic.com/img/image/smallpic/w8.jpg",
        "https://img6.bdstatic.com/img/image/smallpic/w9.jpg",
        "https://img6.bdstatic.com/img/image/smallpic/w10.jpg"
      ],
      comment: [{
        "username": "yzj",
        "commentTime": "2017-03-22",
        "avator": "https://img6.bdstatic.com/img/image/smallpic/w1.jpg",
        "content": "评价详情内容"
      }, {
        "username": "yzj2",
        "commentTime": "2017-03-22",
        "avator": "https://img6.bdstatic.com/img/image/smallpic/guorong.jpg",
        "content": "评价详情内容"
      }, {
        "username": "yzj3",
        "commentTime": "2017-03-22",
        "avator": "https://img6.bdstatic.com/img/image/smallpic/w9.jpg",
        "content": "评价详情内容"
      }]
    }
  },
  components: {

  },
  created: function () {
  },
  methods: {
    collect: function () {
      Toast({
        message: this.isCollected ? '取消收藏成功~' : '收藏成功~',
        position: 'bottom',
        duration: 2000
      });
      this.$http.post('./api/detail_collect.php', {isCollected: !this.isCollected}).then(response => {
        // this.swipeArray = response.body.data;
        this.isCollected = !this.isCollected;
      }, response => {
      });
    },
    addToCart: function () {
      Toast({
        message: this.isAddedToCart ? '从购物车移除成功' : '加入到购物车成功~',
        position: 'bottom',
        duration: 2000
      });
      this.$http.post('./api/detail_add_cart.php', {isAddedToCart: !this.isAddedToCart}).then(response => {
        this.isAddedToCart = !this.isAddedToCart;
        // this.swipeArray = response.body.data;
        }, response => {
      });
    },
    buy: function () {
      Toast({
        message: '正在跳转到购买页面~',
        position: 'bottom',
        duration: 2000
      });
      this.$http.post('./api/detail_buy.php', {detailId: this.detailId}).then(response => {
        var res = response.body.data.success;
        if (res) {
          // 跳转到下单支付页面

        } else {
          Toast({
            message: '出错啦，暂时无法购买~',
            position: 'bottom',
            duration: 2000
          });
        }
      }, response => {
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  ul {
    list-style: none;
    padding-left: 0;
    img {
      width: 100%;
    }
  }
  .tab-container-item {
    margin-top: 3rem;
    p {
      color: #666;
      padding: 0 .2rem;
    }

    &-comment {
      box-sizing: border-box;
      padding: 0 1rem;
      li {
        padding-bottom: 1rem;
        margin-bottom: .5rem;
        border-bottom: 1px solid #ddd;
      }
      img {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }
      .time {
        float: right;
        color: #999;
      }
      .content {
        color: #666;
      }
    }
  }

  footer {
    font-size: 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    ul {
      margin: 0;
    }
    li {
      color: #fff;
      font-size: 1rem;
      display: inline-block;
      width: 33.3%;
      height: 2.5rem;
      text-align: center;
      line-height: 2.5rem;
      // box-sizing: border-box;
      // border-right: 1px solid #fff;
      // &:last-child {
      //   border-right: 0;
      // }
    }
    .collect {
      background-color: #FF703F;
    }
    .cart {
      background-color: #FFB03F;
    }
    .buy {
      background-color: #F23030;
    }
  }
</style>
