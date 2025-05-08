///<reference types='cypress' />

describe('get text of element', () => {

    it('get text of element type 1', () => {
        cy.visit('https://www.google.co.in/')
        cy.get('[rel="nofollow"]').invoke('text').then((txt) =>{
            cy.log(txt)
        })
    })

    it.skip('get text of element type 2', () => {
        cy.visit('https://www.redbus.in/')
        cy.get('[class="OfferSection__OfferHeadText-sc-16xojcc-0 gHimHf"]').then((selector) =>{
            cy.log(selector.text())
        })
    })

    it('get text of element type 3', () => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('div.caption >h4').eq(2).then(($selector) =>{
            cy.log($selector.text())
        })
    })

    it('get text of element type 4', () => {
       cy.visit('https://www.letskodeit.com/practice')
       cy.get('[data-uniqid="1621702280245"]').should('have.text','Practice Page')
       cy.get('[data-uniqid="1621702280245"]').invoke('text').then(elementText =>{
        expect(elementText).to.eq('Practice Page')
       })

    })
})