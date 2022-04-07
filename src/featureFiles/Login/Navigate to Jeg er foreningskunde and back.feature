@login
Feature: Navigate to "Jeg er foreningskunde" and back

@androidApp @local @login 
Scenario: Navigate to "Jeg er foreningskunde" and back
  Given I open the App
  When I tap on the link "Opret Log ind"
  Then I am on the page label "Opret dit YouSee Login"
  When I tap on the link "Jeg har internet gennem min arbejdsplads"
  Then I am on the page label "Opret dit YouSee Login"
  Then I click back 3 times
  Then I am on the Login page
  Then I close the App