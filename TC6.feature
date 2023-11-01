Scenario: Verify website can be displayed in arabic language
Given user types in  "Dayra" Sign up page url with endpiont lang=ar
When user navigates to the page
Then a sign up page in arabic language is displayed

Scenario: Verify website can be displayed in english language
Given user types in  "Dayra" Sign up page url with endpiont lang=en
When user navigates to the page
Then a sign up page in english language is displayed