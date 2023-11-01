Scenario: Verify Login page's "forget password" feature is working
Given user is on login page
And  he clicks on "نسيت الرقم السري؟" button
When he enters the registerd phone number
And clicks on "التالى" button
Then a message with a new passcode should be sent to the phone number user's just entered.