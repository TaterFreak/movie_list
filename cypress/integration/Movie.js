describe('MoviePage', () => {
  it('Checks /movie/:id page', function () {
    cy.intercept('GET', 'https://api.themoviedb.org/3/movie/590706?api_key=de09c1be91fc78a6bf8f44bb9418c2dd&language=en-US', { fixture: 'movie.json' }).as('getMovie')

    cy.intercept('GET', 'https://api.themoviedb.org/3/movie/590706/recommendations?api_key=de09c1be91fc78a6bf8f44bb9418c2dd&language=en-US&page=1', { fixture: 'recommendations.json' }).as('getRecommendations')

    cy.visit('http://localhost:3000/movie/590706');

    cy.wait(['@getMovie', '@getRecommendations'])

    cy.contains('[data-movie-title]', 'Fatman')
    cy.contains('[data-movie-overview]', 'A rowdy, unorthodox Santa Claus is fighting to save his declining business. Meanwhile, Billy, a neglected and precocious 12 year old, hires a hit man to kill Santa after receiving a lump of coal in his stocking.')
    cy.contains('[data-movie-release-date]', '2020-11-13')
    cy.contains('[data-movie-vote-average]', 5.9)
    cy.contains('[data-movie-vote-count]', 162)
    cy.get('[data-movie-recommendations]').find('[data-movie]').its('length').should('eq', 14)
  });
})
