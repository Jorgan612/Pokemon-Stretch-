describe('Favorites Page User Flows', () => {
  beforeEach(() => {
    // cy.visit('http://localhost:3000/favorites')
     cy.visit('http://localhost:3000')
      .get('[href="/generation-i"]')
      .click()
      .get('[href="/generation-i/0"] > .card-sprite')
      .click()
      .visit('http://localhost:3000/generation-i/0')
      .get('.favorite')
      .click()
  });

  // it('should be able to visit the url', () => {
  //   cy.url()
  //   .should('eq', 'http://localhost:3000/favorites');
  // });

  // it('should see a message if there are not any favorited Pokemon', () => {
  //   cy.get('.nothing-here')
  //   .contains('There are no pokemon here. Go add some favorites then come back!')
  //   .should('be.visible')
  // });

  it('should see favorited Pokemon cards', () => {
      cy.get('button').contains('Favorites')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/favorites');
  });
})