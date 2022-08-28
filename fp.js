const menubtn = document.querySelector(".hamburger");
const slider= document.querySelector(".navbar-slider");
menubtn.addEventListener('click',function(){
    menubtn.classList.toggle("is-active");
    slider.classList.toggle("is-active"); 
});


 
