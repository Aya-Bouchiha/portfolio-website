// Nav Links with some animations :)
const hamb = document.getElementById('hamberguer');
const ul = document.getElementById('nav-ul'); // select the <ul> for toggling the class (active)
const navLinks = document.querySelectorAll('.nav-link');// nav links (home,about me,my skills,contact me)
navLinks.forEach((link)=>{
    link.addEventListener('click',()=>{
        // sections wihch we will scroll to them
        const section = document.querySelector(link.getAttribute('data-link'))
        // smooth scroll
        section.scrollIntoView({
            behavior : 'smooth',
        })
    })
})
// toggling the class (active)
hamb.addEventListener('click',()=>{
    hamb.classList.toggle('active');
    ul.classList.toggle('active');
})
// Animation from (TypeIt) library => [ https://typeitjs.com/ ]
new TypeIt("#web-dev", {
    strings: "Web Developer",
    speed: 100,
    loop : true ,
    waitUntilVisible: true,
    breakLines : false, 
}).go();
// We add a data-scroll to this sections of our html page 
    // if the user is in the section, this section will has a data-scroll= in 
    // else it will has  a data-scroll = out
    // => [https://scroll-out.github.io/]
ScrollOut({
    targets : '#about-img , .skill , footer ,  .contact-section , .work-img , .main-text  , .main-img , #par-about',
})
