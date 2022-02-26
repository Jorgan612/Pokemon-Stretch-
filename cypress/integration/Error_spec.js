describe('Error Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898', {statusCode: 500})
    cy.visit('http://localhost:3000/');
  });

  it('should show an error message if a 500 error occurs', () => {
    cy.contains('Oops!! Something went wrong!');
  });

  it('should show an error if a 404 error occurs', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898', {statusCode: 404})
     cy.visit('http://localhost:3000/');
    cy.contains('Oops!! Something went wrong!');

  })
})
