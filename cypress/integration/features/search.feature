@complete @search

Feature: My Store - Search Page

    I want to check the search could find any
    content into the site

    Scenario: The searchbar allow a empty keyword
        Given I open Home page
        When I click on the search button
        Then the "Please enter a search keyword" text must be displayed

    Scenario Outline: The searchbar find elements by a Keyword as <keyword>
        Given I open Home page
        When I type "<keyword>" on the searchbar
        And I click on the search button
        Then the <count> results must be displayed

        Examples:
            | keyword | count |
            | chiffon | 2     |
            | summer  | 4     |
            | printed | 5     |
            | dress   | 7     |

    Scenario Outline: The searchbar find elements by a Color as <color>
        Given I open Home page
        When I type "<color>" on the searchbar
        And I click on the search button
        Then the <count> results must be displayed
        Then the "<color>" color must be displayed <count> times

        Examples:
            | color  | count |
            | blue   | 2     |
            | orange | 3     |
            | yellow | 3     |