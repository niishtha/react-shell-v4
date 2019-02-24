
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const assets = require('./dist/client/assetsManifest.json');

module.exports = function(env){
  return {
    mode: env,
    target: 'node',
    entry: {
      main: './src/server/index.js',
    },
    output: {
      path: path.resolve(__dirname, './dist/server'),
      filename: 'main.js',
    },
    module: {
      rules: [
        { test: /\.js$/, use: [ 'babel-loader'], exclude: /node_modules/},
        { test: /\.css$/, use: ['css-loader', 'postcss-loader'] },
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
          }
        }
      }
    },
    plugins: [
      new CleanWebpackPlugin(['./dist/server']),
      new webpack.DefinePlugin({
        __ASSETS__: JSON.stringify(assets),
      }),
    ]
  };
}