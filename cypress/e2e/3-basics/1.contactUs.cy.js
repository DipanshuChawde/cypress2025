///<reference types="cypress" />

describe("verify contact us page",()=>{ //suite
    it("verify page for valid data",()=>{
        //AAA Arengenemts, Actions, Assertions
        //Arengenemts
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

        //Actions, 
        cy.get('[name="first_name"]').type("Dipanshu")
        cy.get('[name="last_name"]').type('Chawde')
        cy.get('[name="email"]').type('dipanshu@gmail.com')
        cy.get('[name="message"]').type('hi, how are you')
        cy.get('[type="submit"]').click()

        //Assertions
        cy.get('h1').should('have.text','Thank You for your Message!')
    })
})

//npx cypress open