var swiper = new Swiper(".mySwiper-1", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }

});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints : {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        }
    }

});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {

    input.addEventListener('change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })

});

document.addEventListener('DOMContentLoaded', function() {
    const nosotrosSection = document.querySelector('.nosotros-section');

    window.addEventListener('scroll', function() {
        const sectionPosition = nosotrosSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            nosotrosSection.classList.add('appear');
        }
    });
});
document.querySelectorAll('.nosotros-item img').forEach(function(image) {
    image.addEventListener('click', function() {
        image.classList.toggle('expanded');
    });
});
const nosotrosSection = document.querySelector('.nosotros-section');
document.querySelectorAll('.nosotros-item img');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetElement = document.querySelector(this.getAttribute('href'));
      const offset = 125;
  
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    });
  });
