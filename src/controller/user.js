const Router = require('koa-router')
const router = new Router()

router.get('/one', async (ctx) => {
    const params = ctx.request.query

    // 获取到拼接到url后面?p1=123  的值
    console.log("params.p1=", params.p1 || "")

    let result = await new Promise((resolve => {
        // 2秒后返回数据
        setTimeout(() => {
            let data = { name: "abc12345678" }
            resolve(data)
        }, 2000)
    }))

    // 返回body
    ctx.body = {
        data: result,
        code: 20000
    }
})


router.get('/all', async (ctx) => {

    let data = [{ name: "aaa" }, { name: "bbb" }]
    ctx.body = {
        data,
        code: 20000
    }
})


module.exports = router
