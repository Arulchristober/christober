/*=============abcd==============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=============abcd==============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
           navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id +']').classList.add('active');
           });
        };
    });
   /*=============stkiy navbar========*/
   let header = document.querySelector('header');

   header.classList.toggle('stikiy', window.scrollY > 100);

     /*=============stkiy navbar========*/

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');


};
 /*=============stkiy navbar========*/


 ScrollReveal().reveal('.home-content, .heading', { 
    origin:"top",
    reset: true, 
    delay:200, 
    duration: 2000,
    distance: '80px', 
});
ScrollReveal().reveal('.home-img, .education-column, .portfolio-box, .contact form', { 
    origin:"bottom",
    reset: true, 
    delay:200, 
    duration: 2000,
    distance: '80px',  
});
ScrollReveal().reveal('.home-content h1, .about-img', { 
    origin:"left",
    reset: true, 
    delay:200, 
    duration: 2000,
    distance: '80px', 
});
ScrollReveal().reveal('.home-content p, .about-content', { 
    origin:"right",
    reset: true, 
    delay:200, 
    duration: 2000,
    distance: '80px', 
});


 /*=============stkiy navbar========*/
 const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','App Developer','Frontend Developer','App Developer',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop:true
    
 });
