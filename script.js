const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");

const pinPage = document.getElementById("pinPage");
const submitPin = document.getElementById("submitPin");

const pinInput = document.getElementById("pinInput");
const pinError = document.getElementById("pinError");

const mainContent = document.getElementById("mainContent");

const music = document.getElementById("bgMusic");

/* OPEN PIN PAGE */

startBtn.addEventListener("click", () => {

welcome.classList.add("hidden");

pinPage.classList.remove("hidden");

});

/* CHECK PIN */

submitPin.addEventListener("click", () => {

const pin = pinInput.value;

if(pin === "2305"){

pinPage.classList.add("hidden");

mainContent.style.display = "block";

music.play();

launchHearts();

window.scrollTo({
top:0,
behavior:"smooth"
});

}else{

pinError.innerText =
"That's not our little secret 🤎";

shakeInput();

}

});

/* ENTER KEY */

pinInput.addEventListener("keypress",(e)=>{

if(e.key === "Enter"){
submitPin.click();
}

});

/* SHAKE */

function shakeInput(){

pinInput.animate([

{transform:"translateX(0px)"},
{transform:"translateX(-8px)"},
{transform:"translateX(8px)"},
{transform:"translateX(-8px)"},
{transform:"translateX(8px)"},
{transform:"translateX(0px)"}

],{

duration:400

});

}

/* HEARTS */

function launchHearts(){

for(let i=0;i<50;i++){

const heart =
document.createElement("div");

heart.innerHTML = "🤎";

heart.style.position = "fixed";

heart.style.left =
Math.random()*100 + "vw";

heart.style.top = "100vh";

heart.style.fontSize =
(Math.random()*20+15)+"px";

heart.style.zIndex = "9999";

heart.style.pointerEvents = "none";

document.body.appendChild(heart);

heart.animate([

{
transform:"translateY(0)",
opacity:1
},

{
transform:
"translateY(-120vh) translateX(${Math.random()*200-100}px)",

opacity:0
}

],{

duration:5000

});

setTimeout(()=>{

heart.remove();

},5000);

}

}

/* FLOWERS */

function createPetals(){

setInterval(()=>{

const flower =
document.createElement("div");

flower.innerHTML = "🌸";

flower.style.position = "fixed";

flower.style.left =
Math.random()*100 + "vw";

flower.style.top = "-20px";

flower.style.fontSize =
(Math.random()*15+15)+"px";

flower.style.pointerEvents = "none";

flower.style.zIndex = "-1";

document.body.appendChild(flower);

flower.animate([

{
transform:
"translateY(0) rotate(0deg)"
},

{
transform:
"translateY(110vh) translateX(${Math.random()*100-50}px) rotate(360deg)"
}

],{

duration:
Math.random()*5000+5000

});

setTimeout(()=>{

flower.remove();

},10000);

},700);

}

createPetals();

/* REVEAL EFFECT */

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(40px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:1000,
fill:"forwards"

});

}

});

});

document.querySelectorAll(".section").forEach(section=>{

observer.observe(section);

});
