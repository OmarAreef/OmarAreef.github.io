let navbar = document.querySelector('#navbar')
let main = document.querySelector('.main')
let navbarUl = document.querySelector('.navbar-nav')
let navbarLogo = document.querySelector('.navlogo')
let navbarIC = document.querySelector('.navbar-brand')
let loader = document.querySelector('.preloader');


window.onscroll = function(){
    //TOP
    if(main.getBoundingClientRect().top < 0){
        // console.log("TRIGGER: top of div reached.");
        navbarIC.classList.remove('is-visible')
        // navbarUl.classList.add('navcs')
        navbarUl.classList.remove('navleft')
        navbarLogo.classList.remove('is-visible')
        navbarLogo.classList.remove('navlogo1')
        navbar.classList.add('pt-1' , 'pb-4' )
        // navbarUl.classList.remove('ml-auto')
        // navbarIC.style.display='none'

    }
    //BOTTOM
    if(main.getBoundingClientRect().bottom < 0){
        // console.log("TRIGGER: bottom of div reached.");
        // navbar.style.color = '#a397ff';
        navbar.classList.remove('pt-1' , 'pb-4' )
        // navbarUl.classList.remove('navcs')
        navbarUl.classList.add('navleft')
        navbarIC.classList.add('is-visible')
        navbarLogo.classList.add('is-visible')
        navbarLogo.classList.add('navlogo1')
        // let navdiv = document.querySelector('.navdiv')
        navbar.classList.add('sticky-top')


    }
}
window.addEventListener('load', setTimeout(()=> {
    vanish() } , 1000 ));
function vanish() {
    
    loader.classList.add("disppear")
}