///<reference types="cypress" />

describe("verify contact us page", function () { //suite
    it("verify contact us page for valid data", function () {  //test case
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('dipanshu')
        cy.get('[name="last_name"]').type('chawde')
        cy.get('[name="email"]').type('dipanshu@gmail.com')
        cy.get('[name="message"]').type('i am learning cypress')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it("verify contact us page for valid data with fixture", function () {  //test case

        cy.fixture("fixData1").then((data) => {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('[name="first_name"]').type(data.fn)
            cy.get('[name="last_name"]').type(data.ln)
            cy.get('[name="email"]').type(data.email)
            cy.get('[name="message"]').type(data.msg)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })

    it.only("verify contact us page for valid data with fixture array", function () {  //test case

        cy.fixture("fixData2").then((data) => {
            data.forEach(el => {
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


})

// data = {
//     "fn" : "dipanshu",
//     "ln" : "chawde",
//     "email" : "dipanshu@gmail.com",
//     "msg" : "cypress"
// }