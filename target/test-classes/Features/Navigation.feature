Feature: Navigation menu

#  @wip
  Scenario: driver navigation menu
    Given user at login page
    When user provide "driver" information
    Then user should see below options
      | Fleet      |
      | Customers  |
      | Activities |
      | System     |

#  @wip
  Scenario: driver navigation menu
    Given user at login page
    When user provide "sales manager" information
    Then user should see below options
      | Dashboards         |
      | Fleet              |
      | Customers          |
      | Sales              |
      | Activities         |
      | Marketing          |
      | Reports & Segments |
      | System             |