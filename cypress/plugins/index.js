const webpack = require('@cypress/webpack-preprocessor')

module.exports = (on, config) => {}

module.exports = on => {
  const options = {
    webpackOptions: require('../../webpack.common.js'),
    watchOptions: {},
  }
  on('file:preprocessor', webpack(options))
}
