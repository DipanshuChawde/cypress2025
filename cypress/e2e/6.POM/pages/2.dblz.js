export default class myClass {
    selectors = {
        url : "https://www.demoblaze.com/index.html#",
        //new user sign up
        newUserSignUpBtn : '#signin2',
        newUserName :"#sign-username",
        newUserPassword : '#sign-password',
        newUserSignUpBtn2 : '[onclick="register()"]',

        //existiong user login
        userLoginBtn : '#login2',
        userNameInput : "#loginusername",
        userPasswordInput : "#loginpassword",
        loginBtn : '[onclick="logIn()"]',
        //verify login
        logoutBtn : '#logout2',
        nameOfUser : '#nameofuser'
    }

    visitUrl(){
        cy.visit(this.selectors.url)
    }

    login(un,pw){
        cy.get(this.selectors.userLoginBtn).click()
        cy.get(this.selectors.userNameInput).clear().type(un)
        cy.get(this.selectors.userPasswordInput).type(pw)
        cy.get(this.selectors.loginBtn).click()
        cy.get(this.selectors.logoutBtn).should('be.visible')
        cy.get(this.selectors.nameOfUser).should('contain',un)
    }
}