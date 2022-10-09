let buttons = document.querySelectorAll(".btn");
let subBtn = document.querySelector(".sub-btn")
let container = document.querySelector(".container")
let rated = document.querySelector(".rated")

buttons.forEach(button => {
  button.addEventListener("click", function () {
    buttons.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
    rated.textContent = button.textContent;
  })
})

subBtn.addEventListener("click", function(){
    container.classList.add("hide-container");

})

