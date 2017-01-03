### todo list vue demo
koa2 + vue 实现的一个 todo list demo
demo 虽小,也算是五脏俱全了.

>只是一个development模式的项目,并没有去配置production所需要的东西

### 依赖
因为 服务器端 使用了 es6(部分 node 还未支持的) 与 es7,需要将其转为 es5 去运行, 所以需要全局安装 `babel-cli`. 如果已安装,忽略这里.
> 虽然是个 demo, 服务端也就使用了 import 与 async …… 有点多此一举的感觉

```
  sudo npm install -g babel-cli
```

### 启动

```
  npm start
```

### 服务端
这里选择了 koa2 作为服务器框架. 只是简单的使用了下, 可以写很多有意思的中间件,这时候就会体验出 koa 的异步流程有多爽……

### Client

Vue + Vuex
基本上安装官方约束来写的。还算是比较规范。

demo 太小,还没用到 router ……
这里的 webpack 只是开发模式的配置, 没有配置生产环境的(css js 压缩加戳 gzip 等)

### 小结
vue 确实轻便, 上手也快.模块之间很容易就实现低耦合,但是好像想要高耦合好像也很难……

配合 vuex 的数据管理,在基础架子搭起来之后,迭代业务逻辑速度也是很快的.

项目比较容易管理与维护,Vue值得选择.

感觉跟 React 也差不了多少只不过书写方式不一样.吸取了 angular 一些指令的特点, 算是 angular 与 react 的优点结合?

总之为 Vue 点赞.

### 以上,致那颗骚动的心……
