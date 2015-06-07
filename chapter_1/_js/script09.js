window.onload = initAll; // When the page loads call the initAll() function

function initAll() {
    document.getElementById("Lincoln").onclick = saySomething; 
    document.getElementById("Nixon").onclick = saySomething;
    document.getElementById("Kennedy").onclick = saySomething;
} // This sets the onclick handler for each of the buttons on the page

function saySomething() {
    switch(this.id){ // The id of the this object is used as the parameter to switch() Its value will decide which of the below case statements get executed.
        case "Lincoln":
            alert("Four score and seven years ago..."); // if the id of the this object is Lincoln this alert appears
            break; // If the user clicks Lincoln the break prevents the other alerts from being executed
        case "Kennedy":
             alert("Ask not what your country can do for you...");
             break;
         case "Nixon":
             alert("I am not a crook");
             break;
         default: // The section is where we end up if the users entry didn't meet one of the above criteria
    } // This closing brace end the switch statement
} 

// A switch statement can be passed other values besides srings.  You can use it with a numeric value or even have it evaluat a mathematical result.
