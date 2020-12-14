describe('Navbar', () => {
  it('Checks homepage link', function () {
    cy.visit('http://localhost:3000');

    cy.contains('Home').click()
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Checks Top link', function () {
    cy.visit('http://localhost:3000');

    cy.contains('Top').click()
    cy.url().should('include', '/top')
  });

  it('Checks Popular link', function () {
    cy.visit('http://localhost:3000');

    cy.contains('Popular').click()
    cy.url().should('include', '/popular')
  });
})
