package Pages;

import Utilities.Driver;
import org.openqa.selenium.*;
import org.openqa.selenium.support.*;
import java.util.*;

public class NamesPage {

    public NamesPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    public List<String> name(){
        String names = Driver.get().findElement(By.cssSelector("#user-menu a")).getText();
        names.trim();
        List<String> nameList = List.of(names.split(" "));
        return nameList;
    }
}