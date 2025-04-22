describe('login', () => {
    it('Validar o login com um usuário já criado na plataforma', () => {
        //arrange
        cy.visit('https://magento.nublue.co.uk/')
        //act
        cy.get('[href="https://magento.nublue.co.uk/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLm51Ymx1ZS5jby51ay8%2C/"]').eq(0).click()
        cy.get('[title="Email"]').type('roni_cost@example.com')
        cy.get('[title="Password"]').type('roni_cost3@example.com')
        cy.get('[name="send"]').eq(0).click()
        //assert
        cy.url().should('eq', 'https://magento.nublue.co.uk/')
        cy.get(':nth-child(2) > .greet > .logged-in').should('contain.text','Welcome, Veronica Costello!')
    })
})