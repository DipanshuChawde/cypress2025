///<reference types = "cypress" />
import mockData from "../../fixtures/interceptData.json"
describe("verify intercept in cypress", () => {
    it("verify intercept get comment in cypress", () => {

        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: 'GET'
        }, {
            body: mockData
            // {
            //     "postId": 1,
            //     "id": 1,
            //     "name": "id labore ex et quam laborum",
            //     "email": "Eliseo@gardner.biz",
            //     "body": "this is my mock response"
            // }
        }).as('getComment')


        cy.contains('Get Comment').click()
        cy.wait('@getComment').then((res) => {
            cy.log(res.response.body)
            // cy.log(res.response.body.body)
            cy.get('[class="network-comment"]').should('have.text', res.response.body.body)
        })

        cy.get('[class="network-comment"]').should('contain', 'this is my mock response')
    })

      it("verify intercept post comment in cypress", () => {

        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url:'https://jsonplaceholder.cypress.io/comments',
            method : 'POST'
        }).as('postComment')

         cy.contains('Post Comment').click()
         cy.wait('@postComment').then((res)=>{
            //cy.log(res)
            expect(res.response.body.body).to.eq("You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE")
            expect(res.response.statusCode).to.eq(201)
            expect(res.response.statusMessage).to.eq("Created")
        })

      })

       it.only("verify intercept update comment in cypress", () => {

        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url:'https://jsonplaceholder.cypress.io/comments/1',
            method : 'PUT'
        }).as('updateComment')

        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then((res)=>{
            cy.log(res)
            expect(res.response.body.name).to.eq("Using PUT in cy.intercept()")
            expect(res.response.statusCode).to.eq(200)
        })


       })

})