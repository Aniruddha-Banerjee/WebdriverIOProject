@login
Feature: Navigate to "Glemt Brugernavn" and back

@androidApp @login @local
Scenario: Navigate to "Glemt Brugernavn" and back
  Given I open the App
  When I tap on the link "Glemt Log ind"
  Then I am on the page label "Glemt adgangskode"
  When I tap on the link "Benyt mail til at genfinde dit login"
  Then I am on the page label "Glemt Brugernavn"
  Then I click back 2 times
  Then I am on the Login page
  Then I close the App