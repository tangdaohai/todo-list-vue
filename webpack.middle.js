/**
 * Created by Jerry on 16/12/28.
 */
import webpack from "webpack";
import config from "./webpack.config";
import convert from "koa-convert";

const dev = {
    quiet: false,
    noInfo: !0,
    historyApiFallback: false,
    publicPath: "/",
    filename: "js/[name].js",
    stats: {
        colors: true,
        chunks: false
    },
    headers: {"X-Custom-Header": "yes"}
}

module.exports = {
  load: app => {
      const compile = webpack(config);

      //打包
      app.use( convert(require("koa-webpack-dev-middleware")(compile, dev)) );
      //热替换
      app.use( convert(require("koa-webpack-hot-middleware")(compile)) );
  }
};
