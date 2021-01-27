const burger = document.querySelector(".burger");
const menu=document.querySelector(".navbar")


burger.addEventListener("click", function () {
    burger.classList.toggle("active")
})

menu.addEventListener("click", function(){
    burger.classList.remove("active")
} )
