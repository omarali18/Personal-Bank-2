function inputField(input) {
    const inputElement = document.getElementById(input);
    const inputValue = inputElement.value;
    return inputValue;
}

document.getElementById("login-btn").addEventListener("click", function () {

    const inputEmail = inputField("input-email");
    const inputPassword = inputField("input-password");
    if (inputEmail == "omarali1814000@gmail.com" && inputPassword == "11223344a") {
        window.location.href = "bank-name.html";
    };

})