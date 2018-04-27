const router = require('koa-router')();
const userInfoController = require('./../controller/user-info');

const routers=router.get('/',async (ctx)=>{
    const title="signup title";
    await ctx.render('home',{
        title
    })
}).post('/signup',userInfoController.signup)
.post('/signin',userInfoController.signin);

module.exports = routers;