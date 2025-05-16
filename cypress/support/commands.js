// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Cypress.Commands.add('cmdName', (arguments) => { ... })

Cypress.Commands.add('OHRMlogin', (ud, pw) => {
    cy.get('[name="username"]').type(ud)
    cy.get('[name="password"]').type(pw)
    cy.get('button[type="submit"]').click()
})

//16.iframe.cy.js
Cypress.Commands.add('iframe', (uniqueSelector) => {
    return cy.get(uniqueSelector).its('0.contentDocument.body').then(cy.wrap)
 })