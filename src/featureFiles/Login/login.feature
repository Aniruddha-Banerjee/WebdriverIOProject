@login
Feature: Login functionality of the app


# # @Local
@androidApp
Scenario Outline: Login to the App with correct credentials
  Given I open the App
  Then I inserts username <Username>
  Then I inserts password <Password>
  When I tap on the Login button
  Then Set pin code <pincode> if asked
  Then I am on the Home page
  Then I close the App
  Examples:
    | Username   | Password   | pincode |
    | Tester2021 | Test123456 | 1234    |


# @androidApp
# Scenario: Navigate to "Opret Log ind" and back
#   Given I open the App
#   When I tap on the link "Opret Log ind"
#   Then I switch back to the app
#   Then I am on the Login page
#   Then I close the App

# @androidApp
# Scenario: Navigate to "Glemt Log ind" and back
#   Given I open the App
#   When I tap on the link "Glemt Log ind"
#   Then I switch back to the app
#   Then I am on the Login page
#   Then I close the App

# @androidApp
# Scenario Outline: Try to login with invalid username
#   Given I open the App
#   Then I inserts username <Username>
#   Then I inserts password <Password>
#   When I tap on the Login button
#   Then An Error massage is shown where the text says "Forkert brugernavn eller adgangskode"
#   Then I close the App
#   Examples:
#     | Username    | Password   |
#     | Tester_1234 | Test123456 |


# @androidApp
# Scenario Outline: Try to login with invalid password
#   Given I open the App
#   Then I inserts username <Username>
#   Then I inserts password <Password>
#   When I tap on the Login button
#   Then An Error massage is shown where the text says "Forkert brugernavn eller adgangskode"
#   Then I close the App
#   Examples:
#     | Username   | Password |
#     | Tester2021 | Test1234 |

# @androidApp
# Scenario Outline: Valid login credentials
#   Given I open the App
#   Then I inserts username <Username>
#   Then I inserts password <Password>
#   When I tap on the Login button
#   Then I am on the create pin code screen
#   Then I close the App
#   Examples:
#     | Username   | Password   |
#     | Tester2021 | Test123456 |

# @androidApp
# Scenario Outline: Create pin code
# Given I open the App
# Then I inserts username <Username>
# Then I inserts password <Password>
# When I tap on the Login button
# Then I am on the create pin code screen
# When I inserts 4 digits pin <Pincode>
# And inserts the same 4 digits pin <Pincode> again
# Then I am on the Home page
# Then I close the App

# Examples:
#   | Username   | Password   | Pincode |
#   | Tester2021 | Test123456 | 1234    |


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


# Scenario Outline: Login with pin code
#   Given I open the app not from fresh in "Test" region
#   When I submit with valid pin code "<Pincode>"
#   Then I am on the dashboard screen
#   Then I close the App
#   Examples:
#     | Pincode |
#     | 1234    |


# Scenario Outline: Try to login with invalid pin code
#   Given I open the app not from fresh in "Test" region
#   When I tap on 4 digits pin "<InvalidPinCode>" that is not my valid pin code
#   Then I am on the pin code screen
#   Then I close the App
#   Examples:
#     | InvalidPinCode |
#     | 9876           |


# Scenario Outline: Too many pin code tries
#   Given I open the app not from fresh in "Test" region
#   When I tap on 4 digits "<InvalidPinCode>" that is not my valid pin code for 4 times
#   Then I am on the login screen
#   Then I close the App
#   Examples:
#     | InvalidPinCode |
#     | 9876           |