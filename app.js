const Koa = require('koa');
const views = require('koa-views')
const path = require('path')
const convert = require('koa-convert');
const koaStatic = require('koa-static');
const koaLogger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const config = require('./config');
const routers = require('./routes/index');
const app = new Koa();

app.use(koaLogger());//控制台日志中间件
app.use(bodyParser());//ctx.body解析中间件
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
}));//服务端模板渲染引擎中间件
//静态资源加载中间件
app.use(koaStatic(path.join(__dirname,'./static')));

mongoose.connect(config.database);

app.use(routers.routes()).use(routers.allowedMethods());
app.listen(3003);
console.log('the server is starting at port 3003');