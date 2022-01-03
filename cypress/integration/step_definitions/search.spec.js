// Cypress reference
/// <reference types="cypress" />
// Given
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('I open Home page', () => {
    cy.visit('/')
})

When('I click on the search button', () => {
    cy.get('button[name="submit_search"]').click()
})

When(`I type {string} on the searchbar`, (keyword) => {
    cy.get('input[name="search_query"]').type(keyword)
})

Then(`the {string} text must be displayed`, (msj) => {
    cy.get('body').contains(msj).should('have.length', 1)
})

Then(`the {int} results must be displayed`, (count) => {
    cy.get('.product_list.grid.row > li').should('have.length', count)
})

Then(`the {string} color must be displayed {int} times`, (color, count) => {
    let times = 0

    cy.get('.product_list.grid.row > li .color_to_pick_list a')
        .each(($el) => {
            if ($el.eq(0).attr('href').includes(color)) times++
        })
        .then(() => expect(count).to.be.equal(times))
})
