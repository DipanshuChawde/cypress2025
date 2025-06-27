///<reference types = "cypress" />
import postData from "../../fixtures/reqres1.json"

describe("verify api testong  in cypress", () => {
    it("list user get data in cypress", () => {
        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: 'GET'
        }).then((getRes) => {
            cy.log(getRes)
            cy.log(getRes.body.data[0].first_name)
            expect(getRes.body.data[0].first_name).to.eq('Michael')
            expect(getRes.status).to.eq(200)
            expect(getRes.statusText).to.eq("OK")
        })
    })

    it("list user post data in cypress", () => {
        const payload = {
            "name": "dipanshu",
            "job": "leader"
        }
        cy.request({
            url: "https://reqres.in/api/users",
            method: 'POST',
            body: payload,
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        }).then((postRes) => {
            cy.log(postRes)
            expect(postRes.body.name).to.eq(payload.name)
        })

    })


    postData.forEach(el => {
        it.only(`list user post data in cypress for user ${el.name}`, () => {

            cy.request({
                url: "https://reqres.in/api/users",
                method: 'POST',
                body: el,
                headers: {
                    "x-api-key": "reqres-free-v1"
                }
            }).then((postRes) => {
                cy.log(postRes)
                expect(postRes.body.name).to.eq(el.name)
            })
        })
    })

    it.only(`list user update data in cypress`, () => {
        const data = {
            "name": "morpheus",
            "job": "zion resident"
        }
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: 'PUT',
            body: data,
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        }).then((postRes) => {
            cy.log(postRes)
            expect(postRes.body.name).to.eq(data.name)
        })
    })

it.only(`list user delete data in cypress`, () => {
       
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: 'DELETE',
           
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        }).then((postRes) => {
            cy.log(postRes)
            expect(postRes.status).to.eq(204)
        })
    })

})

