describe('Search', () => {
  it('Checks search results', function () {
    cy.visit('http://localhost:3000');

    cy.get('input[name="title"]').type('Inception')
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/search')
  });

  it('Checks error message', function () {
    cy.visit('http://localhost:3000');

    cy.get('button[type="submit"]').click()
    cy.get('span[data-form-error="true"]')
  });
})
