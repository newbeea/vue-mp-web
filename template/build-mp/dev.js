'use strict'
require('./check-versions')()
const webpack = require('webpack')
const webpackConfig = require('./webpack.dev.conf')
const config = require('../config-mp')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const compiler = webpack(webpackConfig)
require('webpack-dev-middleware-hard-disk')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})
