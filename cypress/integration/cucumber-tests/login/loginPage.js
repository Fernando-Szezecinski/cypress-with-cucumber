const BASE_URL = Cypress.env('baseUrl')
const USERNAME_TXT = '#user_login'
const PASSWORD_TXT = '#user_password'
const SUBMIT_BTN = 'input[name="submit"]'
const ACCOUNT_SUMMARY_TAB = '#account_summary_tab'
const ERROR_MSG = '.alert-error'

class LoginPage{

    static visit() {
        cy.visit(BASE_URL)
    }

    static fillUserName(name) {
        cy.get(USERNAME_TXT).type(name)
    }

    static fillPassword(pwd) {
        cy.get(PASSWORD_TXT).type(pwd)
    }

    static submitForm() {
        cy.get(SUBMIT_BTN).click()
    }

    static getAccountSummaryTab() {
        return cy.get(ACCOUNT_SUMMARY_TAB)
    }

    static ensureErrorIsDisplayed() {
        return cy.get(ERROR_MSG).contains('Login and/or password are wrong')
    }
}

export default LoginPage