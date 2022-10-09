package Pages;

import Utilities.Driver;
import org.junit.AfterClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.*;

public class Login {

    public Login() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "//input[@name=\"username\"]")
    public WebElement userNameInput;

    @FindBy(xpath = "//input[@name=\"password\"]")
    public WebElement passwordInput;

    @FindBy(css = "#wooden_spoon")
    public WebElement loginBtn;

    @FindBy(xpath = "//h2")
    public WebElement title;

    @AfterClass
    public void closePage(){
        Driver.closeDriver();
    }

}
