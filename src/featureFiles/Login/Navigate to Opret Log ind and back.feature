@login
Feature: Navigate to "Opret Log ind" and back

@androidApp @local @login
Scenario: Navigate to "Opret Log ind" and back
  Given I open the App
  When I tap on the link "Opret Log ind"
  Then I am on the page label "Opret dit YouSee Login"
  Then I click back
  Then I am on the Login page
  Then I close the App