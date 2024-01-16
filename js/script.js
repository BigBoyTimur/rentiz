const burger = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const body = document.body;

if (burger && menu) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        burger.classList.toggle("lock");
        body.classList.toggle("lock");
    })
}


const filter = document.querySelector(".filter");

if (filter) {
    const items = document.querySelectorAll('.block-filter');
    items.forEach(item => {
        item.addEventListener('click', event => {
            item.querySelector(".block-filter__dropdown").classList.toggle("block-filter__dropdown_active");
            item.querySelector(".block-filter__icon").classList.toggle("block-filter__icon_active");

            if (event.target.classList.contains('block-filter__item')) {
                item.querySelector(".block-filter__value").textContent = event.target.textContent;
            }
        })
    })
}

const swiper = new Swiper('.popular-slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.popular-slider-next',
      prevEl: '.popular-slider-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        660: {
            slidesPerView: 2
        }
      }
    
  
  });

const popular_slider = new Swiper('.slider-reviews', {
  spaceBetween: 20,
  slidesPerView: 1,
  autoHeight: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-reviews-next',
    prevEl: '.slider-reviews-prev',
  }
});

const galleryItems = document.querySelectorAll(".gallery__item");

if (galleryItems.length > 0) {
  galleryItems.forEach(item => {
    new Swiper(item, {
      slidesPerView: 1,
      autoplay: {
        delay: 5000
      },
      effect: "fade"
  })
})
}