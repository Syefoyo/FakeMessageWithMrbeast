let name = "Jimmy Donaldson";
function sendBut() {
    const message = document.getElementById("myInput").value;
    const messages = document.getElementById("myP");
    messages.innerHTML = messages.innerHTML + "<br>";
    messages.innerHTML = messages.innerHTML + " " + name + ":" + message;
}
function JohnD() {
    name = "John";
    let hello = document.getElementById("nameD");
    const toglk = document.getElementById("myP");
    toglk.style.color = "black";
    hello.innerHTML = "John";
}
function jimmyDg() {
    name = "Jimmy Donaldson";
    let hello = document.getElementById("nameD");
    const togl = document.getElementById("myP");
    togl.style.color = "#14ca14";
    hello.innerHTML = "MrBeast";
}