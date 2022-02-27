
describe('Pokedex User Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', ' https://pokeapi.co/api/v2/pokemon-species/1/', {fixture: "pokeDetails.json"})
      .visit('http://localhost:3000/generation-i/0');   
     cy.get('[href="/generation-i"]')
      .click()
      .get('[href="/generation-i/0"] > .card-sprite')
      .click()
  });

   it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/generation-i/0')
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

  it('should see a Pokedex card for selected Pokemon', () => {
    cy.get('.poke-details')
      .should('be.visible')
  });

  it('should see all of the Pokemon\'s stats', () =>{
    cy.get('.poke-stats-style')
      .should('be.visible')
  });

  it('should see the Pokemon\'s height', () => {
    cy.get('.height')
      .contains('Height: 0.7 meters')
      .should('be.visible')
  });

  it('should see the Pokemon\'s weight', () => {
    cy.get('.weight')
      .contains('Weight: 6.9 kilograms')
      .should('be.visible')
  });

  it('should see the Pokemon\'s types', () => {
    cy.get('.types')
      .children('.types > ul')
      .contains('Types:')
      .get('.type > :nth-child(1)')
      .contains('Grass')
      .get('.type > :nth-child(2)')
      .contains('Poison')
      .should('be.visible')
  });

  it('should see the Pokemon\'s moves', () => {
    cy.get('.moves')
      .contains('Moves:')
      .get('.tags-drop-down')
      .get('[value="razor-wind"]')
      .contains('Razor-wind')
      .should('be.visible')
  });

  it('should see additional details about the Pokemon', () => {
    cy.get('.name-sprite')
      .should('be.visible')
  })

  it('should see an image', () => {
    cy.get('.details-sprite')
      .should('be.visible')
  });

  it('should see a button to favorite that Pokemon', () => {
    cy.get('.favorite')
      .contains('Favorite')
      .click()
      .contains('Un-Favorite')
      .should('be.visible')
  });

  it('should see the Pokemon\'s name and ID number', () => {
    cy.get('.name-id')
      .contains('Bulbasaur')
      .get('.id')
      .contains('ID: #1')
      .should('be.visible')
  });

  it('should see a Go Back Button', () => {
    cy.get('.home').contains('Go Back')    
      .click()
      .url()
      .should('eq', 'http://localhost:3000/generation-i')
  });
});