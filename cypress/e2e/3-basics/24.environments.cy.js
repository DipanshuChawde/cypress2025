//dev,SIT,UAT,pre-prod,prod
/// <reference types='cypress' />
describe('environments in cypress', () => {
    it("environment example", () => {
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
        cy.get('#nameofuser').should('contain', Cypress.env('uid'))
    })

})


// firstway using npx cypress open
//npx cypress open --config-file uat.config.js
//npx cypress open --config-file sit.config.js

//second way using npx cypress run
//npx cypress run --spec "cypress/e2e/3-basics/24.environments.cy.js" --headed --browser edge --config-file sit.config.js
//npx cypress run --spec "cypress/e2e/3-basics/24.environments.cy.js" --headed --browser edge --config-file uat.config.js

//third way to create short cut command
// create below script command in package.json
//"uat-test" : "npx cypress run --spec 'cypress/e2e/3-basics/24.environments.cy.js' --headed --browser edge --config-file uat.config.js",
//"sit-test" : "npx cypress run --spec 'cypress/e2e/3-basics/24.environments.cy.js' --headed --browser edge --config-file sit.config.js"
// then run following command on cli
// npm run prod-test
// npm run stage-test


