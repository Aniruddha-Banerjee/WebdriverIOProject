@bills
Feature: Navigate to Bills page and back

  @androidApp @bills @local @Test
  Scenario Outline: Navigate to Bills page and back
    Given I open the App
    Then I inserts username <Username>
    Then I inserts password <Password>
    When I tap on the Login button
    Then Set pin code <pincode> if asked
    Then I am on the Overview page
    When I tap on the Bills button
    Then I am on the Bills page
     Then Step Test
    Then I scroll down to FirstBill Button
    # Then Step Test
    # When I tap on the FirstBill button
    # Then I click back
    # Then I am on the Bills page
    Then I close the App

    Examples:
      | Username   | Password   | pincode |
      | Tester2021 | Test123456 | 1234    |