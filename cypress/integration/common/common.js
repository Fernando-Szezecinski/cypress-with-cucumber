import { defineStep } from 'cypress-cucumber-preprocessor/steps'

defineStep('I want to wait for {int} seconds', s => {
    cy.wait(s * 1000)
})

defineStep('I see title {string} in the title', title => {
    cy.title().should('include', title)
})

defineStep('I see {string} in the URL', url => {
    cy.url().should('include', url)
})