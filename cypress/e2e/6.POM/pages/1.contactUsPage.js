export default class myPage {
    selectors = {
        url : 'https://webdriveruniversity.com/Contact-Us/contactus.html',
        firstNameCss : '[name="first_name"]',
        lastNameCss : '[name="last_name"]',
        emailCss : '[name="email"]',
        msgCss : '[name="message"]',
        submitBtn : '[type="submit"]',
        //assertion
        sucessFulCss: 'h1',
        successMsg : 'Thank You for your Message!'
    }

    visitUrl(){
        cy.visit(this.selectors.url)
    }

    contactUsPage(userData){
        cy.get(this.selectors.firstNameCss).type(userData.fn)
        cy.get(this.selectors.lastNameCss).type(userData.ln)
        cy.get(this.selectors.emailCss).type(userData.email)
        cy.get(this.selectors.msgCss).type(userData.msg)
        cy.get(this.selectors.submitBtn).click()
        cy.get(this.selectors.sucessFulCss).should('have.text',this.selectors.successMsg)
    }

}