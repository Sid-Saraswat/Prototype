const click1 = document.querySelector(".click1")
const click2 = document.querySelector(".click2")
const click3 = document.querySelector(".click3")
const cl1 = document.getElementById("cl1")
const cl2 = document.getElementById("cl2")
const cl3 = document.getElementById("cl3")
const cl4 = document.getElementById("cl4")
cl2.style.display = "none"
cl3.style.display = "none"
cl4.style.display = "none"
click1.addEventListener("click", function () {
    cl2.style.display = "block";
    click1.style.backgroundColor = "#212529";
    click1.style.color = "white"
})
click2.addEventListener("click", function () {
    cl3.style.display = "block";
    click2.style.backgroundColor = "#212529";
    click2.style.color = "white"
})
click3.addEventListener("click", function () {
    cl1.style.display = "none"
    cl2.style.display = "none"
    cl3.style.display = "none"
    cl4.style.display = "block"
})