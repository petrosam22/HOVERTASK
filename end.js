const links = document.querySelectorAll(".hover");
 
function animate (e) {
  const parent = this.parentNode;

  if (parent.querySelectorAll(".ink").length === 0) {
    const span = document.createElement("span");
    span.classList.add("ink");
    parent.insertBefore(span, parent.firstChild);
  }

  const ink = parent.querySelectorAll(".ink")[0];

  ink.classList.remove("animate");

  if (!ink.offsetHeight && !ink.offsetWidth) {
    const d = Math.max(parent.offsetHeight, parent.offsetWidth);
    ink.style.height = `${d}px`;
    ink.style.width = `${d}px`;
  }

  const rect = parent.getBoundingClientRect();

  const offset = {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  }

  const x = e.pageX - offset.left - ink.offsetWidth / 2;
  const y = e.pageY - offset.top - ink.offsetHeight / 2;


  ink.style.top = `${y}px`;
  ink.style.left = `${x}px`;
  ink.classList.add("animate");
};


// const myTimeout = setTimeout(animate, 5000);
  

links.forEach(link => 
    link.addEventListener("mouseover", animate));

 
   
function date(){
const dash = document.querySelector("#dashbord");
const list = document.querySelector(".listing");

  


setTimeout(() => {
    list.classList.toggle("desing");
    dash.classList.toggle("hov");
    
 

}, 1000);
 

const Account = document.querySelector("#Account");
const list2 = document.querySelector(".list2");
setTimeout(() => {
    list.classList.remove("desing");
    dash.classList.remove("hov");
    
    list2.classList.toggle("desing");
    Account.classList.toggle("hov");

 
}, 1500);


const msg = document.querySelector("#msg");
const list3 = document.querySelector(".list3");
setTimeout(() => {
    list.classList.remove("desing");
 
    list2.classList.remove("desing");

  list3.classList.add("desing");

  Account.classList.remove("hov");
  msg.classList.toggle("hov");


}, 2500);
setTimeout(() => {
    list.classList.remove("desing");
 
    list2.classList.remove("desing");
  list3.classList.remove("desing");
  msg.classList.remove("hov");


}, 3500);

 
}



setInterval(() => {
date();
},3000);