describe('Top', () => {
  it('Checks /top page', function () {
    cy.visit('http://localhost:3000/top');

    cy.get('section').find('[data-movie]').its('length').should('eq', 20)
  });

  it('Checks top movie length', function () {
    cy.visit('http://localhost:3000/top');

    cy.get('section').find('[data-movie]').its('length').should('eq', 20)
  });

  it('Checks top movie click', function () {
    cy.visit('http://localhost:3000/top');

    cy.get('section').find('[data-movie]').first().click()
    cy.url().should('include', '/movie')
  });
})
