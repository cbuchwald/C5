/// <reference types="cypress" />

context('UI', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })

    it('UI has send button', () => {
        cy.get('.MuiButton-label').contains('Send')
    })

    it('Send button has the proper color', () => {
        cy.get('.MuiButtonBase-root').should('have.css','color', 'rgb(38, 198, 218)')
    })

    it('UI has input field button', () => {
        cy.get('.PrivateNotchedOutline-legendLabelled-14').contains('inputfield')
    })

    it('Send message to client by pressing Enter', () => {
        cy.get('.MuiInputBase-input').type('Hello Cognigy').type('{enter}')
        cy.get(':nth-child(2) > :nth-child(1) > .MuiGrid-item > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-body2').contains('Hello Cognigy')
        cy.get(':nth-child(3) > :nth-child(1) > .MuiGrid-item > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-body2').contains('Hello there!')
        cy.get(':nth-child(4) > :nth-child(1) > .MuiGrid-item > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-body2').contains('You said: Hello Cognigy')
        cy.get('.MuiTypography-h2').contains('Unterhaltung gestartet:')
    })

    it('Send message to client by pressing the send button', () => {
        cy.get('.MuiInputBase-input').type('Hello Cognigy')
        cy.get('.MuiButtonBase-root').click()
        cy.get(':nth-child(2) > :nth-child(1) > .MuiGrid-item > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-body2').contains('Hello Cognigy')
        cy.get(':nth-child(3) > :nth-child(1) > .MuiGrid-item > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-body2').contains('Hello there!')
        cy.get(':nth-child(4) > :nth-child(1) > .MuiGrid-item > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-body2').contains('You said: Hello Cognigy')
        cy.get('.MuiTypography-h2').contains('Unterhaltung gestartet:')
    })
})