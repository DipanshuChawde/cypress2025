///<reference types = 'cypress' />
describe('verify iFrame in cypress', () => {
    it('iframe approach 1', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')

        cy.get('#frame').then(function (frame) {
            cy.log(frame)
            let iFrameBody = frame.contents().find('body')
            cy.wrap(iFrameBody).as('iframe')
            cy.get('@iframe').find('[href="index.html"]').should('have.text', 'Home')
            cy.get('@iframe').find('[href="products.html"]').should('have.text', 'Our Products')
        })

    })

    it('iframe approach 2', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')

        cy.get('#frame').then(function ($frame) {
            cy.log($frame)
            let iFrameBody = $frame.contents().find('body')
            cy.wrap(iFrameBody).as('iframe')
            cy.get('@iframe').find('[href="index.html"]').should('have.text', 'Home')
            cy.get('@iframe').find('[href="products.html"]').should('have.text', 'Our Products')
        })

    })

    it('iframe approach 3', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')

        cy.get('#frame').then(function (frame) {
            //cy.log(frame)
            let iFrameBody = frame[0].contentDocument.body
            cy.wrap(iFrameBody).as('iframe')
            cy.get('@iframe').find('[href="index.html"]').should('have.text', 'Home')
            cy.get('@iframe').find('[href="products.html"]').should('have.text', 'Our Products')
        })

    })

    it('iframe approach 4', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')

        let iframeBody = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        //iframeBody.find('[href="index.html"]').should('have.text', 'Home')
        //cy.wait(2000)
        //iframeBody.find('a[href="products.html"]').should('have.text', 'Our Products')
        iframeBody.find('p[class="sub-heading"]').first().should('have.text', 'Who Are We?')
    })

    it.only('iframe approach 5 -with custom command', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')

        cy.iframe('#frame').find('p[class="sub-heading"]').first().should('have.text', 'Who Are We?')
        cy.iframe('#frame').find('[href="index.html"]').should('have.text', 'Home')
        cy.iframe('#frame').find('a[href="products.html"]').should('have.text', 'Our Products')
    })
})