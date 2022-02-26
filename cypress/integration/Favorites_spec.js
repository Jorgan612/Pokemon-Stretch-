describe('Favorites Page User Flows', () => {
  beforeEach(() => {
     cy.visit('http://localhost:3000')
      .get('[href="/generation-i"]')
      .click()
      .get('[href="/generation-i/0"] > .card-sprite')
      .click()
      .visit('http://localhost:3000/generation-i/0')
      .get('.favorite')
      .click()
  });

 it('should be able to see a nav with the app\'s title', () => {
    cy.get('.nav-div')
    .get('.title')
    .contains('Gotta Ketchum All')
    .should('be.visible')
  });

  it('should see favorited Pokemon cards', () => {
      cy.get('button').contains('Favorites')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/favorites');
  });

  it('should see a Home Button and return to landing page', () => {
    cy.get('[href="/"] > .nav-button').contains('Home')
    .should('be.visible')
    .click()
    .url()
    .should('eq', 'http://localhost:3000/')
  });
});