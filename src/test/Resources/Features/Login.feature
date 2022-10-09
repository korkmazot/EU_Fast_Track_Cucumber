Feature: Cydeo Login Practice

  Background:
    Given user go to the login page

#  @wip
  Scenario: positive login test
    When user enters correct credentials
    Then user should be in "Secure Area"

#  @wip @abc
  Scenario: negative login test
    When user enters wrong credentials
    Then user should be at "Login Page"

