//dev,SIT,UAT,pre-prod,prod
/// <reference types='cypress' />
describe('environments in cypress', () => {
    it.only("environment example", () => {
        cy.visit('/index.html')
        cy.get('#login2').click()
        cy.wait(2000)
        //cy.log(Cypress.env('uid'))
        const userid = Cypress.env('uid')
        cy.get('[id="loginusername"]').should('be.visible').type(userid)
        cy.wait(2000)
        cy.get('#loginpassword').type(Cypress.env('pw'))
        cy.get('[onclick="logIn()"]').click()
        cy.get('#logout2').should('be.visible')
        cy.get('#nameofuser').should('contain',Cypress.env('uid'))
    })

    it("environment example", () => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        //cy.log(Cypress.env('uid'))
          cy.wait(2000)
        cy.get('[id="loginusername"]').type('dipanshu')
        cy.wait(2000)
        cy.get('#loginpassword').type('dipanshu@123')
        cy.get('[onclick="logIn()"]').click()
        cy.get('#logout2').should('be.visible')
       
    })
})

//npx cypress open --config-file uat.config.js
//npx cypress open --config-file sit.config.js










// firstway using npx cypress open
// npx cypress open --config-file production.config.js
// npx cypress open --config-file stagging.config.js

//second way using npx cypress run
//  npx cypress run --spec "cypress\e2e\3-basics\28.environments.cy.js" --browser chrome --headed --config-file prod.config.js
// npx cypress run --spec "cypress\e2e\3-basics\28.environments.cy.js" --browser edge --headed --config-file stage.config.js

//third way to create short cut command
// create below script command in package.json
// "stage-test" : "npx cypress run --spec 'cypress/e2e/3-basics/28.environments.cy.js' --browser edge --headed --config-file stage.config.js ",
// "prod-test" : "npx cypress run --spec 'cypress/e2e/3-basics/28.environments.cy.js' --browser chrome --headed --config-file prod.config.js"
// then run following command on cli
// npm run prod-test
// npm run stage-test