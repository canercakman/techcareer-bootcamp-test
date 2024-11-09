class RegisterPage {

    fillEmail(value) {
        cy.get("[name='Email'] input").type(value);
        return this;
    }

    fill(value) {
        cy.get("[name='Password'] input").type(value); 
        return this;
    }
    
}

export default RegisterPage;