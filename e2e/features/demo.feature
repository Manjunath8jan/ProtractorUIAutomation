@demofeature
Feature: Demo feature

    @demooutline
    Scenario Outline: perform protracter automation
        Given User open browser
        Then user enters "<url>"

        Examples:
            | url                     |
            | https://www.upwork.com/ |
        
    @Secondtag
    Scenario Outline: perform protracter automation
        Given User open browser
        Then user enters "<url>"
        Examples:
            | url                 |
            | https://angular.io/ |

