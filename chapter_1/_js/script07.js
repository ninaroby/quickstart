window.onload = initAll; // When the page finishes loading it triggers the initAll() function.

function initAll() {
    document.getElementById("redirect").onclick = initRedirect; // this tells Javascript to call the initRedirect function, when the user clicks the link with the id of "redirect".
}

function initRedirect() {
    window.location = "jswelcome.html"; // This function sets the window.location (the page loaded in the browser) to a new page.  
    return false; // The return false says to stop processing the users click, so the href page doesn't get loaded.
}

// What's cool about this is that we've done a redirection without users having any idea that it happened.  They just end up on one of two different pages depending on what they came in with. 
