// ====== MENU ======
// MENU SHOW AND HIDDEN
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

// HIDDEN MENU ON MOBILE
const navlink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkAction))

// ======SKILLS======
// ACCORDION SKILLS
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
    el.addEventListener('click', toggleSkills)
})