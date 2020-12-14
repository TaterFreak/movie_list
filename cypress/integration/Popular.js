describe('Popular', () => {
  it('Checks /popular page', function () {
    cy.visit('http://localhost:3000/popular');

    cy.get('section').find('[data-movie]').its('length').should('eq', 20)
  });

  it('Checks popular movie length', function () {
    cy.visit('http://localhost:3000/popular');

    cy.get('section').find('[data-movie]').its('length').should('eq', 20)
  });

  it('Checks popular movie click', function () {
    cy.visit('http://localhost:3000/popular');

    cy.get('section').find('[data-movie]').first().click()
    cy.url().should('include', '/movie')
  });
})
