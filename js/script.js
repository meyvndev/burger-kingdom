let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = () =>{
   searchBtn.classList.toggle('fa-times');
   searchForm.classList.toggle('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
}

window.onscroll = () =>{
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function () {
   // Get the current year
   var currentYear = new Date().getFullYear();

   // Find the element with class "credit"
   var creditElement = document.querySelector(".credit");

   // Update the content to include the current year
   creditElement.innerHTML = `proudly created by <span>meyvn software agency</span> | burger kingdom &copy;${currentYear} all rights reserved!`;
});
