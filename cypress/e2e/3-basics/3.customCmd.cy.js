///<reference types ='cypress' />

describe("verify custom command in cypress", () => {
    it('verify simple login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.get('[name="username"]').type('Admin')
        // cy.get('[name="password"]').type('admin123')
        // cy.get('button[type="submit"]').click()

        cy.OHRMlogin('Admin', 'admin123')

        cy.get('.oxd-text--h6').should('have.text', 'Dashboard')

    })

    it('verify simple login2', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.get('[name="username"]').type('Admin')
        // cy.get('[name="password"]').type('admin123')
        // cy.get('button[type="submit"]').click()
        cy.OHRMlogin('Admin', 'admin123')
        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').should('have.text', 'Admin')

    })
    
})
