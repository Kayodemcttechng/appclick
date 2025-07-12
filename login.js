
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const btn = document.querySelector("button");

const database_email = "appclick@gmail.com";
const database_password = "1234AppClick";

btn.addEventListener("click", function() {
const emailValue = emailInput.value.trim().toLowerCase();
const passwordValue = passwordInput.value;
if (emailValue === database_email && passwordValue === database_password) {alert("You are Logged In");
}
    else {
alert("Wrong Credentials");}

})

