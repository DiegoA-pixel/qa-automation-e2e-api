describe('Compra en SauceDemo', () => {

  it('Flujo completo de compra', () => {

    cy.visit('https://www.saucedemo.com/')

    // LOGIN
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // AGREGAR PRODUCTOS
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()

    // IR AL CARRITO
    cy.get('.shopping_cart_link').click()

    // CHECKOUT
    cy.get('#checkout').click()

    // FORMULARIO
    cy.get('#first-name').type('Diego')
    cy.get('#last-name').type('Arevalo')
    cy.get('#postal-code').type('170102')

    cy.get('#continue').click()

    // FINALIZAR COMPRA
    cy.get('#finish').click()

    // VALIDACIÓN FINAL
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!')

  })

})