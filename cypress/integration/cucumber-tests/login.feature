Feature: Login to Application

As an invalid user
I cannot log into Application
As a valid user
I want to log in into Application
@focus 
Scenario: Invalid Login
 Given I open login page
    And I fill username with "invalidUsername"
        And I want to wait for 2 seconds
    And I fill password with "invaidPassword"
 When I submit login
 Then I should see an error message


 Scenario: Valid Login
 Given I open login page
    And I fill username with "username"
    And I fill password with "password"
 When I submit login
 Then I should see homepage