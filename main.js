document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content");
    const socialLinks = document.querySelectorAll(".circle-socials");
  
    setTimeout(() => {
      heroContent.classList.add("fade-in");
    }, 500);
  
    
    socialLinks.forEach((link, index) => {
      setTimeout(() => {
        link.classList.add("pop-up");
      }, 800 + index * 200);
    });
  });

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }
  
  
  document.addEventListener("scroll", () => {
    const aboutSection = document.querySelector(".content-about");
  
    
    if (aboutSection && isInViewport(aboutSection)) {
      aboutSection.classList.add("animate");
    }
  });

//   swiper js
const slider = document.querySelector(".destination-slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
const cardWidth = slider.querySelector(".destination-card").offsetWidth; 
const gap = 10; 
const visibleCards = 3; 


function updateSliderPosition() {
  slider.style.transform = `translateX(-${(cardWidth + gap) * currentIndex}px)`;
}


prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});


nextBtn.addEventListener("click", () => {
  if (currentIndex < slider.children.length - visibleCards) {
    currentIndex++;
    updateSliderPosition();
  }
});

// contact

document.addEventListener("DOMContentLoaded", function() {
  const contactSection = document.getElementById("contact");
  const form = contactSection.querySelector(".form");

  form.style.opacity = 0;
  form.style.transform = "translateY(20px)";

  function checkVisibility() {
      const rect = contactSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
          form.style.opacity = 1;
          form.style.transform = "translateY(0)";
          form.style.transition = "opacity 0.5s ease, transform 4s ease";
          window.removeEventListener("scroll", checkVisibility);
      }
  }

  window.addEventListener("scroll", checkVisibility);
});

//category

document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".card-ctg");

  function checkVisibility() {
      const windowHeight = window.innerHeight;

      cards.forEach(card => {
          const rect = card.getBoundingClientRect();

          if (rect.top < windowHeight && rect.bottom > 0) {
              card.classList.add("visible");
          }
      });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

//destination

document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".destination-card");
  const slider = document.querySelector(".destination-slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;

  
  function checkVisibility() {
      const windowHeight = window.innerHeight;

      cards.forEach(card => {
          const rect = card.getBoundingClientRect();

          
          if (rect.top < windowHeight && rect.bottom > 0) {
              card.classList.add("visible");
          }
      });
  }

  
  function updateSlider() {
      const cardWidth = cards[0].clientWidth;
      slider.style.transform = `translateX(-${currentIndex * (cardWidth + 20)}px)`; 
  }

 
  prevBtn.addEventListener("click", function() {
      if (currentIndex > 0) {
          currentIndex--;
          updateSlider();
      }
  });

  
  nextBtn.addEventListener("click", function() {
      if (currentIndex < cards.length - 1) {
          currentIndex++;
          updateSlider();
      }
  });

  
  window.addEventListener("scroll", checkVisibility);
  
  checkVisibility();
});

//services

document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(".container-box");

  
  function checkVisibility() {
      const windowHeight = window.innerHeight;

      boxes.forEach(box => {
          const rect = box.getBoundingClientRect();

          
          if (rect.top < windowHeight && rect.bottom > 0) {
              box.classList.add("visible");
          }
      });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});