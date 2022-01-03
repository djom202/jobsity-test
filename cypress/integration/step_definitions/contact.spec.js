// Cypress reference
/// <reference types="cypress" />
// Given
import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given('I navigate to Contact page', () => {
    cy.visit('/index.php?controller=contact')
})

When('I click on the submit button', () => {
    cy.get('button[name="submitMessage"]').click()
})

When(`I type the email as {string}`, (email) => {
    cy.get('input[name="from"]').type(email)
})

When(`I type the message as {string}`, (message) => {
    cy.get('textarea[name="message"]').type(message)
})

When(`I choose the subject as {string}`, (option) => {
    cy.get('select[name="id_contact"]').select(option)
})

When(`I type my order reference as {string}`, (order) => {
    cy.get('input[name="id_order"]').type(order)
})

When(`I choose a file to upload`, () => {
    const filepath = 'images/dog.jpeg'
    cy.get('input[name="fileUpload"]').attachFile(filepath)
})
