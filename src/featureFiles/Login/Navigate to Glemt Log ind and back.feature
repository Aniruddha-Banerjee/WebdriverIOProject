@login
Feature: Navigate to "Glemt Log ind" and back

@androidApp @login @local
Scenario: Navigate to "Glemt Log ind" and back
  Given I open the App
  When I tap on the link "Glemt Log ind"
  Then I switch back to the app
  Then I am on the Login page
  Then I close the App