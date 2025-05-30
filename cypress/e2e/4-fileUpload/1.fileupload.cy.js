///<reference types="cypress" />

describe("verify file upload in cypress", () => { //suite
    it("verify file upload in cypress", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        const file1 = "C:/Users/tanis/Downloads/myfiletoUpload.docx"
        const file2 = "cypress/e2e/4-fileUpload/New_POS.postman_collection.json"
        //single file upload
        cy.get('#singleFileInput').selectFile(file1)
       //cy.get('#singleFileInput').selectFile("C:/Users/tanis/Downloads/myfiletoUpload.docx")

       cy.get('#singleFileForm >[type="submit"]').click()
       cy.get('#singleFileStatus').should('contain','myfiletoUpload.docx')

       //multiple file upload
         cy.get('#multipleFilesInput').selectFile([file1,file2])
       
       cy.get('#multipleFilesForm >button').click()
       cy.get('#multipleFilesStatus').should('contain','myfiletoUpload.docx')
       cy.get('#multipleFilesStatus').should('contain','New_POS.postman_collection.json')
    })
})