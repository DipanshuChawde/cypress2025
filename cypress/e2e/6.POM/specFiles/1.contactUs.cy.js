//POM (Page Object Model) in cypress is a design pattern used to create an object repository for web elements.
//It helps in maintaining, scaling, and reusing test automation code by separating the test logic from the page structure.

///<reference types = "cypress" />
import homePage from "../pages/1.contactUsPage"
import userData from "../../../fixtures/fixData1.json"
import userData2 from "../../../fixtures/fixData2.json"

describe("verify contact us page using pom pattern", () => {
    let hp = new homePage()
    it("verify contact us from fixData1 ", () => {
        hp.visitUrl()
        hp.contactUsPage(userData)
    })

    userData2.forEach((el) => {
        it(`verify contact us from fixData2 for user ${el.fn}`, () => {
            hp.visitUrl()
            hp.contactUsPage(el)
        })
    })
})
