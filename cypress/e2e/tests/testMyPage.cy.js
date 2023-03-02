describe('The Home Page', () => {

  beforeEach('successfully loads', () => cy.visit('/'))

  // afterEach('time for humans', () => cy.wait(3000))

  it('can create an alert and ensure alert contains expected text', () => {
    cy.get('#btn_alert').click()
    cy.on('window:alert', str => expect(str).to.equal('Consider yourself alerted'))
  })

  it('can request and receive a lucky number', () => {
    cy.get('#btn_async').click()
    cy.contains('Your lucky number is')
  })

  it('can toggle viewing a table with the event history', () => {
    cy.get('#btn_history').click()
    cy.wait(1500)
    cy.get('#history').then(history => assert(history.is(':visible')))
    cy.get('#btn_history').click()
    cy.wait(1500)
    cy.get('#history').then(history => assert(!history.is(':visible')))
  })

  it('can send a text', () => {
    cy.get('#input_phone').type('+11234567890')
    cy.get('#btn_sms').click()
  })
})
