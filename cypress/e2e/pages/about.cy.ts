describe('About page', () => {
  it('should have "About page content" heading', () => {
    cy.visit('/about');
    cy.get('h2').should('have.text', 'About page content');
  });
});
