$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Resources/Features/Names.feature");
formatter.feature({
  "name": "user name and last name should be correct",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Compare name of user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user at login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user login using below credentials",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "user",
        "\u003cuser\u003e"
      ]
    },
    {
      "cells": [
        "password",
        "\u003cpassword\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "user \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\" should be correct",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "firstName",
        "lastName",
        "password"
      ]
    },
    {
      "cells": [
        "user1",
        "John",
        "Doe",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "salesmanager101",
        "John",
        "Doe",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "storemanager85",
        "John",
        "Doe",
        "UserUser123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Compare name of user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.VyTrackLoginStepDef.user_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login using below credentials",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.NamesStepDef.user_login_using_below_credentials(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user \"John\" and \"Doe\" should be correct",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.NamesStepDef.user_and_should_be_correct(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Compare name of user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.VyTrackLoginStepDef.user_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login using below credentials",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.NamesStepDef.user_login_using_below_credentials(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user \"John\" and \"Doe\" should be correct",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.NamesStepDef.user_and_should_be_correct(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c[John, Doe]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat Step_Definitions.NamesStepDef.user_and_should_be_correct(NamesStepDef.java:26)\r\n\tat ✽.user \"John\" and \"Doe\" should be correct(file:///C:/Users/omert/IdeaProjects/EU_Fast_Track_Cucumber/src/test/Resources/Features/Names.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Compare name of user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.VyTrackLoginStepDef.user_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login using below credentials",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.NamesStepDef.user_login_using_below_credentials(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user \"John\" and \"Doe\" should be correct",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.NamesStepDef.user_and_should_be_correct(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});