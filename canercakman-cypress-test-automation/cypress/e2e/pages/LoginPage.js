class LoginPage {

    fillEmail(value) {
        cy.get("#login_UserName").type(value);
        return this;
    }

    fillPassword(value) {
        cy.get("#login_Password").type(value);
        return this;
    }

    clickLogin() {
        cy.get("#LoginButton").click()
        return this;
    }

    errorMessageControl(value) {
        cy.get("#AlertResult > span").should("have.text", value)
        return this;
    }

    requiredMessageControl(value) {
        cy.get("ac-validation[email] span[class='validation-error-msg']").should("have.text", value)
        cy.get("span[class='validation-error-msg']").eq(1).should('have.text',value)
     return this;
    }

    clearEmail() {
        cy.get("#login_UserName").clear()
        return this;
    }

    clearPassword() {
        cy.get("#login_Password").clear()
        return this;
    }

}

export default LoginPage;