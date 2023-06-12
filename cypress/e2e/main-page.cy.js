describe('Main page', () => {
  
  beforeEach(() => {
  cy.intercept("Get", 'http://localhost:3001/api/v1/urls', {
  statusCode: 200,
  fixture: 'mockData.json'}).as('mockData');
  cy.visit('http://localhost:3000/');
  });

  it('should render the page tile', () => {
    cy.get('h1').should('contain', 'URL Shortener')
  })

  it('should render the existing shortened URLs', () => {
    cy.get('.url').should('contain', "http://localhost:3001/useshorturl/1")
    cy.get('.url').should('contain', "http://localhost:3001/useshorturl/4")
  
  })

  it('should allow the user to see the Form with the inputs of Title and url to shorten', () => {
    cy.get('.inputForm').should('be.visible')
    cy.get("input[placeholder='Title...']").should('be.visible')
    cy.get("input[placeholder='URL to Shorten...']").should('be.visible')
  })

  it('should allow the user to type into the form and see their words reflected in the input fields', () => {
    cy.get('input[name=title]').type('The Title')
    cy.get('input[name=long_url]').type('https://frontend.turing.edu/lessons/module-3/intro-to-cypress-testing.html')
  })

});


