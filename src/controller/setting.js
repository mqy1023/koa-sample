const Router = require('koa-router')
const router = new Router()
const path = require('path')
const fs = require('fs')

router.get('/info', async (ctx) => {
    const query = ctx.request.query

    let data = {isOpen: true}
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

router.post('/upload', async (ctx) => {

    const file = ctx.request.files.file
    const baseName = path.basename(file.path)
    const fileUrl = `${ctx.origin}/${baseName}`

    ctx.body = {
        data: fileUrl  || "上传成功",
        code: 20000
    }
})


module.exports = router
