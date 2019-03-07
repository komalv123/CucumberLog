#Author: komal
#Date: 25-02-2019
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
  Scenario: Verify that valid able to login into mercury tour application by using valid username and valid password
				    Given user access the login page of mercury application
				    When user enters "komalv" as username
				    And user enters "komal123" as password
				    And user clicks on sign in button
				    Then user is on flight finder page
				    When user clicks on sign off button
				    Then user access sign on page
    
   @smokeTest
  Scenario: Verify that user able to login into mercury tour application by using invalid username and valid password
				    Given user access the login page of mercury application
				    When user enters "komal" as username
				    And user enters "komal123" as password
				    And user clicks on sign in button
				    Then user access sign on page
				    
 @smokeTest
  Scenario: Verify that user able to login into mercury tour application by using invalid username and password
				    Given user access the login page of mercury application
				    When user enters "123456" as username
				    And user enters "komal" as password
				    And user clicks on sign in button
				    Then user access sign on page
    

  @smokeTest
  Scenario: Verify that user able to login into mercury tour application by using invalid username and password
				    Given user access the login page of mercury application
				    When user enters "#$%&" as username
				    And user enters "123654" as password
				    And user clicks on sign in button
				    Then user access sign on page
				    
	@smokeTest
  Scenario: Verify that user able to login into mercury tour application by using invalid username and password
				    Given user access the login page of mercury application
				    When user enters "   12&" as username
				    And user enters "ko   mal" as password
				    And user clicks on sign in button
				    Then user access sign on page
