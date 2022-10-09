package Step_Definitions;

import Utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks {

    @Before
    public void setUp(){
        System.out.println("This is where tests are starting");
        Driver.get().manage().window().maximize();
    }

    @After
    public void tearDown(){
        System.out.println("This is where tests are finished");
        Driver.closeDriver();
    }

    @Before("@abc")
    public void wip(){
        System.out.println("This is for abc tags");
    }
}
