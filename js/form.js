const changeText = document.querySelector("h1.ad__text")
const changeSpan = document.querySelector("span.ad__text")
const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

changeText.addEventListener("mousemove", function() {
    changeText.style.color = randomColor;
})

changeSpan.addEventListener("mousemove", function() {
    changeSpan.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
})

const form = document.querySelector("form");
const email = document.querySelector("#email");
const elName = document.querySelector("#name");
const errorMessage = document.querySelector("#error-message");
const successMessage = document.querySelector("#success-message");
const messageEl = document.querySelector("div.info-container");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let error = "";

    if (!email.value.includes("@")) {
        error += "Email without '@' doesn't exist \n";
    }

    if (elName.value.length <= 2) {
        error = error + "Too short name! \n";
    }

    if (error) {
        errorMessage.innerText = error;
        errorMessage.classList.remove("d-none");
        successMessage.classList.add("d-none");
        messageEl.style.backgroundColor = "#F55050";
    } else {
        errorMessage.classList.add("d-none");
        successMessage.classList.remove("d-none");
        errorMessage.innerText = "Your message has been sent!";
        messageEl.style.backgroundColor = "#609966";

    }
});