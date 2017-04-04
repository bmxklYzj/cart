# 购物车

## api/index_item.php首页格子的数据

请求：
get：请求参数：`?startPos=0&limit=10 `
startPos 查询起始位置，limit需要的个数

返回：

```
{
    status: 200,
    error: null,
    "data": [{
        "title":"title0描述0描述0描述0描述0",
        "description":"描述0描述0描述0描述0描述0描述0",
        "image":"https://img6.bdstatic.com/img/image/smallpic/w1.jpg",
        "url":"/detail?id=123"
      }]
  }
```

## api/login.php 登录

请求：
post：请求参数：

```
{
  userName: this.userName,
  password: this.password
}
```

返回：

```
{
    "status": 200,
    "error": null,
    "data": {
      "success": true
    }
  }
```

## pai/register.php 注册

请求：
post：请求参数：

```
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
}
```

返回参数同登录

## api/search.php 查询接口

请求：url中的query为?limit=10 表示返回10个
post：请求参数：

```
{value: this.value}
```

返回：

```
{
    "status": 200,
    "error": null,
    "data": [
      {
        "title": 'title',
        "value": "value",
        "detailUrl": "detail?id=123"
      }
    ]
  }
```

## api/detail.php?detailId=123 详情页 (注意是camel-case命名法 detail + Id)

请求：
get：请求参数：无

返回：


  detailId: '123',  // 详情页的id
      isCollected: false, // 之前是否收藏过
      isAddedToCart: false, // 之前是否添加到购物车
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

## api/detail_collect.php 切换收藏

请求：
get：请求参数：`{isCollected: true/false}`
返回：

  {
      "status": 200,
      "error": null,
      "data": {
        "success": true
      }
    }


## api/detail_add_cart.php 切换添加到购物车

请求：
get：请求参数：`{isAddedToCart: true/false}`
返回：

  {
      "status": 200,
      "error": null,
      "data": {
        "success": true
      }
    }

## api/detail_buy.php
这个接口在详情页似乎是没用的


