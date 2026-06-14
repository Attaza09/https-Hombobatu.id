/* =====================
   LOADER
===================== */

window.addEventListener("load", () => {
    document.querySelector(".loader").style.display = "none";
});

/* =====================
   DARK MODE
===================== */

const darkBtn =
document.getElementById("darkModeBtn");

if(darkBtn){

darkBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

});
}

/* =====================
   SEARCH
===================== */

function searchContent(){

const input =
document.getElementById("searchInput");

if(!input) return;

const filter =
input.value.toLowerCase();

const cards =
document.querySelectorAll(".search-item");

cards.forEach(card => {

const text =
card.textContent.toLowerCase();

card.style.display =
text.includes(filter)
? ""
: "none";

});

}

/* =====================
   BACK TO TOP
===================== */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(!topBtn) return;

if(window.scrollY > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

function backToTop(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}

/* =====================
   TIMELINE ANIMATION
===================== */

const timelineItems =
document.querySelectorAll(".timeline-item");

function revealTimeline(){

timelineItems.forEach(item => {

const trigger =
window.innerHeight - 100;

if(item.getBoundingClientRect().top < trigger){

item.classList.add("show");

}

});

}

window.addEventListener(
"scroll",
revealTimeline
);

revealTimeline();

/* =====================
   LIGHTBOX
===================== */

const galleryImages =
document.querySelectorAll(".gallery img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";
lightboxImg.src=img.src;

});

});

if(lightbox){

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

}

/* =====================
   PAGE ANIMATION
===================== */

const fadeElements =
document.querySelectorAll(
".card, .gallery img"
);

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform=
"translateY(0)";

}

});

});

fadeElements.forEach(el=>{

el.style.opacity="0";
el.style.transform=
"translateY(30px)";
el.style.transition=".8s";

observer.observe(el);

});


/* LIGHTBOX FIX */

if(lightbox && lightboxImg){

galleryImages.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";
lightboxImg.src = img.src;

});

});

}
window.addEventListener("scroll",()=>{

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});