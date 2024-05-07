# Lab 5 - Starter
Members:
Nathan Chao - A16785338


- My "expose.js" [here](expose.html)
- My "explore.js" [here](explore.html)

Explore - Part 3: 

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
- No it would not be ideal to unit test the "message" feature because it is a larger scale feature with multiple moving parts in writing and sending. Moreover, this is not something you can test quickly as it is the main focus of the application, meaning it must be thoroughly tested and is likely to be affected by changing other parts of the app. 

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
- Yes, this is a smaller scale feature that is specific, and can be tested quickly. Once you set this test, adjusting other features of the app are not likely to interfere with the unit tests.