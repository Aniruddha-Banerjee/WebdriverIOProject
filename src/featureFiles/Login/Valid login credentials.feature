@login
Feature: Valid login credentials

@androidApp @login @local
Scenario Outline: Valid login credentials
  Given I open the App
  Then I inserts username <Username>
  Then I inserts password <Password>
  When I tap on the Login button
  Then I am on the create pin code screen
  Then I close the App
  Examples:
    | Username   | Password   |
    | Tester2021 | Test123456 |