@login
Feature: Navigate to "Opret YouSee mobil-login" for Limited Access Login and back

@androidApp @local @login
Scenario: Navigate to "Opret YouSee mobil-login" for Limited Access Login and back
  Given I open the App
  When I tap on the link "Opret Log ind"
  Then I am on the page label "Opret dit YouSee Login"
  When I tap on the link "Limited Access Login using sms code"
  Then I am on the page label "Opret YouSee mobil-login"
  Then I click back 2 times
  Then I am on the Login page
  Then I close the App