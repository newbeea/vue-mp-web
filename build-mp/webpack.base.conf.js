'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config-mp')
const vueLoaderConfig = require('./vue-loader.conf')
const MpvuePlugin = require('webpack-mpvue-asset-plugin') // for mp
const MpvueEntry = require('mpvue-entry') // for mp
const glob = require('glob') // for mp
const fs = require('fs') // for mp

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: MpvueEntry.getEntry({
    pages: './src/router/routes.js',
    main: './src/main-mp.js'
  }), // for mp
  target: require('mpvue-webpack-target'), // for mp
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': 'mpvue', // for mp
      '@': resolve('src')
    },
    symlinks: false, // for mp
    aliasFields: ['mpvue', 'weapp', 'browser'], // for mp
    mainFields: ['browser', 'module', 'main'] // for mp
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'mpvue-loader', // for mp
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        use: [ // for mp
          'babel-loader',
          {
            loader: 'mpvue-loader', 
            options: {
              checkMPEntry: true
            }
          },
        ],
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]  
      },
      {        
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
            test: /\.less$/,

            loader: "style-loader!css-loader!less-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [ // for mp
    new MpvuePlugin(),
    new MpvueEntry()
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
