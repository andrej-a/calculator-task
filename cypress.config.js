/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */
const {
  defineConfig,
} = require("cypress")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: 'http://localhost:3000/'
    },
  },
})
