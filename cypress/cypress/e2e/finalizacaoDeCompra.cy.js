describe('finalizacaoDeCompra', () => {
    it('Validar ir até o fim do fluxo de compra já logado com um usuário', () => {
        //arrange
        cy.visit('https://magento.nublue.co.uk/')
        //act
        cy.get(':nth-child(6) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('#product-addtocart-button > span').click()
        cy.get('.message-success > div > a').click()
        cy.get('[class="grand totals"]') //ao longo do teste, alguns comandos cy.get como esse são usados para esperar um certo item da página para dar mais tempo aos comandos seguintes para esperar antes de clicar em certos elementos que jã estão disponíveis na tela mas que não redirecionam como esperado
        cy.wait(5)
        cy.get('[data-role="proceed-to-checkout"]').click()
        cy.wait(10) //alguns comandos wait como esse também são usados para tentar aguardar os carregamentos entre telas para evitar que os comandos seguintes tentem achar um elemento antes que ele fique disponível/na tela anterior a esperada
        cy.get('[class="control _with-tooltip"]').click()
        cy.get('[type="email"]').eq(1).type('spinellibisneto@hotmail.com')
        cy.get('[name="firstname"]').type('Bruno')
        cy.get('[name="lastname"]').type('Spinelli')
        cy.get('[name="street[0]"]').type('Rua Augusta, 1503')
        cy.get('[name="country_id"]').select('Brazil')
        cy.get('[name="region_id"]').select('São Paulo')
        cy.get('[name="city"]').type('São Paulo')
        cy.get('[name="postcode"]').type('01305-100')
        cy.get('[name="telephone"]').type('11963770022')
        cy.get('[value="flatrate_flatrate"]').click()
        cy.get('[class="button action continue primary"]').click()
        cy.get('[placeholder="Enter discount code"]')
        cy.wait(10)
        cy.get('[title="Place Order"]').click()
        //assert
        cy.wait(10)
        cy.url().should('eq', 'https://magento.nublue.co.uk/checkout/onepage/success/')
        cy.get('[class="page-title"]').should('contain.text','Thank you for your purchase!')
        cy.get('[class="checkout-success"]').should('contain.text','Your order # is:')
        cy.get('[class="checkout-success"]').should('contain.text','We\'ll email you an order confirmation with details and tracking info.')
        cy.get('[href="https://magento.nublue.co.uk/"]').should('contain.text','Continue Shopping')
        cy.get('[href="https://magento.nublue.co.uk/checkout/account/delegateCreate/"]').should('contain.text','Create an Account')
    })
})