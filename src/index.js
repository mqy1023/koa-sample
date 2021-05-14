const Koa = require('koa')
const app = new Koa()

const Router = require('koa-router')
const router = new Router()

const koaBody = require('koa-body')  //接受请求传入的参数


const ENV = 'dev-test' // 测试环境
const TEST_TOKEN = `token123456`

// 接受post参数解析
app.use(koaBody({
    multipart: true
}))



// 全局中间件, 可以用来配置一些全局参数
app.use(async (ctx, next) => {
    ctx.state.env = ENV //定义整个项目的全局变量
    ctx.state.token = TEST_TOKEN //定义整个项目的全局变量
    await next()
})


// 合并路由
const setting = require('./controller/setting.js')
router.use('/setting', setting.routes())

const user = require('./controller/user.js')
router.use('/user', user.routes())

// 测试数据库相关的
const leida = require('./controller/leida.js')
router.use('/leida', leida.routes())


app.use(router.routes())
app.use(router.allowedMethods()) // 允许get/post/put/delete这些请求方法

app.listen('3390', () => {
    console.log('服务开启在3390端口')
})

