var path = require("path");
// var uglifyJSPlugin = require("uglifyjs-webpack-plugin");
// var dev = process.env.NODE_ENV === "dev";
var dev = true;
var modeOpt = dev ? "development" : "production";

var config = {
  entry: {
    bundle: "./src/js/app.js",
    initworkers: "./src/js/initworkers.js",
    worker: "./src/js/worker.js",
    others: "./src/js/others.js"
  },
  mode: modeOpt,
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
    publicPath: "/dist/"
  },
  devtool: dev ? "cheap-module-eval-source-map" : false,
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        loaders: ["url-loader"]
      }
    ]
  },
  plugins: []
};

// if (!dev) {
//   config.plugins.push(new UglifyJSPlugin());
// }

module.exports = config;
