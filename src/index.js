const Koa = require('koa')
const app = new Koa()
const koaStatic = require('koa-static')
const path = require('path')

const Router = require('koa-router')
const router = new Router()

const koaBody = require('koa-body')  //接受请求传入的参数


const ENV = 'dev-test' // 测试环境
const TEST_TOKEN = `token123456`

// 静态文件中间件
app.use(koaStatic(path.join(__dirname, 'uploads')))
// 访问时不需要加上uploads，如：http://localhost:3390/upload_07c7882c6b8a7a981b9ea4568209cf16.png


// 接受post参数解析
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 20 * 1024 * 1024,	// 设置上传文件大小最大限制，默认20M
        uploadDir: path.join(__dirname, 'uploads'),
        keepExtensions: true // 保存扩展名
    }
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

