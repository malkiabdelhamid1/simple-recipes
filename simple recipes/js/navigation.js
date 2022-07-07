const home = document.getElementById("nav-home");
const about = document.getElementById("nav-about");
const tags = document.getElementById("nav-tags");
const recipes = document.getElementById("nav-recipes");
const contact = document.getElementById("contact");
///////////////////////////
const mob_home = document.getElementById("mob-nav-home");
const mob_about = document.getElementById("mob-nav-about");
const mob_tags = document.getElementById("mob-nav-tags");
const mob_recipes = document.getElementById("mob-nav-recipes");
const mob_contact = document.getElementById("mob-contact");

//////////////////////////
home.addEventListener('click',()=>{
    window.open('./home.html','_self');
});
about.addEventListener('click',()=>{
    window.open('./about.html','_self');
});
tags.addEventListener('click',()=>{
    window.open('./tags.html','_self');
});
recipes.addEventListener('click',()=>{
    window.open('./recipes.html','_self');
});
contact.addEventListener('click',()=>{
    window.open('./contact.html','_self');
});
//////////////////////////////////////////////////////////////////
mob_home.addEventListener('click',()=>{
    window.open('./home.html','_self');
});
mob_about.addEventListener('click',()=>{
    window.open('./about.html','_self');
});
mob_tags.addEventListener('click',()=>{
    window.open('./tags.html','_self');
});
mob_recipes.addEventListener('click',()=>{
    window.open('./recipes.html','_self');
});
mob_contact.addEventListener('click',()=>{
    window.open('./contact.html','_self');
});

