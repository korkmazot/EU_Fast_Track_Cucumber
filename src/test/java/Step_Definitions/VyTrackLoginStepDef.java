package Step_Definitions;

import Pages.VyTrackLoginPage;
import Utilities.ConfigurationReader;
import Utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class VyTrackLoginStepDef {

    @Given("user at login page")
    public void user_at_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("user provide {string} information")
    public void user_provide_information(String string) {
        String username = null;
        String password = null;

        if(string.equals("driver")){
            username = ConfigurationReader.get("driver_username");
            password = ConfigurationReader.get("driver_password");
        }else if(string.equals("sales manager")){
            username = ConfigurationReader.get("sales_manager_username");
            password = ConfigurationReader.get("sales_manager_password");
        }else if(string.equals("store manager")){
            username = ConfigurationReader.get("store_manager_username");
            password = ConfigurationReader.get("store_manager_password");
        }

        new VyTrackLoginPage().login(username,password);

    }

    @Then("user should be able to login")
    public void user_should_be_able_to_login() throws InterruptedException {
        Thread.sleep(1000);
        String actualTitle = Driver.get().getTitle();
        Assert.assertEquals("Dashboard", actualTitle);
    }
}
