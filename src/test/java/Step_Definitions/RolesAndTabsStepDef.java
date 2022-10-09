package Step_Definitions;

import Pages.RolesAndTabsPage;
import Utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.*;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.*;
import org.openqa.selenium.support.ui.*;

public class RolesAndTabsStepDef {

    @When("user go to {string} and {string}")
    public void user_go_to_and(String tab, String module) {
        WebDriverWait wait = new WebDriverWait(Driver.get(), 20);
        RolesAndTabsPage tabs = new RolesAndTabsPage();
        WebElement tabb = tabs.getTab(tab);
        WebElement modulee = tabs.getModule(module);

        Actions actions = new Actions(Driver.get());
        wait.until(ExpectedConditions.visibilityOf(tabb));
        actions.moveToElement(tabb).perform();
        modulee.click();
    }

    @Then("the title should be euqal to {string}")
    public void the_title_should_be_euqal_to(String expectedTitle) throws InterruptedException {
        Thread.sleep(3000);
        String actualTitle = Driver.get().getTitle();
        Assert.assertEquals(expectedTitle, actualTitle);
    }
}