window.onload = initAll; // calls the initAll function when the window finishes loading

function initAll() { // This line begins the function
    for(var i=0; i<24; i++) { //This line begins the loop - it reads if i (the counter) is less than 24, do the following code inside the braces, then add one to the value of i
        var newNum = Math.floor(Math.random() * 75) + 1; //inside the loop we create a new variable newNum and fill it with the result of the calculation on the right side of the equals sign.  The build in Javascript function Math.random() gives us a number between 0 and 1.  Multiplying Math.random() by the maximum value (remember values in bingo can be 1 to 75) gives us a result between 0 and one less than the maximum value. The floor of than result gives us the integer portion, ie an integer between 0 and one less than the maximum value.  Add one and we have number between one and out maximum value.

        document.getElementById("square" + i).innerHTML = newNum; // This is were we write into the table the value of the random number we just got.
    }
}
