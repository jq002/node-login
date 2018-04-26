import router from "koa-router";
import userInfoController from "./../controller/user-info"
const routers=router.get('/',async (ctx)=>{
    const title="signup title";
    await ctx.render('home',{
        title
    })
}).post('/signup',userInfoController.signup)
.post('/signin',userInfoController.signin);
export default routers;