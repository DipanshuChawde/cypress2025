//https://example.cypress.io/commands/traversal
///<reference types='cypress' />

describe('verify traversing tech in cypress',()=>{
    beforeEach(()=>{
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    })

    it('traversing',()=>{
        cy.get('.traversal-drinks-list  > li').should('have.length',5)

        cy.get('.traversal-drinks-list  > li').first().should('have.text','Coffee')
        cy.get('.traversal-drinks-list  > li').eq(1).should('have.text','Tea')
        cy.get('.traversal-drinks-list  > li').eq(2).should('have.text','Milk')
        cy.get('.traversal-drinks-list  > li').last().should('have.text','Sugar')
        cy.get('.traversal-drinks-list > li:nth-child(1)').should('have.text','Coffee')
        cy.get('.traversal-drinks-list > li:nth-child(3)').should('have.text','Milk')

    })

    it('siblings',()=>{
        cy.get('#veggie').prev().should('have.text', 'Figs')
        cy.get('#veggie').next().should('have.text','Asparagus')
        cy.get('#milk').prev().should('have.text', 'Tea')
        cy.get('#milk').next().should('have.text','Espresso')

        cy.get('#veggie').prevAll().should('have.length',6)
        cy.get('#veggie').nextAll().should('have.length',4)

        cy.get('#espresso').prevUntil('#coffee').should('have.length',2)

        cy.get('#coffee').nextUntil('#espresso').should('have.length',2)

    })

    it.only('find',()=>{
        cy.get('#form-textfield').find('[name="firstname"]').type('dipanshu')
        cy.get('#form-textfield').find('[name="lastname"]').type('chawde')
        cy.get('#form-textfield').find('textarea').type('hi')
    })
})