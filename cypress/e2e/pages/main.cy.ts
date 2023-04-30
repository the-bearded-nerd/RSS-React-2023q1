describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should initially have cards', () => {
    cy.get('.card').should('have.length.above', 2);
  });
  it('should show No results found when no results fount', () => {
    cy.get('[placeholder="Start search..."]').type('some strange data{enter}');
    cy.get('.card').should('have.length', 0);
    cy.get('p').should('have.text', 'No results found');
  });
});
