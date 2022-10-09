Feature: Cydeo Login Practice

  @wip
  Scenario: positive login test
    Given user go to the login page
    When user enters correct credentials
    Then user should be in "Secure Area"

  @wip
  Scenario: negative login test
    Given user go to the login page
    When user enters wrong credentials
    Then user should be at "Login Page"

