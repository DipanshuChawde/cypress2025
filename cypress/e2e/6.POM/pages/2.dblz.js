export default class myClass {
    selectors = {
        url: "https://www.demoblaze.com/index.html#",
        //home page
        homePageBtn: 'li > a[href="index.html"]',
        //new user sign up
        newUserSignUpBtn: '#signin2',
        newUserName: "#sign-username",
        newUserPassword: '#sign-password',
        newUserSignUpBtn2: '[onclick="register()"]',

        //existiong user login
        userLoginBtn: '#login2',
        userNameInput: "#loginusername",
        userPasswordInput: "#loginpassword",
        loginBtn: '[onclick="logIn()"]',
        //verify login
        logoutBtn: '#logout2',
        nameOfUser: '#nameofuser',
        //add to cart
        //categories
        phoneBtn: `[onclick="byCat('phone')"]`,
        monitorBtn: `[onclick="byCat('monitor')"]`,
        laptopBtn: `[onclick="byCat('notebook')"]`,
        productTextLink : '[class="hrefch"]'

    }

    visitUrl() {
        cy.visit(this.selectors.url)
    }

    login(un, pw) {
        cy.get(this.selectors.userLoginBtn).click()
        cy.get(this.selectors.userNameInput).clear().type(un)
        cy.get(this.selectors.userPasswordInput).type(pw)
        cy.get(this.selectors.loginBtn).click()
        cy.get(this.selectors.logoutBtn).should('be.visible')
        cy.get(this.selectors.nameOfUser).should('contain', un)
    }

    addToCart(productName,products) {
        cy.log(products)
        products.forEach(el => {
        cy.get(this.selectors.homePageBtn).click()
        if(productName=='phone'){
            cy.get(this.selectors.phoneBtn).click()
        }
        else if(productName=='monitor'){
            cy.get(this.selectors.monitorBtn).click()
            cy.wait(2000)
        } 
        else if(productName=='laptop'){
            cy.get(this.selectors.laptopBtn).click()
        }

        cy.get(this.selectors.productTextLink).contains(el).click()
        
        cy.wait(2000)
  });
    }
     
}