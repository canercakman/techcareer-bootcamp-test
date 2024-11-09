const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7hp7po",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
