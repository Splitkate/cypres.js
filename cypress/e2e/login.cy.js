describe('Проверка авторизации', function () {

    it('Верный логин и пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click(); 
       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })


       it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('joutsen@list.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        })

        it('Верный логин и неверный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio12');
            cy.get('#loginButton').click(); 
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })

        it('Неверный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('joutsen@list.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click(); 
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })


            it('Логин без @ и верный пароль', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('germandolnikov.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click(); 
                cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                })

                it('Логин c разным регистром и верный пароль', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#mail').type('GerMan@Dolnikov.ru');
                    cy.get('#pass').type('iLoveqastudio1');
                    cy.get('#loginButton').click(); 
                    cy.get('#messageHeader').contains('Авторизация прошла успешно');
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                    })
})