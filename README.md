# homework3
https://jakedish.github.io/homework3/

[screenshot](/assets/image/screenshot.png)

Using the confirm method, the user is asked for the parameters of a new password. Options include number of characters and the composition of said characters including upper/lower case, special characters and numbers.

The user's preferences are then stored as variables, dictating which strings of characters are concatenated into one large string which has characters selected at random based on the number of characters initially chosen. This process generates a new string and a tentative password.

The tentative password is then checked to ensure that all character types the user selected are present in the password. If this check fails, the password creation function is re-run, otherwise the password is verified and presented to the user.