import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", function() {
  cy.visit("https://duckduckgo.com")
});

Then("I should see the search bar", function() {
  cy.get("#searchbox_input")
    .should("be.visible")
    .should("have.attr", "placeholder", "Search the web without being tracked");
});
