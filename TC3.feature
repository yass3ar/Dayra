Scenario: Verify Mobile Number works
Given user on "Sign up" page
And he fills " رقم موبايلك" input
When user enters any number that does not have exactly 11 digits
Then an error message is displayed saying " رقم موبايلك" must consist of unique 11 digits.

Scenario: Verify Mobile Number works
Given user on "Sign up" page
And he fills " رقم موبايلك" input
When user enters a number with 11 repeated digits
Then an error message is displayed saying " رقم موبايلك" must consist of unique 11 digits.