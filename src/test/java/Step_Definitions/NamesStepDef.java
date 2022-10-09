package Step_Definitions;

import Pages.NamesPage;
import Pages.VyTrackLoginPage;
import io.cucumber.java.en.*;
import org.junit.*;
import java.util.*;

public class NamesStepDef {

    @When("user login using below credentials")
    public void user_login_using_below_credentials(Map<String, String> userInfo) {

        new VyTrackLoginPage().login(userInfo.get("user"), userInfo.get("password"));

    }


    @Then("user {string} and {string} should be correct")
    public void user_and_should_be_correct(String fName, String lName) throws InterruptedException {
        Thread.sleep(2000);
        List<String> expectedname = new ArrayList<>();
        expectedname.add(fName);
        expectedname.add(lName);

        Assert.assertEquals(expectedname, new NamesPage().name());
    }
}