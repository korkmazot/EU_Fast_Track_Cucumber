package Step_Definitions;

import Pages.Login;
import Utilities.ConfigurationReader;
import Utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginTest {

    Login login = new Login();

    @Given("user go to the login page")
    public void user_go_to_the_login_page() {
        Driver.get().get(ConfigurationReader.get("login_url"));
    }

    @When("user enters correct credentials")
    public void user_enters_correct_credentials() {
        String username = ConfigurationReader.get("username");
        String password = ConfigurationReader.get("password");
        login.userNameInput.sendKeys(username);
        login.passwordInput.sendKeys(password);
        login.loginBtn.click();
    }

    @Then("user should be in {string}")
    public void user_should_be_in(String string) throws InterruptedException {
        Thread.sleep(1000);
            String actualTitle = login.title.getText();
            Assert.assertEquals(string, actualTitle);
    }

    @When("user enters wrong credentials")
    public void user_enters_wrong_credentials() {
        String username = ConfigurationReader.get("username") + "1";
        String password = ConfigurationReader.get("password") + "1";
        login.userNameInput.sendKeys(username);
        login.passwordInput.sendKeys(password);
        login.loginBtn.click();
    }

    @Then("user should be at {string}")
    public void user_should_be_at(String string) {
        String actualTitle = login.title.getText();
        Assert.assertEquals(string, actualTitle);
    }



}
