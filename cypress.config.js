const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //14.cyTask.cy.js------------------------
      //task1
      on('task', {
        myTask1() {
          console.log('hello')
          return null
        }
      })
      //task2
      on('task', {
        myTask2(name) {
          console.log(`hi... ${name} how are you?`)
          return null
        }
      })
      //task3
      on('task', {
        addition({ a, b }) {
          c = a + b
          console.log(`addition is ${c}`)
          return c
        }
      })
      //14.cyTask.cy.js------------------------
    },
  },
});
