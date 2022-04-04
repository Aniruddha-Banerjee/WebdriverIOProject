@login
Feature: Create pin code

@androidApp @login @local @androidAppNoreset @Test
Scenario Outline: Create pin code
Given I open the App
Then I inserts username <Username>
Then I inserts password <Password>
When I tap on the Login button
Then I am on the create pin code screen
When I inserts 4 digits pin <Pincode>
And inserts the same 4 digits pin <Pincode> again
Then I am on the Home page
Then I close the App

Examples:
  | Username   | Password   | Pincode |
  | Tester2021 | Test123456 | 1234    |