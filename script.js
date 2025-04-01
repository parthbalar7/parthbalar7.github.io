/****************************************************************************
 * 1) Sticky Navbar color change on scroll
 ****************************************************************************/
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

/****************************************************************************
 * 2) Scroll Reveal Animation
 ****************************************************************************/
const scrollElements = document.querySelectorAll('.fade-in-on-scroll');

function elementInView(el, offset = 100) {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= 
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
}

function handleScrollAnimation() {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

/****************************************************************************
 * 3) Typed Text Effect in Hero Section
 ****************************************************************************/
const typedText = document.getElementById('typed-text');
const typedPhrases = [
  "Site Reliability Engineer",
  "Python Enthusiast",
  "Cloud Specialist",
  "Data Analysis"
];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 60;
let newPhraseDelay = 1500;

function type() {
  const currentPhrase = typedPhrases[currentPhraseIndex];
  if (!isDeleting && currentCharIndex < currentPhrase.length) {
    typedText.textContent += currentPhrase.charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(type, typingDelay);
  } else if (isDeleting && currentCharIndex > 0) {
    typedText.textContent = currentPhrase.substring(0, currentCharIndex - 1);
    currentCharIndex--;
    setTimeout(type, erasingDelay);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, newPhraseDelay);
    } else {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % typedPhrases.length;
      setTimeout(type, typingDelay);
    }
  }
}

/****************************************************************************
 * 4) Scroll to Top Button
 ****************************************************************************/
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/****************************************************************************
 * 5) Particles.js Setup
 ****************************************************************************/
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": { "value": "#ffffff" },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": { "opacity": 1 }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

/****************************************************************************
 * 6) Initialize everything on window load
 ****************************************************************************/
window.addEventListener('load', () => {
  // Initiate typed text effect
  setTimeout(type, 500);
});