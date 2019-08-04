import Ar from './libraries/AryJs.js';



var html =``;

function openNav() {
  document.getElementById("nav").style.width = "250px";
  document.getElementById("root").style.marginLeft = "250px";
  document.getElementById("open_nav_btn").classList.toggle("hidden");
}
function closeNav() {
  document.getElementById("nav").style.width = "0";
  document.getElementById("root").style.marginLeft = "0";
  document.getElementById("open_nav_btn").classList.toggle("hidden");
} 
function move() {



} 

(function start(){
 // Ar.showhtml(html,"root");
  document.getElementById("open_nav_btn").addEventListener("click", openNav); 
  document.getElementById("close_nav_btn").addEventListener("click", closeNav);
  document.getElementById("cv_btn").addEventListener("click", move);
})();




