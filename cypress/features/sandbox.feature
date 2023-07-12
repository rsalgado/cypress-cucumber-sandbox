Feature: Sandbox Feature File

  Scenario: Visiting the front page
    When I visit "https://duckduckgo.com"
    Then I should see the search bar
