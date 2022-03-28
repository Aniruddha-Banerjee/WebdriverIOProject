@login
Feature: Login with pin code

  # @androidAppNoreset @login @local
  Scenario Outline: Login with pin code
    Given I open the App
    When I inserts 4 digits pin <Pincode>
    Then I am on the Home page
    Then I close the App
    Examples:
      | Pincode |
      | 1234    |