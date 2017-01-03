/**
 * Created by Jerry on 16/12/27.
 */

import Koa from "koa";
import koaStatic from "koa-static";
import opn from "opn";
import convert from "koa-convert";
const app = new Koa();

import webpackMiddle from "./webpack.middle";

//log 中间件
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    ctx.set('X-Response-Time', ms + 'ms');
});

//加载 koa 的 webpack 打包 与 热替换 插件
webpackMiddle.load(app);

//引用静态资源
app.use( convert(koaStatic("./public")) );

//启动服务
const port = 4000;
app.listen(port).on("listening", () => {
    console.log("服务已启动");
    opn(`http://localhost:${port}`);
});
