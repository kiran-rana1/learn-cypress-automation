const { defineConfig } = require("cypress");
require("dotenv").config()

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 1000,
  redirectionLimit: 1000,
  defaultCommandTimeout: 30000,
  e2e: {
    baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env = {
        ...process.env,
        ...config.env
      }
      return config
    },
  },
  watchForFileChanges: false
});
