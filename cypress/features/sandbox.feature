Feature: Sandbox Feature File

  Scenario: Visiting the front page
    When I visit "https://duckduckgo.com"
    Then I should see the search bar

  @only
  Scenario: Search Product - (Automation Exercise)
    This test case was taken from https://automationexercise.com/test_cases for practice

    Given I visited "https://automationexercise.com"
    And I opened the "Products" section
    When I search for the "Men Tshirt" product
    Then the results title is "SEARCHED PRODUCTS"
    And only the "Men Tshirt" product appears in the search results
