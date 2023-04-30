describe('Form page', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('should have h2 header with text "Form page content"', () => {
    cy.get('h2').should('have.text', 'Form page content');
  });

  it('should have form element', () => {
    cy.get('form').should('exist');
  });
  it('shows errors if input not valid', () => {
    cy.get('.btn-submit').click();
    cy.contains('Must enter name').should('exist');
    cy.contains('Must pick date').should('exist');
    cy.contains('Must pick one').should('exist');
    cy.contains('Must add something').should('exist');
    cy.contains('Must consent').should('exist');
  });
});
