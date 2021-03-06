const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: {
    app: [
      "@babel/polyfill",
      "./src/app.js"
    ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js"
  },

  devServer: {
    port: 4000
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
      ]
      },

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'app.bundle.css',
    })
  ]
};
