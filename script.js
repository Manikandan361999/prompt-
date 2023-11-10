function getUserInput() {
    var userName = document.getElementById('userName').value;
    var outputElement = document.getElementById('output');

    if (userName.trim() !== "") {
        outputElement.innerText = "Hello, " + userName + "! Welcome to our website!";
    } else {
        outputElement.innerText = "Please enter a valid name.";
    }
}
