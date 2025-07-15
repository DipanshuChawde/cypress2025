///<reference types='cypress' />

describe('verify radio buttons and check box in cypress', () => {

    it('radio button', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
       cy.get('[value="green"]').should('not.be.checked')

       cy.get('[value="green"]').check().should('be.checked')

       cy.get('[value="blue"]').check().should('be.checked')

       cy.get('[value="green"]').should('not.be.checked')
       
    })

    it('check box', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-3"]').should('be.checked')
        cy.get('[value="option-1"]').check().should('be.checked')
        cy.get('[value="option-1"]').check().should('be.checked')
        cy.get('[value="option-3"]').should('be.checked')
        cy.get('[value="option-4"]').check().should('be.checked')
        cy.get('[value="option-2"]').click().should('be.checked')
        cy.get('[value="option-2"]').click().should('not.be.checked')
    })

    it('https://www.letskodeit.com/practice check bix radio button' ,()=>{

    })

    it.only('https://www.letskodeit.com/practice check bix radio button' ,()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#icp-nav-flyout').click()
        cy.get('[value="en_IN"]').should('be.checked')
        cy.get('[value="hi_IN"]').check({force: true}).should('be.checked')
        cy.get('[value="en_IN"]').should('not.be.checked')
    })
    })