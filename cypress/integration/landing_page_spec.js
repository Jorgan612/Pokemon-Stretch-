describe('Landing Page User Flows', () => {
  beforeEach(() => {
     cy.visit('http://localhost:3000');
  });

  it('should be able to visit the url', () => {
    cy.url()
    .should('eq', 'http://localhost:3000/');
  });

  it('should be able to see a nav with the app\'s title', () => {
    cy.get('.nav-div')
    .get('.title')
    .contains('Gotta Ketchum All')
    .should('be.visible')
  });

});