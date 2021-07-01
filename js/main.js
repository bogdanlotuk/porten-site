document.getElementById('burger').onclick = function() {
  this.classList.toggle('burger--active');
  document.getElementById('navigation').classList.toggle('header__navigation--active');
  document.getElementById('menu').classList.toggle('menu--active');
  document.getElementById('menu-list').classList.toggle('menu-list--active');
  document.getElementById('menu-right').classList.toggle('menu-right--active');
  document.getElementById('body').classList.toggle('body--active');
  let link = document.getElementsByClassName('menu-list__item-link');
  for (let elem of link) {
    elem.classList.toggle('menu-list__item-link--active');
  }
}

let like = document.getElementById('like');
let admin = document.getElementById('admin');
let settings = document.getElementById('settings');
let card = document.getElementById('card');
let search = document.getElementById('search');


let arrLink = [like, admin, settings, cart, search];

for (i = 0; i < arrLink.length; i++){
  arrLink[i].onclick = function (){
    document.getElementById('burger').classList.remove('burger--active');
    document.getElementById('navigation').classList.remove('header__navigation--active');
    document.getElementById('menu').classList.remove('menu--active');
    document.getElementById('menu-list').classList.remove('menu-list--active');
    document.getElementById('menu-right').classList.remove('menu-right--active');
    document.getElementById('body').classList.remove('body--active');

    let link = document.getElementsByClassName('menu-list__item-link')
    for (let elem of link) {
      elem.classList.remove('menu-list__item-link--active');
    }
  }
}

let mySwiper1 = new Swiper ('.swiper-container.swiper-new-season', {
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
})

let mySwiper2 = new Swiper (".swiper-container.swiper-watches-first", {
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
})

let mySwiper3 = new Swiper (".swiper-container.swiper-watches-second", {
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
})

let mySwiper4 = new Swiper (".swiper-container.swiper-brands", {
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
})