import router from "koa-router";
import home from "./home";
router.use('/home',home.route(),home.allowedMethods());

export default router;