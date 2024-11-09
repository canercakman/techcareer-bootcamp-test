class MainPage {
 
    clickAccount(){
        //cy.get('#AccountLink').click()
        cy.visit('https://www.oxxo.com.tr/tr/p/User/UserInfo');
        return this;
    }
}

export default MainPage;