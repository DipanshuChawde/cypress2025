/// <reference types = 'cypress' />

describe('verify nested iframe in cypress', () => {
        it('verify nested iframe in cypress', () => {
                cy.visit('https://ui.vision/demo/webtest/frames/')

                cy.get('frame').should('have.length', 5)
                cy.iframe('[src="frame_1.html"]').find('[name="mytext1"]').type('dipanshu')
                cy.wait(2000)
                //cy.iframe('[src="frame_3.html"]').find('[name="mytext3"]').type('tanish')

                cy.iframe('frame[src="frame_3.html"]').then($parentframe => {
                        cy.wait(2000)
                        cy.wrap($parentframe).find('iframe').wait(2000).then($childframe => {
                                cy.wait(2000)
                                const childFrameBody = $childframe[0].contentDocument.body;
                                cy.wrap(childFrameBody).find('[id="i6"]').click()
                        })
                })
        })

        it.only('example 3', () => {
                cy.visit('https://ui.vision/demo/webtest/frames/')

                //count of iframes

                cy.get('frame').should('have.length', 5)
                cy.getiFrameBody('frame[src="frame_1.html"]').find('[name="mytext1"]').type('dipanshu')
                cy.getiFrameBody('frame[src="frame_3.html"]').then($parentBody => {
                        cy.wrap($parentBody).find('iframe').then($childIframe => {
                                const childBody = $childIframe[0].contentDocument.body;
                                cy.wrap(childBody).find('[id="i6"]').click()

                        })
                })
        })
})