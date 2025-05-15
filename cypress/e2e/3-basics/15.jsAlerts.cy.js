/// <reference types = 'cypress' />
// JS alerts
// window : alart
//window : confirm
//window : prompt
describe('verify js alerts in cypress', () => {
    it('verify window : alart in cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:alert', function (text) {
            expect(text).to.eq('I am a JS Alert')
            return true
        })

        cy.get('[onclick="jsAlert()"]').click()

        cy.get('[id="result"]').should('have.text', 'You successfully clicked an alert')
    })

    it('verify window : confirm in cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:confirm', function (text) {
            expect(text).to.eq('I am a JS Confirm')
            return true
        })

        cy.get('[onclick="jsConfirm()"]').click()
        cy.get('[id="result"]').should('have.text', 'You clicked: Ok')
    })

    it('verify window : confirm in cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:confirm', function (text) {
            expect(text).to.eq('I am a JS Confirm')
            return false
        })

        cy.get('[onclick="jsConfirm()"]').click()

        cy.get('[id="result"]').should('have.text', 'You clicked: Cancel')
    })

    it.only('verify window : prompt in cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns('dipanshu')
        })

        cy.get('[onclick="jsPrompt()"]').click()

        cy.get('[id="result"]').should('have.text', 'You entered: dipanshu')
    })

     it.only('verify window : prompt in cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns(null)
        })

        cy.get('[onclick="jsPrompt()"]').click()

        cy.get('[id="result"]').should('have.text', 'You entered: null')
    })
})