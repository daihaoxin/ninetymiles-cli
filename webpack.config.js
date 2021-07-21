const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackCommon = require('./config/webpack.common');
// const nodeExternals = require('webpack-node-externals');
// const StartServerPlugin = require('start-server-webpack-plugin');
// import * as StartServerPlugin from "start-server-webpack-plugin";
// const StartServerWebpackPlugin = require('./src/webpackPlugins/start-server-webpack-plugin');
const outputFilename = 'index.js';

module.exports = merge(webpackCommon, {
  entry: './src/index.ts',
  devtool: 'source-map',
  mode: 'development',
  target: 'node',
  // externals: nodeModules,
  // externals: [
  //   nodeExternals({
  //     allowlist: ['webpack/hot/signal'],
  //   }),
  // ],
  // externalsPresets:{
  //   node: true
  // },
  module: {
    rules: [],
  },
  resolve: {
    extensions: ['.ts', '.js', 'json'],
    modules: [path.resolve(process.cwd(), 'src'), path.resolve(process.cwd(), 'node_modules')],
  },
  output: {
    filename: outputFilename,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // new StartServerPlugin({
    //   name: outputFilename,
    //   signal: true,
    //   nodeArgs: ['--inspect'],
    //   isCommandLine: true,
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
    new webpack.BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true,
    }),
    // new StartServerWebpackPlugin({
    //     name: outputFilename,
    //     signal: true,
    //     // nodeArgs: ['--inspect']
    // })
  ],
});
