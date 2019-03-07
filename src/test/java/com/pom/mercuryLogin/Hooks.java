package com.pom.mercuryLogin;

import java.io.File;
import java.io.IOException;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks 
{
	@Before
	public void getAllCookies()
	{
		System.out.println("Hiiiiiiiiiiiiiiiiiiiiiii");
//		Set<Cookie>cookies=driver.manage().getCookies();
//		for(Cookie coo : cookies)
//		{
//			System.out.println("Cookies name: "+coo.getName());
//		}
	}
	@After
	public void captureScreenshot() throws IOException
	{
		System.out.println("Byyyyyyyyyyyyyyyyyyyyyyyyyyyy");
//		File src=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
//		FileUtils.copyFileToDirectory(src, new File("E:\\Automation\\CucumberLog\\src\\test\\resources\\Screenshot\\"));
	}
}
