///<reference types ='cypress' />

describe("verify hidden dropdown in cypress", () => {
it('verify hidden dropdown in cypress', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.contains('PIM').click()

    cy.get('[class="oxd-select-text--after"]').eq(2).click()
    cy.wait(3000)

    cy.get('[role="listbox"] > [role="option"] >span').each(el=>{
        //cy.log(el.text())
        if(el.text()=='IT Manager'){
            cy.wrap(el).click()
        }

    })
})
})