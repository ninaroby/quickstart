window.onload = initAll;

function initAll() {
    document.getElementById("redirect").onclick = initRedirect;
}

function initRedirect() {
    alert("I am a super annoying popup box"); // This alert appears after the link has been clicked
    window.location = this; // The Javascript keyword this allows the script to pass a value to a function, based on the context where the keyword is used. In this case, this is used inside a function triggered by and event attached to an anchor tag, so here this is a link object.
    return false;
}


