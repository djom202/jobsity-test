@complete @contact

Feature: My Store - Contact Page

    I want to check the search could find any
    content into the site

    Scenario: The email field is required before to send the message
        Given I open Home page
        And I navigate to Contact page
        When I click on the submit button
        Then the "There is 1 error" text must be displayed
        And the "Invalid email address" text must be displayed

    Scenario: The message field is required before to send the message
        Given I open Home page
        And I navigate to Contact page
        When I type the email as "myemail@gmail.com"
        And I click on the submit button
        Then the "There is 1 error" text must be displayed
        And the "The message cannot be blank" text must be displayed

    Scenario: The subject field is required before to send the message
        Given I open Home page
        And I navigate to Contact page
        When I type the email as "myemail@gmail.com"
        And I type the message as "My test message"
        And I click on the submit button
        Then the "There is 1 error" text must be displayed
        And the "Please select a subject from the list provided" text must be displayed

    Scenario: Send the message with all required fields filled
        Given I open Home page
        And I navigate to Contact page
        When I type the email as "myemail@gmail.com"
        And I type the message as "My test message"
        And I choose the subject as "Customer service"
        And I click on the submit button
        Then the "Your message has been successfully sent to our team" text must be displayed

    Scenario: Send the message with all fields
        Given I open Home page
        And I navigate to Contact page
        When I type the email as "myemail@gmail.com"
        And I type the message as "My test message"
        And I choose the subject as "Customer service"
        And I type my order reference as "373729292"
        And I choose a file to upload
        And I click on the submit button
        Then the "Your message has been successfully sent to our team" text must be displayed