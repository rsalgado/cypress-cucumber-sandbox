import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I visited {string}", function(URL) {
  cy.visit(URL);
});

Given("I opened the {string} section", function(sectionName) {
  cy.contains(sectionName).click();
});

When("I visit {string}", function(URL) {
  cy.visit(URL);
});

When("I search for the {string} product", function(productName) {
  cy.get("#search_product").type(productName);
  cy.get("#submit_search").click();
});

Then("the results title is {string}", function (resultsTitle) {
  cy.get(".title").should(($el) => {
    const expectedTitle = normalizeText(resultsTitle);
    const actualTitle = normalizeText($el.text());
    expect(actualTitle).to.eq(expectedTitle);
  });
});

Then("only the {string} product appears in the search results", function(productName) {
  cy.get(".single-products")
    .should("have.length", 1);

  cy.get(".single-products")
    .first()
    .find(".productinfo p")
    .should("have.text", productName);
});

Then("I should see the search bar", function() {
  cy.get("#searchbox_input")
    .should("be.visible")
    .should("have.attr", "placeholder", "Search the web without being tracked");
});


// Helper functions
// TODO: Consider moving this code to a separate file when the code base grows.


/**
 *
 * @param {String} text
 * @returns String
 */
const normalizeText = (text) => text.toUpperCase();