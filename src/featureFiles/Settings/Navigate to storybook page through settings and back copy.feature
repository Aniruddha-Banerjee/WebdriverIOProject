@settings @forburg
Feature: Navigate to forburg page through settings and back

  @androidApp @settings @forburg @local 
  Scenario Outline: Navigate to forburg page through settings and back
    Given I open the App
    Then I inserts username <Username>
    Then I inserts password <Password>
    When I tap on the Login button
    Then Set pin code <pincode> if asked
    Then I am on the Overview page
    When I tap on the Settings button
    Then I am on the Settings page
    When I tap on the ShortcutStorybook button
    Then I am on the Storybook page
    Then I click back
    Then I am on the Settings page
    When I tap on the Overview button
    Then I am on the Overview page
    Then I close the App

    Examples:
      | Username   | Password   | pincode |
      | Tester2021 | Test123456 | 1234    |