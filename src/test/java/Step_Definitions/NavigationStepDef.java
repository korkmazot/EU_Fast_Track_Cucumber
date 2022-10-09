package Step_Definitions;

import Pages.NavigationPage;
import io.cucumber.java.en.*;
import org.junit.*;
import org.openqa.selenium.*;
import java.util.*;

public class NavigationStepDef {

    @Then("user should see below options")
    public void user_should_see_below_options(List<String> menuOptions) throws InterruptedException {
        List<String> actualOptions = new ArrayList<>();
        Thread.sleep(2000);

        for (WebElement ops : new NavigationPage().menuOps) {
            actualOptions.add(ops.getText());
        }
        Assert.assertEquals(menuOptions, actualOptions);
    }
}
