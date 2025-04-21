describe('cadastroDeUsuario', () => {
    it('Validar o cadastro de um usuário na plataforma', () => {
        //arrange
        cy.visit('https://magento.nublue.co.uk/')
        //act
        cy.get('[href="https://magento.nublue.co.uk/customer/account/create/"]').click()
        cy.get('#firstname').type('Bruno')
        cy.get('#lastname').type('Spinelli')
        cy.get('#email_address').type('spinellibisneto@gmail.com')
        cy.get('#password').type('Test#12345')
        cy.get('#password-confirmation').type('Test#12345')
        cy.get('[title="Create an Account"]').click()
        //assert
        cy.url().should('eq', 'https://magento.nublue.co.uk/customer/account/')
        cy.get('.message-success > div').should('contain.text','Thank you for registering with Main Website Store.')
        cy.get('.box-information > .box-content > p').should('contain.text','Bruno Spinelli')
    })
})