//Type function
const auto_typed=document.getElementById("auto-type")
var typed=new Typed(auto_typed,{ 
    strings: ["Front End Developer","Software Developer"],
    typeSpeed:100,
    backSpeed:25,
    loop:true
})
const navToggle = document.getElementById('nav-toggle');
const navlist = document.getElementById('navy');

navToggle.addEventListener('click', () => {
    if(navlist.style.display=="flex"){
        navlist.style.display="none"
    }
    else{
    navlist.style.display="flex"
    }
});
// Check the screen width and disable the link if on mobile
// JavaScript to toggle flip effect on click and disable link on mobile
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const innerCard = this.querySelector('.flip-card-inner');
        const link = innerCard.querySelector('a');

        // Only handle on mobile (width <= 768px)
        if (window.innerWidth <= 768) {
            e.preventDefault(); // Prevent the link from being clicked

            // Toggle the flip effect
            innerCard.classList.toggle('clicked');

            // Disable the link when the card is flipped
            if (innerCard.classList.contains('clicked')) {
                link.style.pointerEvents = 'none'; // Disable the link
            } else {
                link.style.pointerEvents = 'auto'; // Enable the link again when flipped back
            }
        }
    });

    // For touch devices, flip the card on touchstart
    card.addEventListener('touchstart', function(e) {
        const innerCard = this.querySelector('.flip-card-inner');
        const link = innerCard.querySelector('a');

        // Only handle on mobile (width <= 768px)
        if (window.innerWidth <= 768) {
            e.preventDefault(); // Prevent the link from being clicked

            // Toggle the flip effect
            innerCard.classList.toggle('clicked');

            // Disable the link when the card is flipped
            if (innerCard.classList.contains('clicked')) {
                link.style.pointerEvents = 'none'; // Disable the link
            } else {
                link.style.pointerEvents = 'auto'; // Enable the link again when flipped back
            }
        }
    });
});

// For desktop, flip the card on hover
document.querySelectorAll('.flip-card').forEach(card => {
    const innerCard = card.querySelector('.flip-card-inner');
    const link = innerCard.querySelector('a');

    // Enable link on desktop and allow hover to work
    if (window.innerWidth > 768) {
        card.addEventListener('mouseenter', function() {
            innerCard.classList.add('clicked'); // Add flip effect on hover
        });

        card.addEventListener('mouseleave', function() {
            innerCard.classList.remove('clicked'); // Remove flip effect on hover out
        });

        link.style.pointerEvents = 'auto'; // Ensure link is clickable
    }
});

/*==================== REMOVE MENU MOBILE ====================*/
/*
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
/*
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
/*
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); */
