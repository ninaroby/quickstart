window.onload = writeMessage; // run this function when the page finishes loading

function writeMessage() {
    document.getElementById("helloMessage").innerHTML = "Hello World!"; //This function uses the window.onload event handler and the getElementById() method, to write the message "Hello World!" inside the h1 element with the id of "helloMessage"
}
