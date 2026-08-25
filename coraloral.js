const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false, 
  grabCursor: true,
  simulateTouch: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
  delay: 3000,
  disableOnInteraction: false,
},
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  }
  
});

document.querySelectorAll('.accordion-collapse').forEach(item => {
  item.classList.remove('show');
});

$(document).ready(function () {
  $('.scroll-down-btn').on('click', function () {
    console.log('Scroll button clicked');
    $('html, body').animate({
      scrollTop: $('#page-footer').offset().top
    }, 800);
  });
});

  document.querySelectorAll('.offcanvas .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      const offcanvasEl = document.getElementById('mobileMenu');
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      bsOffcanvas.hide();
    });
  });


