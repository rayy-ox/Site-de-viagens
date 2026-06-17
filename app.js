const header =
document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){
header.classList.add("scrolled");
}
else{
header.classList.remove("scrolled");
}

});

document
.getElementById("explore-btn")
.addEventListener("click",()=>{

document
.getElementById("destinos")
.scrollIntoView({
behavior:"smooth"
});

});


const nav =
document.getElementById("nav");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});
