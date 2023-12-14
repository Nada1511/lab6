function handleLogin() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    var loginObject = {
        username: usernameInput,
        password: passwordInput
    };

    var resultMessage = document.getElementById("resultMessage");

    if (loginObject.username === "admin" && loginObject.password === "123") {
        resultMessage.innerText = "Welcome!";
    } else {
        resultMessage.innerText = "Not registered";
    }
}