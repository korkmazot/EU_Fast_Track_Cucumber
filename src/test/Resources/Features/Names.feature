Feature: user name and last name should be correct

  @wip
  Scenario Outline: Compare name of user
    Given user at login page
    When user login using below credentials
      | user     | <user>     |
      | password | <password> |
    Then user "<firstName>" and "<lastName>" should be correct

    Examples:
      | user            | firstName | lastName | password    |
      | user1           | John      | Doe      | UserUser123 |
      | salesmanager101 | John      | Doe      | UserUser123 |
      | storemanager85  | John      | Doe      | UserUser123 |