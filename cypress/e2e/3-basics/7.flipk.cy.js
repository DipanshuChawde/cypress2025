///<reference types='cypress' />

describe('verify traversing tech in cypress', () => {

it.only('flipkart', () => {
    cy.visit('https://www.flipkart.com/')
    cy.get('input[title="Search for Products, Brands and More"]').type('bag {enter}')
    cy.get('[class="BUOuZu"] > span').should('contain','bag')
    
})
})