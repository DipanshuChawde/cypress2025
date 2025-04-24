// page visit 
// login 
// actions1 
// action2
//action3
// logout
//-----------------------------
// before() : executed once first(before stat of describe block)
// beforeEach() :before each it bolck
// after() :at end and once
// afterEach() : after each it bolck

///<reference types ='cypress' />

describe('verify hook in cypress',()=>{
    before(()=>{
        cy.log('i am in before block...')
    })

    after(()=>{
        cy.log('i am in after block...')
    })

    beforeEach(()=>{
        cy.log('i am in before each...')
    })

    afterEach(()=>{
        cy.log('i am in after each...')
    })

    it('test case 1',()=>{
        cy.log('i am in test case 1')
    })

    it('test case 2',()=>{
        cy.log('i am in test case 2')
    })

    it('test case 3',()=>{
        cy.log('i am in test case 3')
    })

    it('test case 4',()=>{
        cy.log('i am in test case 4')
    })

    it('test case 5',()=>{
        cy.log('i am in test case 5')
    })


})