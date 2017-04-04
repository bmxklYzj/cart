# webpack

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 分割线

# 使用vue-cli 构建项目开发购物车

## vue-cli 初始化项目
vue-cli是vue官方提供的用于快速构建vue项目的脚手架，初始化项目十分有用，webpack都是配置好了的，开箱即用。

```bash
# 安装vue-cli
cnpm i -g vue-cli

# vue list 用于查看可以初始化是么类型的项目。都用下看下目录结构，我常用 vue init webpack my-project-name
vue list

  Available official templates:

  ★  browserify - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.
  ★  browserify-simple - A simple Browserify + vueify setup for quick prototyping.
  ★  simple - The simplest possible Vue setup in a single HTML file
  ★  webpack - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
  ★  webpack-simple - A simple Webpack + vue-loader setup for quick prototyping.
```

## 开发中遇到的问题

1. 打算做一个前后端分离的项目，就是前端请求ajax或php接口，后端只需要开发接口就行了。但是前端这里如何mock数据？

使用vue-resource请求的接口：

```js
  methods: {
    getDataSwipe: function () {
      this.$http.get('/api/index_swipe.php').then(response => {
        console.log(response);
        this.swipeArray = response.body.data;
      }, response => {
        console.log(response);
      });
    }
  }
```

这时候需要把get、post等请求先打到本地的mock数据中，
思路就是把所有api打头 .php结尾（如：`"api/xxx.php"`）的请求 都定向到mock文件夹中对应xxx.js文件中去

```
// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

// 上面几行是原有的代码，便于定位
// app.use('/api', express.static('./mock')) // 之所以不用这一行是因为我们需要特殊处理下，把前端请求的xx.php换成xx.js(前端的mock数据)，而且还需要用all方法处理所有请求
// )
app.all(/api(\/\w+)+\.php$/, function (req, res) {
  var url = req.url || '';
  url = url.replace(/api/, 'mock');
  var temp = url.split('.');
  fs.readFile(path.join(__dirname, '../', temp[0]) + '.js', 'utf-8', function (err, data) {
      if (err) {
        console.log(1, err);
        return;
      } else {
        // res.set('Content-Type','application/json');
        try {
          data = JSON.parse(data);
        } catch (err) {
          console.log(err);
        }
        res.send(data);
      }
  });
});
```

然后在src的根目录创建mock目录，里面写上mock数据就好了。


## 打包部署

weppack打包部署后发现静态文件的地址不对，解决： 在 `config/index.js` 中 `assetsPublicPath: '/',`, 改成 `assetsPublicPath: './',`，变成相对路径即可

主要打包可以把 productionSourceMap: false, 设成false减小体积

## api 接口梳理

[api md](./api.md) 页面还没写完，api也还差一些
