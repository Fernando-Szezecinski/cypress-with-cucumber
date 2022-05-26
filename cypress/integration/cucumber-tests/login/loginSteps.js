/// <reference types="cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open login page', () => {
    LoginPage.visit()
})

When('I submit login', () => {
    LoginPage.submitForm()
})

Then('I should see homepage', () => {
    LoginPage.getAccountSummaryTab()
        .should('be.visible')
}) 

And('I fill username with {string}', (username) => {
    LoginPage.fillUserName(username)
})

And('I fill password with {string}', (password) => {
    LoginPage.fillPassword(password)
})

Then('I should see an error message', () => {
    LoginPage.ensureErrorIsDisplayed()
})