@help
Feature: Navigate to help page and back

  @androidApp @help @local
  Scenario Outline: Navigate to help page and back
    Given I open the App
    Then I inserts username <Username>
    Then I inserts password <Password>
    When I tap on the Login button
    Then Set pin code <pincode> if asked
    Then I am on the Overview page
    When I tap on the Help button
    Then I am on the Help page
    When I tap on the Overview button
    Then I am on the Overview page
    Then I close the App

    Examples:
      | Username   | Password   | pincode |
      | Tester2021 | Test123456 | 1234    |