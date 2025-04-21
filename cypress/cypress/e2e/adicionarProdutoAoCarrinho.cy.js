describe('adicionarProdutoAoCarrinho', () => {
    it('Validar adicionar um produto ao carrinho enquanto deslogado', () => {
         //arrange
         cy.visit('https://magento.nublue.co.uk/')
         //act
         cy.get(':nth-child(6) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
         cy.get('#product-addtocart-button > span').click()
         cy.get('.message-success > div > a').click()
         //assert
         cy.url().should('eq', 'https://magento.nublue.co.uk/checkout/cart/')
         cy.get('.item > .product-item-details > .product-item-name > a').should('contain.text','Push It Messenger Bag')
         cy.get('[class="price"]').should('contain.text','£45.00')
         cy.get('[title="Qty"]').should('have.value', 1)
         cy.get('.subtotal > .price-excluding-tax > .cart-price > .price').should('contain.text','£45.00')
         cy.get('.sub > .amount > .price').should('contain.text','£45.00')
         cy.get('strong > .price').should('contain.text','£45.00')
    })
})