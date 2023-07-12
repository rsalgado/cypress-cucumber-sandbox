Feature: Visiting DuckDuckGO

  Scenario: Visiting the front page
    When I visit duckduckgo.com
    Then I should see the search bar
