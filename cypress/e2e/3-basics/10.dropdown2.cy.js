///<reference types='cypress' />

describe('verify dropdown in cypress', () => {

    it('prime dropdown', () => {
        cy.visit('https://www.primevideo.com/offers/nonprimehomepage/ref=atv_dl_rdr')
        cy.get('[aria-label="Search Prime Video"]').eq(0).click()

        cy.get('input#pv-search-nav').eq(0).type('chor')

        cy.get('ol > li > a').each((el, idx)=>{
            //cy.log(el.text())
            if(el.text()=='chor machaye shor'){
                cy.wrap(el).click()
            }
        })
        cy.contains('Results for "chor machaye shor".').should('be.visible')
       
    })
})

