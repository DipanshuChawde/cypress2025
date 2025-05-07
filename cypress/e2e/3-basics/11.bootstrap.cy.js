///<reference types='cypress' />

describe('verify dropdown in cypress', () => {

    it('static drop down', () => {
        cy.visit('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

        cy.get('[class="btn-group"]').click()
        //print and check count ------------
        cy.get('ul > li >a > label').each(el => {
            cy.log(el.text())
        })
        cy.get('ul > li >a > label').should('have.length', 14)

        //print and check count only checkbox ---------------
        cy.get('ul > li >a > label.checkbox').each(el => {
            cy.log(el.text())
        })
        cy.get('ul > li >a > label.checkbox').should('have.length', 11)

        //select single option---------------

        cy.get('ul > li >a > label.checkbox').each(el => {
           
            if (el.text() == ' C#') {
                cy.wrap(el).click()
            }
        })

        //select multiple option---------------
        let optionsToSelect = [" Java", " MS SQL Server", " Oracle"]
        cy.get('ul > li >a > label.checkbox').each(el => {
            if (optionsToSelect.includes(el.text())) {
                cy.wrap(el).click()
            }
        })

        //select unchecked option---------------
        cy.get('ul > li >a > label.checkbox').each(el => {
            cy.wrap(el).find('input').then(checkbox => {
                if (!(checkbox.is(':checked'))) {
                    cy.wrap(el).click()
                }
            })

        })
        //uncheck all options
        cy.get('ul > li >a > label.checkbox').each(el => {
            cy.wrap(el).find('input').then(checkbox => {
                if ((checkbox.is(':checked'))) {
                    cy.wrap(el).click()
                }
            })

        })
    })
})

