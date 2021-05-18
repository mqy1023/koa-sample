const Router = require('koa-router')
const router = new Router()
const { Leida } = require('../model/leida')

router.post('/add', async (ctx) => {
    const params = ctx.request.body

    try {
        let leida = { ...params }
        Leida.create(leida)

    } catch (e) {
        console.log(err)
    }
    ctx.body = {
        data: "添加成功",
        code: 20000
    }
})

router.get('/one/:name', async (ctx) => {
    const ldName = ctx.params.name

    console.log("ldName==", ldName)
    let oneLeida
    try {
        oneLeida = await Leida.findOne({
            where: {
                name: ldName || ""
            }
        })

    } catch (err) {
        console.log(err);
    }

    ctx.body = {
        code: 20000,
        data: oneLeida
    }
})


module.exports = router
