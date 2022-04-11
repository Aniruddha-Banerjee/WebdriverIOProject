@settings @forburg
Feature: Validate forburg calender button

  @androidApp @settings @forburg @local @Test
  Scenario Outline: Validate forburg calender button
    Given I open the App
    Then I inserts username <Username>
    Then I inserts password <Password>
    When I tap on the Login button
    Then Set pin code <pincode> if asked
    Then I am on the Overview page
    When I tap on the Settings button
    Then I am on the Settings page
    When I tap on the ShortcutSpending button
    Then I am on the Spending page
    Then I see a button with calender name
    When I tap on the calender button
    Then I see a Consumption period popup
    Then I see the current Month and Year
    Then I see the remaing days and next month
    Then I close the App

    Examples:
      | Username   | Password   | pincode |
      | Tester2021 | Test123456 | 1234    |