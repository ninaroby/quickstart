var ans = prompt("Are you sure you want to do that?", "");

if(ans) {
    alert("You said " + ans);
} else {
    alert("You refused to answer.");
}

/* We declared a variable named ans and assigned it the result of the prompt() ie, whatever the user types into the prompt dialog.  The promp method is passed two parameters, separated by a comma: the question for the user and the default answer.  It returns either the users response or null; null occurs when the user hits cancel, when there is no default and the user hits ok, or when the user clears the default and hits ok.  If the ans variable contains a value, the first alert will pop up, declaring a concatenation of "You said " and the value of ans.  If the value of ans is null, the second alert will pop up.*/

//Using var does two things: 1/ It tell Javasript to to create a variable and set aside some space in memory for this new object and 2/ it defines the scope of the  variable - if it is found inside a function, it is a local variable and outside a function it is considered to be a global variable.
