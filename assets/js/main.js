// ====== MENU ======
// MENU SHOW AND HIDDEN
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
        scrollActive();
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

// hidden menu movil
const navlink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navlink.forEach(n => n.addEventListener('click', linkAction))

// ======SKILLS======
// accordion skills

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeder = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }

    if(itemClass == 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeder.forEach((el)=>{
    el.addEventListener('click', toggleSkills);
})

/* ======QUALIFICATION====== */
// tabs
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active');

        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active');
        })

        tab.classList.add('qualification__active');
    });
})

// ======SERVICES======
// active modal
const modalViews =  document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i);
    })
});

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal');
        })
    })
});

// ======PORTAFOLIO======
// swiper
let swiperPortfolio = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
});

// ======TESTIMONIAL=======
var swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor:true,
    spaceBetween: 48,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicsBullets: true
    },
    breakpoints:{
        568:{
            slidersPerView: 2,
        }
    }
});

// ======SCROLL SECTION ACTIVE LINK=======
const sections = document.querySelectorAll('section[id]');
function scrollActive(){
    const scrollY= window.pageYOffset;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 32;
        sectionId = current.getAttribute('id');
       
        console.log("scrollY"+ scrollY);

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// =======CHANGE BACKGROUND HEADER======
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) 
        nav.classList.add('scroll-header');
    else
        nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// ======DARK LIGHT THEME======
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 400)
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// ======DARK LIGHT THEME======
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('select-theme');
const selectedIcon = localStorage.getItem('select-icon');

const getCurrentTheme = () => document.body.classList.constains(darkTheme) ? 'dark' : 'ligth';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if(selectedTheme){
    document.body.classList[selectedIcon === 'dark' ? 'add': 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add': 'remove'](iconTheme);
}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle('iconTheme')
    
    localStorage.setItem('selete-theme', getCurrentTheme);
    localStorage.setItem('select-icon', getCurrentIcon);
})