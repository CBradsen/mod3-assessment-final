import mockData from '../fixtures/mockData.json'

describe('Main page', () => {
  
  beforeEach(() => {
cy.intercept('http://localhost:3001/api/v1/urls',
  {fixture: 'mock-data'}).as('mockData');
  cy.visit('http://localhost:3000/')

  })
  it('should render the page tile', () => {
  })

  it('should render the existing shortened URLs', () => {

  })

  it('should render the form with proper inputs', () => {
    // title:
    // urlToShorten:
  })

  it('should allow the user to type into the form and see their words reflected in the input fields', () => {

  })

})



// When a user visits the page, they can view the page title and the existing shortened URLs
// When a user visits the page, they can view the Form with the proper inputs
// When a user fills out the form, the information is reflected in the input fields