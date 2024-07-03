'use strict'

import {
  addPlugin,
  addTemplate
} from '@nuxt/kit'

const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...moduleOptions,
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
