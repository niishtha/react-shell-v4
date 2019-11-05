const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = function(env){
  const isProd = env === 'production';
  return {
    mode: env,
    entry: {
      main : path.resolve(__dirname, './src/client/index.js'),
    },
    output: {
      path: path.resolve(__dirname, './dist/client'),
      filename: '[name].js',
      publicPath: process.env.APP_PUBLIC_PATH,
      globalObject: 'this',
    },
    module: {
      rules: [
        { test: /\.js$/, use: [ 'babel-loader'], exclude: /node_modules/},
        { test: /\.worker.js$/, use: [{ loader: 'worker-loader', options: { name: 'WorkerName.[hash].js' } }], exclude: /node_modules/,},
        { test: /\.css$/, use: [ 'style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader']},
      ]
    },
    devtool: 'source-map',
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
      runtimeChunk: 'single',
    },
    plugins: [
      new CleanWebpackPlugin(['./dist/client']),
      new AssetsPlugin({
        filename: 'assetsManifest.json',
        path: path.resolve('./dist/client'),
        prettyPrint: true,
      }),
      new CopyWebpackPlugin([
        { from: './src/offline', to: 'offline/[name].00000002.[ext]' },
      ]),
      new SWPrecacheWebpackPlugin({
        cacheId: 'clarisights',
        filename: 'serviceWorker.js',
        staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
        importScripts: [
          'offline/offline.00000002.js',
        ],
        dontCacheBustUrlsMatching: /./,
        minify: true,
      }),
      ...(isProd ? [
          new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
          })
        ] : [])
    ],
    
    devServer: {
      contentBase: path.resolve('./build/client'),
      headers: { 'Access-Control-Allow-Origin': '*' },
      stats: 'errors-only',
      overlay: true,
    },
  };
}