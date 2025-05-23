/// <reference types = 'cypress' />

describe('verify tables in cypress', () => {
    it('verify table in cypress', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#productTable >tbody >tr').each(row => {
            cy.wrap(row).find('td').each(tds => {
                // cy.log(tds.text())
                if (tds.text() == 'Smartwatch') {
                    cy.wrap(row).find('input').click()
                }
            })
        })
    })

    it('verify table in cypress type2 ', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#pagination >li >a').each((pages, index) => {
            //cy.wrap(pages).click().should('be.visible')
            cy.get('#pagination >li >a').eq(index).click().should('be.visible')
            cy.get('#productTable >tbody >tr').each(row => {
                cy.wrap(row).find('td').each(tds => {
                    // cy.log(tds.text())
                    if (tds.text() == 'Fitness Tracker') {
                        cy.wrap(row).find('input').click()
                    }
                })
            })
        })
    })


    it.only('verify table in cypress type2 ', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')

        function selectProduct(products) {
            products.forEach((el, idx) => {
                cy.get('#pagination >li >a').each((pages, index) => {
                    //cy.wrap(pages).click().should('be.visible')
                    cy.get('#pagination >li >a').eq(index).click().should('be.visible')
                    cy.get('#productTable >tbody >tr').each(row => {
                        cy.wrap(row).find('td').each(tds => {
                            // cy.log(tds.text())
                            if (tds.text() == el) {
                                cy.wrap(row).find('input').click()
                                cy.wait(2000)
                            }
                        })
                    })
                })
            })
        }

        selectProduct(['Wireless Earbuds', 'Gaming Console', 'Fitness Tracker', 'Wireless Mouse 20'])
    })
})