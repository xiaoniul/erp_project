'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: 'http://LAPTOP-OV5ITJ9F:8000/erp/user-module/'
})
