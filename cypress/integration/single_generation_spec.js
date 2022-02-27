describe('Generations Page User Flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/generation/1', {fixture: "pokemonObjects.json"})
      .visit('http://localhost:3000/generation-i');   
  });
  
  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/generation-i');
  });

  it('should be able to see a nav with the app\'s title', () => {
    cy.get('.nav-div')
      .get('.title')
      .contains('Gotta Ketchum All')
      .should('be.visible')
  });

  it('should have a favorites button on the nav', () => {
    cy.get('.nav-div > :nth-child(2) > :nth-child(2)')
      .contains('Favorites')
      .should('be.visible')
  });

  it('should have a home button on the nav', () => {
    cy.get('.nav-div > :nth-child(2) > :nth-child(1)')
      .contains('Home')
      .should('be.visible')
  });

  it('should see all Pokemon cards within that generation', () => {
    cy.get('.poke-card')
      .should('have.length', 6)
      .should('be.visible')
  });

  it('should see on each card a Pokemon image', () => {
    cy.get('.pokemon-grid')
      .get('[href="/generation-i/0"] > .card-sprite')
      .should('be.visible')
  });

  it('should see a name on each card', () => {
    cy.get('[href="/generation-i/0"] > .pokemon-name')
      .contains('BULBASAUR')
      .should('be.visible')
  });

  it('should see a search bar that allows user to search by name', () => {
    cy.get('.search-bar')
      .get('.search-input')
      .type('BULBASAUR')
      .should('be.visible')
  });

  it('should see the searched Pokemon card after a search', () => {
    cy.get('.search-input')
      .type('BULBASAUR')
      .get('.card-sprite')
      .should('have.length', 1)
      .should('be.visible')
  });

  it('should see a Go Back Button', () => {
    cy.get('button').contains('Go Back')
      .get('.go-back')
      .should('be.visible')
      .click()
  });

  it('should be able to visit favorites by clicking favorites button, and if no favorites available, it should see a message', () => {
    cy.get('button').contains('Favorites')
      .click()
      .get('.nothing-here')
      .contains('There are no pokemon here. Go add some favorites then come back!')
      .should('be.visible')
  });
});



