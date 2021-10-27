let navbar = document.querySelector('#navbar')
let main = document.querySelector('.main')
let navbarUl = document.querySelector('.navbar-nav')
let navbarLogo = document.querySelector('.navlogo')
let navbarIC = document.querySelector('.navbar-brand')
let loader = document.querySelector('.preloader');
$(window).on('load', function () {

    $(".owl-carousel").owlCarousel({
        // loop: true,
        // nav: true,
        // dots: true,
        center: true,
        //   margin: 50,
          items:1,
        // stagePadding: 250,
        // //  autoWidth : true,
        // // autoWidth:true,
        // // autoplay: true,
        smartSpeed: 800,
        // autoplayTimeout: 2500,
       responsive :{
        0: {
            stagePadding: 28,
            margin: 14
        },
        370 : {
            stagePadding: 30,
            margin: 20
        },
        700: {
            stagePadding: 80,
            margin: 25
        },
        870 : {
            stagePadding: 120,
            margin: 30
        },
        1120 : {
            stagePadding: 340,
            margin: 35
        } 
       }

    });
});

window.onscroll = function () {
    //TOP
    if (main.getBoundingClientRect().top < 0) {
        // console.log("TRIGGER: top of div reached.");
        navbarIC.classList.remove('is-visible')
        // navbarUl.classList.add('navcs')
        navbarUl.classList.remove('navleft')
        navbarLogo.classList.remove('is-visible')
        navbarLogo.classList.remove('navlogo1')
        navbar.classList.add('pt-1', 'pb-4')
        // navbarUl.classList.remove('ml-auto')
        // navbarIC.style.display='none'

    }
    //BOTTOM
    if (main.getBoundingClientRect().bottom < 0) {
        // console.log("TRIGGER: bottom of div reached.");
        // navbar.style.color = '#a397ff';
        navbar.classList.remove('pt-1', 'pb-4')
        // navbarUl.classList.remove('navcs')
        navbarUl.classList.add('navleft')
        navbarIC.classList.add('is-visible')
        navbarLogo.classList.add('is-visible')
        navbarLogo.classList.add('navlogo1')
        // let navdiv = document.querySelector('.navdiv')
        navbar.classList.add('sticky-top')


    }
    elements.forEach((elem, i) => {

        // console.log(e.getBoundingClientRect().top, e.getBoundingClientRect().bottom)



        if (screen.width > 920) {
            elem['text'].style.opacity = 0
            elem['text'].classList.remove('mt-2')
            if (elem['text'].getBoundingClientRect().top < 350) {

                elem['nav'].classList.add('is-shown');
            }
            else {
                elem['nav'].classList.remove('is-shown');
            }
            // console.log(elem['text'], elem['sec'].getBoundingClientRect().bottom)
            if (elem['sec'].getBoundingClientRect().bottom < 400) {
                elem['nav'].classList.remove('is-shown');

            }
        }
        else {
            elem['text'].style.opacity = 1
            elem['text'].classList.add('mt-2')
        }
    })

    // console.log('////////')
}
console.log(screen.width)
window.addEventListener('load', setTimeout(() => {
    vanish()
}, 1000));
function vanish() {

    loader.classList.add("disppear")
}

