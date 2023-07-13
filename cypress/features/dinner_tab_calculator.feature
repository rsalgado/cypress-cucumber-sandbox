Feature: Dinner Tab Calculator

  Background: Loading the page
    Given I visited "./local_html_files/dinner-tab-calculator/index.html"


  @only
  Scenario: Adding a new user
    When I add an user named "Roberto"
    Then a card for the user "Roberto" should appear
    And the card for the user "Roberto" should have a "Sub-Total" of "0.00"

  @only
  Scenario: Adding an item to an user's tab
    Given a user named "Roberto" is added
    And the user's tab is open
    When I add the item "Coca-Cola Zero" with a value of "3000"
    Then the user's tab Sub-Total should be "3000"
