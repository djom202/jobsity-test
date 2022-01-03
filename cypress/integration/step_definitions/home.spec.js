// Cypress reference
/// <reference types="cypress" />
// Given
import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('I open Home page', () => {
    cy.visit('/')
})

Then(`I take a snapshot over the Home page`, () => {
    // Take a snapshot for visual diffing
    cy.percySnapshot('Homepage pixel perfect test')
})
