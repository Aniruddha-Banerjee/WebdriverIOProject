@login
Feature: Try to login with invalid username




@androidApp @login @local
Scenario Outline: Try to login with invalid username
  Given I open the App
  Then I inserts username <Username>
  Then I inserts password <Password>
  When I tap on the Login button
  Then An Error massage is shown where the text says "Forkert brugernavn eller adgangskode"
  Then I close the App
  Examples:
    | Username    | Password   |
    | Tester_1234 | Test123456 |