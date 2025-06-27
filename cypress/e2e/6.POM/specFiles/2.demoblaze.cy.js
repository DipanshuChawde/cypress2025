/// <reference types = "cypress" />
import homePage from "../pages/2.dblz"
import userCri from "../../../fixtures/dmblzUsers.json"
import productList from "../../../fixtures/dblzProductList.json"

describe('shopping',()=>{
    const hp = new homePage()
    it("my first shopping",()=>{
        hp.visitUrl()
        hp.login(userCri.un,userCri.pw)
        //for monitor
        hp.addToCart("monitor",productList.monitor)
        //for phone
        // hp.addToCart('phone',productList.phone)
        // //for laptop
        // hp.addToCart('laptop',productList.laptop)
    })
})