@login
Feature: Login to the app and then logout sucessfully

  @login @local @androidApp
  Scenario Outline: Login to the app and then logout sucessfully
    Given I open the App
    Then I inserts username <Username>
    Then I inserts password <Password>
    When I tap on the Login button
    Then Set pin code <pincode> if asked
    Then I am on the Overview page
    When I tap on the Settings button
    Then I am on the Settings page
    When I tap on the LogOff button
    Then I am on the Login page
    Then I close the App

    Examples:
      | Username   | Password   | pincode |
      | Tester2021 | Test123456 | 1234    |