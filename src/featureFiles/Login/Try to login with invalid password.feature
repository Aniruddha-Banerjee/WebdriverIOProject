@login
Feature: Try to login with invalid password

@androidApp @login @local
Scenario Outline: Try to login with invalid password
  Given I open the App
  Then I inserts username <Username>
  Then I inserts password <Password>
  When I tap on the Login button
  Then An Error massage is shown where the text says "Forkert brugernavn eller adgangskode"
  Then I close the App
  Examples:
    | Username   | Password |
    | Tester2021 | Test1234 |


