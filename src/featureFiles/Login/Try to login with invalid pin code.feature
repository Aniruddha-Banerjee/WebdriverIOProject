@login
Feature: Try to login with invalid pin code



    @androidAppNoreset @login @local
    Scenario Outline: Try to login with invalid pin code
        Given I open the App
        When I inserts 4 digits pin <InvalidPinCode>
        Then An Error massage is shown where the text says "Forkert pinkode"
        Then I close the App
        Examples:
            | InvalidPinCode |
            | 9876           |