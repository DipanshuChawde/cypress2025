///<reference types = "cypress" />
import putData from "../../fixtures/gorestPut"
import postData from "../../fixtures/gorestPost"

describe("verify api testing  in cypress - gorest", () => {
    const token = 'Bearer 2e5d6a76c6c9f78db8669486a0bc356d8c5acaa7a0adac87796e8eaef1619f8e'
    postData.forEach((el, index)=>{
    it("e2e api testing in cypress", () => {
        // const requestPayload = { "name": "Tanish", "gender": "female", "email": `dipanshu${Date.now()}@gmail.com`, "status": "active" }
        // const putPayload = { "name": "Tanish chawde", "email": `dipanshuC${Date.now()}@gmail.com`, "status": "active" }
        cy.request({
            url: "https://gorest.co.in/public/v2/users",
            method: "POST",
            //body: requestPayload,
            body : el,
            headers: { Authorization: token },
            //failOnStatusCode: false
        }).then((res) => {
            //cy.log(res)
            // cy.log(res.body.id)
            //expect(res.body.name).to.eq(requestPayload.name)
            expect(res.body.name).to.eq(el.name)
            return res.body.id
        }).then((userId) => {
            cy.request({
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                method: 'PUT',
                body: putData[index],
                headers: { Authorization: token },
            }).then(putRes => {
                //cy.log(putRes)
                //expect(putRes.body.name).to.eq(putPayload.name)
                expect(putRes.body.name).to.eq(putData[index].name)
            }).then(() => {
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
                    .then(() => {
                        cy.request({
                            url: `https://gorest.co.in/public/v2/users/${userId}`,
                            method: "DELETE",
                            headers: { Authorization: token },
                        }).then((delRes) => {
                            cy.log(delRes)
                            expect(delRes.body).to.eq("")
                            expect(delRes.status).to.eq(204)
                            expect(delRes.statusText).to.eq('No Content')
                        })
                    })
            })
        })
    })
})
})

