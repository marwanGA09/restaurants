const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const { default: merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");

module.exports = merge(webpackCommon, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].js", // Adding content hash for cache busting
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    minimizer: [
      new TerserPlugin(), // Minify JavaScript
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      //   minify: {
      //     collapseWhitespace: true,
      //     removeComments: true,
      //     removeRedundantAttributes: true,
      //     removeScriptTypeAttributes: true,
      //     removeStyleLinkTypeAttributes: true,
      //     useShortDoctype: true,
      //   },
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css", // Adding content hash for cache busting
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // Extract CSS into separate files
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader", // Handles image files
            options: {
              name: "[name].[contenthash].[ext]", // Adding content hash for cache busting
              outputPath: "images", // Specifies the output directory
            },
          },
        ],
      },
    ],
  },
});
