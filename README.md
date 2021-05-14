

## Koa 篇

`Koa` 是目前最流行的基于`Node.js`平台的`web`开发框架，利用 `async` 函数，`Koa `丢弃了回调函数，并有力地增强错误处理。 
`Koa` 并没有捆绑任何中间件，给人一种干净利落的感觉，体积小、编程方式干净


#### 一、koa-router

多路由拆分到`controller` 目录


#### 二、koa-body

`koa-body` 简化请求数据解析

```javascript
const koaBody = require('koa-body')  //接受请求传入的参数

// 接受post参数解析
index.use(koaBody({
    multipart: true
}))


// 使用
const bodyData = ctx.request.body // post请求body

const params = ctx.request.query // get请求的params
```


#### 三、nodemon 自动重启服务

`nodemon`用来监视node.js应用程序中的任何更改并自动重启服务

`nodemon src/index.js` 启动命令


#### 四、使用Sequelize操作数据库

`npm install mysql2 sequelize -s`

* 1、封装数据库操作，查看 `utils/db.js`

* 2、创建数据表对应的模型对象，查看 `model/Leida.js`

* 3、基本使用，查看 `controller/leida.js`




