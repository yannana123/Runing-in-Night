const express = require('express');
const app = express();
const cors = require('cors');

app.use(
  cors({
    origin: [
      'http://localhost:8848',
      'http://127.0.0.1:8848',
      'http://localhost:5500',
      'http://127.0.0.1:5500',
    ], //指定接收的地址
    methods: ['GET', 'POST', 'DELETE', 'PUT'], //指定接收的请求类型
    alloweHeaders: ['Content-Type', 'Authorization'], //指定header
  })
);
//设置端口
app.listen(3000);
//调用静态资源管理文件
app.use(express.static('./static'));
//转换对象
app.use(express.urlencoded());
//调用路由器
const user_router = require('./router/luru.js');
const admin_router = require('./router/admin.js');

app.use('/user', user_router);
app.use('/admin', admin_router);

app.use((err, req, res, next) => {
  //查看错误信息
  console.log(err);
  //响应500,返回相关信息
  res.status(500).send({
    code: 500,
    msg: '服务器错误',
  });
});
