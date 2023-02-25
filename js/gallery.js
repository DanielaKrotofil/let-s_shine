document.addEventListener("DOMContentLoaded", function () {

    const elements = document.getElementsByClassName("gallery__row__column");
    const btn1 = document.getElementById("gallerybtn1");
    const btn2 = document.querySelector("button#gallerybtn2");
    const btn3 = document.querySelector("#gallerybtn3");

    btn1.addEventListener("click", function () {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.flex = "100%";
        }
    })

    btn2.addEventListener("click", function () {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.flex = "50%";
          }
    })

    btn3.addEventListener("click", function () {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.flex = "25%";
          }
    })
})