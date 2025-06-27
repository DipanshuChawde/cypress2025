///<reference types = "cypress" />


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

    it.only('create user', () => {
        const requestPayload = { "name": "Dipanshu", "gender": "male", "email": "dipanshu7893@15ce.com", "status": "active" }
        cy.request({
            url: "https://gorest.co.in/public/v2/users",
            method: 'POST',
            body : requestPayload
        },
            Headers = {
                Authorization: token
            }).then((res) => {
                //cy.log(res)
                expect(res.status).to.eq(200)
                expect(res.statusText).to.eq('OK')
            })
    })

    // it('TC001 - verify reqres Api-post Get put delete method', function () {
    //         const token = '2e5d6a76c6c9f78db8669486a0bc356d8c5acaa7a0adac87796e8eaef1619f8e'
    //         cy.request({
    //             url: 'https://gorest.co.in/public/v2/users',
    //             method: 'POST',
    //             body: 
    //             {
    //                 "name": "Neel Chawde",
    //                 "gender": "male",
    //                 "email": "neel133@gmail.com",
    //                 "status": "active"
    //             },
    //             Headers : {
    //                 Authorization : `Bearer ${token}`
    //             }
    //         }).then((respost) => {
    //             cy.log(respost.body.id)
    //             //expect(respost.body.name).to.eq(el.name)
    //           //  return respost.body.id
    //         })
    //     })
})