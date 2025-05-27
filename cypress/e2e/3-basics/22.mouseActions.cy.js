/// <reference types='cypress' />
describe('verify shadowdom in cypress', () => {
    it('mouse drag and drop', () => {
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        // cy.get('#draggable > p').trigger('mousedown',{which : 1}) //mouse click hold
        // cy.get('#droppable > p').trigger('mousemove', {which : 1}).trigger('mouseup',{force: true})
        // cy.get('#droppable > p >b').should('have.text','Dropped!')

        cy.get('#draggable > p').trigger('mousedown', { button: 1 }) //mouse click hold
        cy.get('#droppable > p').trigger('mousemove', { button: 1 }).trigger('mouseup', { force: true })
        cy.get('#droppable > p >b').should('have.text', 'Dropped!')
    })


    it('mouse hover', () => {
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        //hover me first
        cy.get('[class="list-alert"]').first().should('not.be.visible')
        cy.get('[class="dropdown-content"]').first().invoke('show') //hover
        cy.get('[class="list-alert"]').first().should('be.visible')
        //hover me second
        cy.get('[class="list-alert"]').eq(1).should('not.be.visible')
        cy.get('[class="dropdown-content"]').eq(1).invoke('show') //hover
        cy.get('[class="list-alert"]').eq(1).should('be.visible')
          //hover me thisr
        cy.get('[class="list-alert"]').eq(2).should('not.be.visible')
        cy.get('[class="dropdown-content"]').eq(2).invoke('show') //hover
        cy.get('[class="list-alert"]').eq(2).should('be.visible')
         cy.get('[class="list-alert"]').eq(3).should('be.visible')
    })
})