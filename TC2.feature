Scenario: Verify Tax Registeration Number works
Given user on "Sign up" page
And he fills "رقم البطاقة الضريبية" input
When user enters any number that does not have exactly 9 digits
Then an error message is displayed saying "رقم البطاقة الضريبية" must consist of 9 digits only.