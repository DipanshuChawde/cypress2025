///<reference types='cypress' />

describe('verify dropdown in cypress', () => {

    it('static drop down', () => {
        cy.visit('https://www.primevideo.com/offers/nonprimehomepage/ref=atv_dl_rdr')
        cy.get('[aria-label="Search Prime Video"]').eq(0).click()

        cy.get('input#pv-search-nav').type('chor')
        
    })
})