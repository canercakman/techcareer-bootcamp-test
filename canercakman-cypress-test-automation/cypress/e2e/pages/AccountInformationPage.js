class AccountInformationPage {
 
    accountMailControl(value){
        cy.get("#localPassVM_User_UserName").should('have.value', value)
        return this;
    }

}

export default AccountInformationPage;