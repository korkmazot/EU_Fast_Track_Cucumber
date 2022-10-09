package Pages;

import org.openqa.selenium.*;
import Utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.*;
import java.util.*;

public class NavigationPage {

    public NavigationPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css = "span.title-level-1")
    public List<WebElement> menuOps;
}
