@login
Feature: Login functionality of the app

# Scenario: Try to login with empty fields
#   Given I open the App
#   And I haven't inserted anything in the username and password field
#   When I tap on the "log ind" button
#   Then a popup message shows
#   And the text says "Brugernavn eller adgangskode mangler"
#   Then I close the App

# yet to complete
# Scenario Outline: Try to login with only username
#   Given I open the App
#   And I inserts an username "<Username>"
#   When I tap on the "log ind" button
#   Then a popup message shows
#   And the text says "Brugernavn eller adgangskode mangler"
#   Then I close the App
#   Examples:
#     | Username           |
#     | test_290720_200234 |

# yet to complete
# Scenario Outline: Try to login with only password
#   Given I open the App
#   And I inserts a password "<Password>"
#   When I tap on the "log ind" button
#   Then a popup message shows
#   And the text says "Brugernavn eller adgangskode mangler"
#   Then I close the App
#   Examples:
#     | Password |
#     | Test1234 |


#  @androidAppNoreset @login @local
# Scenario Outline: Too many pin code tries
#   Given I open the app not from fresh in "Test" region
#   When I tap on 4 digits "<InvalidPinCode>" that is not my valid pin code for 4 times
#   Then I am on the login screen
#   Then I close the App
#   Examples:
#     | InvalidPinCode |
#     | 9876           |
