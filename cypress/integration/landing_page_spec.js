//Need to switch to intercept testing with stubbing and add fixtures 


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

  it('should have a home button on the nav', () => {
    cy.get('.nav-div > :nth-child(2) > :nth-child(1)')
  .contains('Home')
  .click()
  .should('be.visible')
  })

  it('should have a favorites button on the nav', () => {
  cy.get('.nav-div > :nth-child(2) > :nth-child(2)')
  .contains('Favorites')
  .click()
  .should('be.visible')
  })

  it('should have a search field', () => {
    cy.get('input')
    .type('caterpie')
    .should('be.visible')
  })

  it('should have a search button', () => {
    cy.get('.nav-div > :nth-child(2) > :nth-child(4)')
    .contains('Search')
    .should('be.visible')
  })

  it('should be able to click a Pokeball and see a list of a specific generation\'s Pokemon', () => {
    cy.get('[href="/generation-i"]')
    .click()
    .url().should('eq', 'http://localhost:3000/generation-i')
  })


});