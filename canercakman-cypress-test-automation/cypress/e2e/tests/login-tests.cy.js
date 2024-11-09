/// <reference types="cypress" />

import BaseLibrary from "../base/BaseLibrary";
import AccountInformationPage from "../pages/AccountInformationPage";
import LoginPage from "../pages/LoginPage"
import MainPage from "../pages/MainPage";



describe('Login Tests', () => {

    const loginPage = new LoginPage();
    const baseLibrary = new BaseLibrary();
    const mainPage = new MainPage();
    const accountInformationPage = new AccountInformationPage();

    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.oxxo.com.tr/tr/p/User/Login', {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
              'Referer': 'https://www.oxxo.com/'
            }
          })
    })

    it('Başarılı kullanıcı girişi kontrolü', () => {

        var mail = "caner1995_35@hotmail.com"

        loginPage.fillEmail(mail)
            .fillPassword("Mardin4747.")
            .clickLogin()
        baseLibrary.wait(5000)

        mainPage.clickAccount();
        baseLibrary.wait(5000)
        accountInformationPage.accountMailControl(mail)

    })

    it('Başarısız kullanıcı girişi kontrolü', () => {

        var mail = "canercakman16@gmail.com"

        loginPage.fillEmail(mail)
            .fillPassword("testMArdin46")
            .clickLogin()
            .errorMessageControl("E-Posta adresi veya şifre hatalı.")


    })

    it('Boş karakter kontrolü', () => {
        var mail = "canercakman16@gmail.com"

        loginPage.fillEmail(mail)
            .clearPassword()
            .clickLogin()
            .errorMessageControl("E-Posta adresi veya şifre hatalı.")

    })
})