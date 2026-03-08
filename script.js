
const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function(){
    navMenu.classList.toggle("show");
});



const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if(name === "" || email === ""){
        alert("Please fill in Name and Email before submitting.");
        e.preventDefault();
    }

});

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

});