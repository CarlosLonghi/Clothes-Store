describe('add product to cart', () => {
  it('should be able to search for the product and add it to the cart', () => {
    cy.searchByQuery('camiseta')

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('equal', '?q=camiseta')

    cy.get('a[href^="/product"]').should('exist')
  })

  it('should not be able to visit search page without search input', () => {
    cy.on('uncaught:exception', () => false)

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
