Feature: Roles and Tabs

#  @wip
  Scenario Outline: Different modules and different titles
    Given user at login page
    When user provide "<role>" information
    And user go to "<tab>" and "<module>"
    Then the title should be equal to "<title>"

    Examples:
      | role          | tab        | module          | title                                                              |
      | driver        | Fleet      | Vehicles Model  | Vehicles Model - Entities - System - Car - Entities - System       |
      | driver        | Customers  | Contacts        | Contacts - Customers                                               |
      | driver        | Activities | Calendar Events | Calendar Events - Activities                                       |
      | driver        | System     | Jobs            | Jobs - System                                                      |
#      | sales manager | Fleet      | Vehicles        | All - Car - Entities - System - Car - Entities - System            |
#      | sales manager | Fleet      | Vehicles Model  | Vehicles Model - Entities - System - Car - Entities - System       |
#      | sales manager | Customers  | Accounts        | Accounts - Customers                                               |
#      | sales manager | Customers  | Contacts        | Contacts - Customers                                               |
#      | sales manager | Activities | Calendar Events | All - Calendar Events - Activities                                 |
#      | sales manager | System     | Jobs            | All - Jobs - System                                                |
#      | store manager | Fleet      | Vehicles        | Car - Entities - System - Car - Entities - System                  |
#      | store manager | Fleet      | Vehicles Model  | All - Vehicles Model - Entities - System - Car - Entities - System |
#      | store manager | Customers  | Accounts        | Accounts - Customers                                               |
#      | store manager | Customers  | Contacts        | All - Contacts - Customers                                         |
#      | store manager | Activities | Calendar Events | All - Calendar Events - Activities                                 |
#      | store manager | System     | Jobs            | All - Jobs - System                                                |
#      | store manager | System     | Menus           | Dashboard                                                          |

