#Author: komal_Madane
#Date: 26-02-2019
#Feature: Login feature


@smokeTest
Feature: Login feature


Background: User access the login page of mercury tour application
						When user opens "chrome" browser
						And user enters the application url "http://newtours.demoaut.com/"
						And user maximize the browser
						And user waits "15" seconds to load the login page
						Then mercury tours application login page should be displayed
						
  @smokeTest
  Scenario Outline: Verify that valid able to login into mercury tour application by using valid username and valid password
								    Given user access the login page of mercury application
								    When user enters "<username>" as username
								    And user enters "<password>" as password
								    And user clicks on sign in button
								    Then user is on flight finder page
								    When user clicks on sign off button
								    Then user access sign on page
				    
	Examples: 
						|username|password|
						|komalv|komal123|
						|diptichopade|chopade123|
						|Suvidyap1|P@ssword1|
	