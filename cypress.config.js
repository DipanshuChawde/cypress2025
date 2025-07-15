const { defineConfig } = require("cypress");
//excel payload---------
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');
//----------------------

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    video: true,
    //chromeWebSecurity: false,
    //includeShadowDom : true ,
    //baseUrl : 'https://opensource-demo.orangehrmlive.com/',
    setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin') (on); // for reports

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

      //excel payload--------------------
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath))
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      })
      //---------------------------------
    },
  },
});
