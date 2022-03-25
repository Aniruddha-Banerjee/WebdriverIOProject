@login
Feature: Navigate to "Opret Log ind" and back

@androidApp @local @login
Scenario: Navigate to "Opret Log ind" and back
  Given I open the App
  When I tap on the link "Opret Log ind"
  Then I switch back to the app
  Then I am on the Login page
  Then I close the App