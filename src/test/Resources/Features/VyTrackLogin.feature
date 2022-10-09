Feature: VyTrack Login

#  @wip
 Scenario: Login as different roles
   Given user at login page
   When user provide "driver" information
   Then user should be able to login

#  @wip
  Scenario: Login as different roles
    Given user at login page
    When user provide "sales manager" information
    Then user should be able to login

#  @wip
  Scenario: Login as different roles
    Given user at login page
    When user provide "store manager" information
    Then user should be able to login
