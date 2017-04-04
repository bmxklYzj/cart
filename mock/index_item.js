// var data = [];

// for (var i = 0; i < 10; i++) {
//   data.push({
//     "title": "title" + i,
//     "description": "描述" + i,
//     "image": "https://img6.bdstatic.com/img/image/smallpic/w1.jpg"
//   })
// }

// var res = {
//   "status": 200,
//   "error": null,
//   "data": data
// }

// return res;
(function() {

  var data = [];

  for (var i = 0; i < 12; i++) {
    data.push({
      "title": "title" + i,
      "description": "描述" + i,
      "image": "https://img6.bdstatic.com/img/image/smallpic/w1.jpg",
      "url": "/detail?id=123"
    })
  }

  var res = {
    status: 200,
    error: null,
    "data": data
  }

  return res;
})();
