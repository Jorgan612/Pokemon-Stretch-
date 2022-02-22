beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})