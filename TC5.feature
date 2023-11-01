Scenario: verify "Leave page" and "Stay on page" work
Given user is on any page of the sign up pages
And he clicks on "الرجوع" button
When he clicks on "كمل الطلب" button
Then user stays on the same page and can go on filling the inputs

Scenario: verify "Leave page" and "Stay on page" work
Given user is on any page of the sign up pages
And he clicks on "الرجوع" button
When he clicks on "إلغاء والخروج" button
Then user navigates to the main page (Sign up/Login Page)