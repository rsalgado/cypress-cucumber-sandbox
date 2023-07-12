import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit {string}", function(URL) {
  cy.visit(URL);
});

Then("I should see the search bar", function() {
  cy.get("#searchbox_input")
    .should("be.visible")
    .should("have.attr", "placeholder", "Search the web without being tracked");
});
