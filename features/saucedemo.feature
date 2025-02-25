Feature: Add highest price item to cart

  Scenario: Select and add the most expensive item to the cart
    Given I navigate to the SauceDemo website
    When I log in with "standard_user" and "secret_sauce"
    And I select the highest price item
    Then I should see the item added to the cart
