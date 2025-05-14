/// <reference types = 'cypress' />

describe('verify cy.task in cypress',()=>{
    it('verify cy.task in cypress',()=>{
        cy.task('myTask1')

        cy.task('myTask2', 'dipanshu')

        cy.task('addition', {a:3, b:5}).then(sum=>{
            cy.log(sum)
        })
    })
})