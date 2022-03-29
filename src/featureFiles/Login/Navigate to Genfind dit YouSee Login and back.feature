@login
Feature: Navigate to "Genfind dit YouSee Login" and back

@androidApp @login @local
Scenario: Navigate to "Genfind dit YouSee Login" and back
  Given I open the App
  When I tap on the link "Glemt Log ind"
  Then I am on the page label "Glemt adgangskode"
  # Then Test "Benyt NemID til at genfinde dit login"
  When I tap on the link "Benyt NemID til at genfinde dit login"
  Then I am on the page label "Genfind dit YouSee Login"
  Then I click back
  Then I am on the Login page
  Then I close the App