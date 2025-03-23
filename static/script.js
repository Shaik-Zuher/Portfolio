//Type function
const auto_typed = document.getElementById("auto-type");
var typed = new Typed(auto_typed, { 
    strings: ["Front End Developer", "Software Developer"],
    typeSpeed: 100,
    backSpeed: 25,
    loop: true
});

const navToggle = document.getElementById('nav-toggle');
const navlist = document.getElementById('navy');

navToggle.addEventListener('click', () => {
    if (navlist.style.display === "flex") {
        navlist.style.display = "none";
    } else {
        navlist.style.display = "flex";
    }
});

// -------------------- Flip Card Behavior --------------------

// Mobile: disable front-side links so that tapping flips the card only.
if (window.innerWidth <= 768) {
    document.querySelectorAll('.flip-card-front a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent the link from activating on the front side.
            e.preventDefault();
        });
    });
}

// Mobile: flip the card on click/touch (if not already flipped).
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            const innerCard = this.querySelector('.flip-card-inner');
            if (!innerCard.classList.contains('clicked')) {
                innerCard.classList.add('clicked');
            }
            // Stop propagation so that the document listener doesn't immediately flip it back.
            e.stopPropagation();
        }
    });
    
    card.addEventListener('touchstart', function(e) {
        if (window.innerWidth <= 768) {
            const innerCard = this.querySelector('.flip-card-inner');
            if (!innerCard.classList.contains('clicked')) {
                innerCard.classList.add('clicked');
            }
            e.stopPropagation();
        }
    });
});

// Mobile: clicking anywhere outside a flip-card flips all cards back.
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        if (!e.target.closest('.flip-card')) {
            document.querySelectorAll('.flip-card .flip-card-inner.clicked')
                .forEach(innerCard => {
                    innerCard.classList.remove('clicked');
                });
        }
    }
});

// Desktop: flip the card on hover.
document.querySelectorAll('.flip-card').forEach(card => {
    const innerCard = card.querySelector('.flip-card-inner');
    if (window.innerWidth > 768) {
        card.addEventListener('mouseenter', function() {
            innerCard.classList.add('clicked');
        });
        card.addEventListener('mouseleave', function() {
            innerCard.classList.remove('clicked');
        });
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
