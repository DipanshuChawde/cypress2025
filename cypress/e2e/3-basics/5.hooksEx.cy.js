///<reference types ='cypress' />

describe("verify custom command in cypress", () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('verify simple login', () => {

        cy.OHRMlogin('Admin', 'admin123')
        cy.get('.oxd-text--h6').should('have.text', 'Dashboard')
    })

    it('verify simple login2', () => {
        cy.wait(3000)
        cy.OHRMlogin('Admin', 'admin123')
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').should('have.text', 'Admin')

    })
})
