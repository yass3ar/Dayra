Scenario: Verify Passcode works
Given user on "Sign up" page
And he fills "الرقم السري" input
When user enters any number that does not have exactly 5 digits
Then an error message is displayed saying "الرقم السري" must consist of non sequential and non repeated 5 digits.

Scenario: Verify Passcode works
Given user on "Sign up" page
And he fills "الرقم السري" input
When user enters a number with 5 sequential digits
Then an error message is displayed saying "الرقم السري" must consist of non sequential and non repeated 5 digits.

Scenario: Verify Passcode works
Given user on "Sign up" page
And he fills "الرقم السري" input
When user enters a number with 5 repeated digits
Then an error message is displayed saying "الرقم السري" must consist of non sequential and non repeated 5 digits.