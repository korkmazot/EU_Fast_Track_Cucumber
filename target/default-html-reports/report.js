$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Resources/Features/Login.feature");
formatter.feature({
  "name": "Cydeo Login Practice",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "positive login test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user go to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginTest.user_go_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters correct credentials",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.LoginTest.user_enters_correct_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be in \"Secure Area\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.LoginTest.user_should_be_in(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Secure Area]\u003e but was:\u003c[Login Page]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat Step_Definitions.LoginTest.user_should_be_in(LoginTest.java:33)\r\n\tat ✽.user should be in \"Secure Area\"(file:///C:/Users/omert/IdeaProjects/EU_Fast_Track_Cucumber/src/test/Resources/Features/Login.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "negative login test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user go to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definitions.LoginTest.user_go_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters wrong credentials",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definitions.LoginTest.user_enters_wrong_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be at \"Login Page\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definitions.LoginTest.user_should_be_at(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});