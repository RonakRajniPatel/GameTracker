# GameTracker

This is a backlog game tracker that allows users to track the games they play with metrics such as hours, ratings, reviews and other key details.

You are also able to keep track of the status of the game as in are you playing it, have you dropped it, have you completed it, or do you want to play it.

These details would be comparable to other users in the form of friends. You'll be able to see what your friends thought of a game and other all their key details.

## **Priority List**
Right now, I'm considering a certain order to things.

I need to go to my code and database and make it so that the only two pieces of information I need is the game name and the status. So seperate hours.

Next thing I need to do is to lift the state up from my current components. They're nested into the child components so it'll be difficult to save that information to the save button.

After, I have to consider how to bundle information together so that I can save various types of info and that info will just be sent if there was anything there to save.