/// <reference types = 'cypress' />

describe('verify tables in cypress', () => {
        it('verify table in cypress', () => {
                cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')

                cy.get('#t01 > tbody >tr').not(':first').each((rows)=>{
                    //cy.log(rows.find('td').eq(1).text())
                    
                })
        })
    })
