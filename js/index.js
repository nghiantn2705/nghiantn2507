$(document).ready(function () {
    $(document).scroll(function () {
      const header = document.querySelector(".header");
      if (window.scrollY > 20) {
        header.classList.add("header-active");
      } else {
        header.classList.remove("header-active");
      }
    });
    
    $(".bars").on("click",function(event){
      event.preventDefault();
      const bars = document.querySelector(".bars");
      const menu = document.querySelector(".menu-ip");
      const logo = document.querySelector(".logo");
      const drop = document.querySelector(".drop");
  
      bars.classList.toggle("active");
      menu.classList.toggle("active");
      logo.classList.toggle("active");
      drop.classList.toggle("active");

      const navLink = document.querySelectorAll(".nav-link");
  
      navLink.forEach((n) => n.addEventListener("click", closeMenu));
  
      function closeMenu() {
        bars.classList.remove("active");
        backDrop.classList.remove("active");
        menu.classList.remove("active");
        logo.classList.remove("active");
      }
    });

    $(".Stories-content-2").click(function() {
      const show = document.querySelector(".Show-Stories");
      const dropstori =document.querySelector(".drop-Stories");
      show.style.display = "flex";
      dropstori.style.display = "block";
    });
    $(".close").click(function() {
      const show = document.querySelector(".Show-Stories");
      const dropstori =document.querySelector(".drop-Stories");
      show.style.display = "none";
      dropstori.style.display = "none";
    });
   
});