describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to the product page and add it to the cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Colocar na sacola').click()
    cy.contains('Bag (1)').should('exist')
  })

  it('should not be able to add the same product to the cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Colocar na sacola').click()
    cy.contains('Colocar na sacola').click()

    cy.contains('Bag (1)').should('exist')
  })

  it('should be able to search for the product and add it to the cart', () => {
    cy.searchByQuery('camiseta')

    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Colocar na sacola').click()

    cy.contains('Bag (1)').should('exist')
  })
})
