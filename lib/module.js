'use strict'

const { resolve } = require('path')
const {
  addPlugin,
  addTemplate
} = require('@nuxt/kit')

module.exports = function (moduleOptions) {
  const options = {
    ...moduleOptions
    // ...this.options.recaptcha
  }

  addPlugin({
    fileName: 'recaptcha.js',
    options,

    src: resolve(__dirname, 'plugin.js')
  })

  addTemplate({
    fileName: 'recaptcha.vue',
    src: resolve(__dirname, 'recaptcha.vue')
  })
}

module.exports.meta = require('../package.json')
