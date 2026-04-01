const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://todomvc.com/examples/javascript-es6/dist/'
    },
  
});
