import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";


Given("a user named {string} is added", function(userName) {
  this.userName = userName;
  addUser(userName);
});

Given("the user's tab is open", function() {
  getCardFor(this.userName).click();
});

When("I add an user named {string}", function(userName) {
  addUser(userName);
});

When("I add the item {string} with a value of {string}", function(itemName, itemValue) {
  cy.get("#items-section")
    .find("#new-item-form")
    .within(() => {
      cy.get(".field.name").type(itemName);
      cy.get(".field.value").type(itemValue);
      cy.get(".field.value").type("{enter}");
    })
});

Then("a card for the user {string} should appear", function(userName) {
  getCardFor(userName).should("be.visible");
});

Then("the card for the user {string} should have a {string} of {string}", function(userName, rowName, rowValue) {
  getCardFor(userName)
    .contains(rowName)
    .closest(".details-row")
    .find(".value")
    .should("have.text", rowValue);
});

Then("the user's tab Sub-Total should be {string}", function(subTotal) {
  cy.get("#items-section")
    .find(".subtotal .amount")
    .should("have.text", subTotal);
});


function getCardFor(userName) {
  return cy.get(".person-card .person-header .name")
            .filter((_index, $el) => $el.value === userName)
            .closest(".person-card");
};

function addUser(userName) {
  cy.get("input[name=person-form-name]").type(userName);
  cy.get("#person-form button.-primary").click();  
};
