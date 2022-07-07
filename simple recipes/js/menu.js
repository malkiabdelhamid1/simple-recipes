const pop_up = document.getElementById("pop-up");
const hamburger = document.getElementById("hamburger");
const body = document.querySelector("body");
hamburger.addEventListener('click',()=>{
    body.style.overflow="hidden"
    pop_up.style.display="flex";

});
pop_up.addEventListener('click',()=>{
    pop_up.style.display="none";
    body.style.overflow="visible";
});