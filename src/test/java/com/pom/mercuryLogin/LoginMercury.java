package com.pom.mercuryLogin;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginMercury 
{
	public WebDriver driver;
	
	@When ("^user opens \"(.*)\" browser$")
	public String openBrowser(String browsernm)
	{
		if(browsernm.equalsIgnoreCase("chrome"))
		{
			System.setProperty("webdriver.chrome.driver", "F:\\Selenium Setup\\Setup\\chromedriver_win32\\chromedriver.exe");
			driver=new ChromeDriver();
			System.out.println("Chrome browser get opened successfully");
		}
		else if(browsernm.equalsIgnoreCase("ie"))
		{
			System.setProperty("webdriver.ie.driver", "F:\\Selenium Setup\\Setup\\IEDriverServer_x64_3.14.0\\IEDriverServer.exe");
			driver=new InternetExplorerDriver();
			System.out.println("Internet explorer browser get opened successfully");
		}
		else
		{
			System.setProperty("webdriver.gecko.driver", "F:\\Selenium Setup\\Setup\\geckodriver-v0.23.0-win64\\geckodriver.exe");
			driver=new FirefoxDriver();
			System.out.println("Firefox browser get opened successfully");
		}
		return browsernm;
	}
	
	@And ("^user enters the application url \"(.*)\"$")
	public String appliUrl(String url)
	{
		driver.get(url);
		System.out.println("Application URL gets open successfully");
		return url;
	}
	
	@And ("^user maximize the browser$")
	public void maxBrowser()
	{
		driver.manage().window().maximize();
		System.out.println("Maximize the window");
	}
	
	@And ("^user waits \"(.*)\" seconds to load the login page$")
	public void pgtimeout(int timeout)
	{
		driver.manage().timeouts().pageLoadTimeout(timeout, TimeUnit.SECONDS);
	}
	
	@Then ("^mercury tours application login page should be displayed$")
	public void verifyLoginPg()
	{
		String act=driver.getTitle();
		if(act.equalsIgnoreCase("Welcome: Mercury Tours"))
		{
			System.out.println("Title of page is: "+act);
		}
	}
	
	@Given ("^user access the login page of mercury application$")
	public void verifyLogo()
	{
		WebElement act_val=driver.findElement(By.xpath("//img[@src='/images/nav/logo.gif']"));
		boolean s=act_val.isDisplayed();
		System.out.println("Logo of mercury tours application is diplayes: "+s);
	}
	
	@When ("^user enters \"(.*)\" as username$")
	public String username(String uname)
	{
		driver.findElement(By.xpath("//input[@name='userName']")).sendKeys(uname);
		System.out.println("Username is: "+uname);
		return uname;
	}
	
	@And ("^user enters \"(.*)\" as password$")
	public String password(String passwrd)
	{
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(passwrd);
		System.out.println("Password is: "+passwrd);
		return passwrd;
	}
	
	@And ("^user clicks on sign in button$")
	public void ciSign() throws InterruptedException
	{
		driver.findElement(By.xpath("//input[@name='login']")).click();
		Thread.sleep(5000);
	}
	
	@Then ("^user is on flight finder page$")
	public void verifyfilghtfinder()
	{
		String title=driver.getTitle();
		System.out.println("Title of this page is: "+title);
	}
	
	@When ("^user clicks on sign off button$")
	public void signoff()
	{
		driver.findElement(By.linkText("SIGN-OFF")).click();
	}
	
	@Then ("^user access sign on page$")
	public void retSignIn()
	{
		String title1=driver.getTitle();
		System.out.println("Title of page: "+title1);
	}
}
