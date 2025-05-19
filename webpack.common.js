const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/app.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    fallback: {
      process: require.resolve("process/browser"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "src/public"),
          to: path.join(__dirname, "dist"),
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin({
      logo: path.join(__dirname, "src/public/favicon.png"),
      favicons: {
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          favicons: true,
          windows: false,
          yandex: false,
        },
      },
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
