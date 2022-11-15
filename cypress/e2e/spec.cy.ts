describe('UserContainer spec', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
