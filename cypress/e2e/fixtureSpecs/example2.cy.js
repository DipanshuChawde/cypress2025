///<reference types="cypress" />
import data from "../../fixtures/fixData1.json"
import user from "../../fixtures/fixData2.json"

describe("verify contact us page", function () { //suite
    it("verify contact us page for valid data", function () {  //test case
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type(data.fn)
        cy.get('[name="last_name"]').type(data.ln)
        cy.get('[name="email"]').type(data.email)
        cy.get('[name="message"]').type(data.msg)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })


    it("verify contact us page for valid data", function () {  //test case
        user.forEach(el => {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('[name="first_name"]').type(el.fn)
            cy.get('[name="last_name"]').type(el.ln)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.msg)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })


    user.forEach((el,index )=> {
        it.only(`verify contact us page for valid data set ${index+1} : ${el.fn} `, function () {  //test case

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('[name="first_name"]').type(el.fn)
            cy.get('[name="last_name"]').type(el.ln)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.msg)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })
})