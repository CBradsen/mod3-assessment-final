describe('Render new url', () => {
 beforeEach(() => {
  cy.intercept("GET", 'http://localhost:3001/api/v1/urls', {
  statusCode: 200,
  fixture: 'mockData.json'}).as('mockData');
  cy.visit('http://localhost:3000/');
  });

  it('should allow the user to type into the form and see their new shorented URL on the page', () => {
    cy.get('input[name=title]').type('Cypress lesson')
    cy.get('input[name=long_url]').type('https://frontend.turing.edu/lessons/module-3/intro-to-cypress-testing.html')

cy.intercept("POST", 'http://localhost:3001/api/v1/urls', {
      fixture: 'mockPostData.json'
    }).as('mockPost')
    
    cy.get('.shorten-button').click()
    cy.wait('@mockPost');
    cy.get('.url', { timeout: 5000 }).last().should('contain.text', "http://localhost:3001/useshorturl/7")
    cy.get('h3').last().should('contain.text', 'Cypress lesson')
  })

})


