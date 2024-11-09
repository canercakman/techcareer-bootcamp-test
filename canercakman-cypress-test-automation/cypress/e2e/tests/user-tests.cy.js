/// <reference types="cypress" />

describe('Login Tests', () => {


    it('POST User Create', () => {

        const payload = {
            "id": 687985,
            "username": "canercakman",
            "firstName": "cakman",
            "lastName": "caner",
            "email": "caner1995_35@hotmail.com",
            "password": "Mardin4747.",
            "phone": "5444583547",
            "userStatus": 0
        }

        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/user",
            body: payload
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })

    })

    it('PUT User Update', () => {

        const payload = {
            "id": 24985,
            "username": "canercakman2delete",
            "firstName": "caner",
            "lastName": "cakman",
            "email": "caner1995_35@hotmail.com",
            "password": "Mardin4747.",
            "phone": "5444583547",
            "userStatus": 0
          }

        cy.request({
            method: "PUT",
            url: "https://petstore.swagger.io/v2/user/canercakman",
            body: payload
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })

    })


    it('GET User Info', () => {

        cy.request("GET", "https://petstore.swagger.io/v2/user/canercakman2delete")

    })

    it('DEL User Delete', () => {

        cy.request({
            method: "DELETE",
            url: "https://petstore.swagger.io/v2/user/canercakman2delete"
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })

    })

})