///<reference types = "cypress" />
import postData from "../../fixtures/gorest-api"

describe("verify api testing  in cypress - gorest", () => {
    const token = 'Bearer 2e5d6a76c6c9f78db8669486a0bc356d8c5acaa7a0adac87796e8eaef1619f8e'
    it("list user get data in cypress", () => {
        cy.request({
            url: "https://gorest.co.in/public/v2/users",
            method: 'GET'
        },
            Headers = {
                Authorization: token
            }).then((res) => {
                //cy.log(res)
                expect(res.status).to.eq(200)
                expect(res.statusText).to.eq('OK')
            })
    })
    postData.forEach((el, ind) => {
        it(`create user for user ${ind + 1}`, () => {
            //const requestPayload = { "name": "Dipanshu", "gender": "male", "email": `dipanshu${Date.now()}@gmail.com`, "status": "active" }
            //cy.log(requestPayload)
            cy.request({
                url: "https://gorest.co.in/public/v2/users",
                method: "POST",
                body: el,
                headers: { Authorization: token },
                //failOnStatusCode: false
            }).then((res) => {
                cy.log(res)
                cy.log(res.body.id)
                expect(res.body.name).to.eq(el.name)

            })
        })
    })


    it(`Update user `, () => {
        const requestPayload = { "name": "dipanshu chawde", "email": "allasani.peddana123@15ce.com", "status": "active" }
        //cy.log(requestPayload)
        cy.request({
            url: 'https://gorest.co.in/public/v2/users/7975523',
            method: "PUT",
            body: requestPayload,
            headers: { Authorization: token },
            //failOnStatusCode: false
        }).then((res) => {
            cy.log(res)
            expect(res.body.name).to.eq(requestPayload.name)

        })

    })

    it.only(`delete user `, () => {
        cy.request({
            url: 'https://gorest.co.in/public/v2/users',
            method: "GET",
            headers: { Authorization: token },
        }).then((res) => {
            cy.log(res.body.length)
            expect(res.status).to.eq(200)
            expect(res.statusText).to.eq('OK')
            expect(res.body.length).to.eq(10)
        })
    })

    it.only(`delete user `, () => {
        cy.request({
            url: 'https://gorest.co.in/public/v2/users/7975525',
            method: "DELETE",
            headers: { Authorization: token },
        }).then((res) => {
            cy.log(res)
            expect(res.body).to.eq("")
            expect(res.status).to.eq(204)
            expect(res.statusText).to.eq('No Content')
        })
    })
})
