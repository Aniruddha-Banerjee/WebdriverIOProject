@login
Feature: Login to the App with correct credentials



@androidApp @Local @login
Scenario Outline: Login to the App with correct credentials
  Given I open the App
  Then I inserts username <Username>
  Then I inserts password <Password>
  When I tap on the Login button
  Then Set pin code <pincode> if asked
  Then I am on the Home page
  Then I close the App
  Examples:
    | Username   | Password   | pincode |
    | Tester2021 | Test123456 | 1234    |