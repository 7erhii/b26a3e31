describe('My React App', () => {
    it('should load the home page', () => {
      cy.visit('http://localhost:3000'); 
      cy.contains('Welcome to React');
    });
  

  });