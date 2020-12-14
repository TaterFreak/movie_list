describe('Top', () => {
  it('Checks /top page', function () {
    cy.intercept('GET', 'https://api.themoviedb.org/3/movie/top_rated', { fixture: 'top.json' }).as('getMovies')

    cy.visit('http://localhost:3000/top');

    cy.wait(['@getMovies'])

    cy.get('section').find('[data-movie]').its('length').should('eq', 20)
    cy.get('section').find('[data-movie]').first().click()
    cy.url().should('include', '/movie')
  });
})
