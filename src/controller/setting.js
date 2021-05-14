const Router = require('koa-router')
const router = new Router()

router.get('/info', async (ctx) => {
    const query = ctx.request.query

    let data = { isOpen: true }
    ctx.body = {
        data,
        code: 20000
    }
})

router.post('/test', async (ctx) => {
    const params = ctx.request.body

    // console.log("params==", params)
    ctx.body = {
        data: params,
        code: 20000
    }
})


module.exports = router
