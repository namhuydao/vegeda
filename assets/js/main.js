// Nav Menu
let bodyOverlay = document.querySelector('.body-overlay');
bodyOverlay.addEventListener('click', function () {
    searchLayout.classList.remove('show')
    bodyOverlay.classList.remove('active')
    shoppingCart.classList.remove('show')
    menuMobile.classList.remove('show')
    wrapper.classList.remove('addTop')
    wrapper.classList.remove('addRight')
})

let navmenu = document.querySelector('.navmenu');
window.addEventListener('scroll', () => {
    navmenu.classList.toggle('sticky', window.scrollY > 0)
  })
let menubar = document.querySelector('.burger__menu');
let menuclose = document.querySelector('.menu__close');
let navmenulist = document.querySelector('.navmenu__list-mobile');

menubar.addEventListener('click', function () {
    navmenulist.classList.add('show')
    bodyOverlay.classList.add('active')
})
menuclose.addEventListener('click', function () {
    navmenulist.classList.remove('show')
    bodyOverlay.classList.remove('active')
})


let angleOpen = document.querySelector('.angle__open');
let angleClose = document.querySelector('.angle__close');
let listItemLv2 = document.querySelector('.list-item-lv2');

angleOpen.addEventListener('click', function () {
    listItemLv2.classList.add('show')
})
angleClose.addEventListener('click', function () {
    listItemLv2.classList.remove('show')
})

let angleMegamenuOpen = document.querySelectorAll('.angle__megamenu-open');
let angleMegamenuClose = document.querySelectorAll('.angle__megamenu-close');
let menuMobile = document.querySelector('.navmenu__list-mobile');
angleMegamenuOpen.forEach(function (item) {
    item.addEventListener('click', function () {
        item.nextSibling.nextSibling.classList.add('show')
        menuMobile.classList.add('overflowActive')
    })
})
angleMegamenuClose.forEach(function (item) {
    item.addEventListener('click', function () {
        this.parentElement.classList.remove('show')
        menuMobile.classList.remove('overflowActive')
    })
})

let loginOpen = document.querySelector('.menu__login-login');
let menuListOpen = document.querySelector('.menu__login-menu');
let navLogin = document.querySelector('.nav__login');
let menulist = document.querySelector('.menu__list');

loginOpen.addEventListener('click', function () {
    menulist.classList.remove('active')
    navLogin.classList.add('active')
    menuListOpen.classList.remove('active')
    loginOpen.classList.add('active')
})
menuListOpen.addEventListener('click', function () {
    navLogin.classList.remove('active')
    menulist.classList.add('active')
    menuListOpen.classList.add('active')
    loginOpen.classList.remove('active')
})

let searchClose = document.querySelector('.search-close');
let searchLayout = document.querySelector('.search__layout');
let searchOpen = document.querySelector('.icon-search');
let wrapper = document.querySelector('.wrapper');
searchOpen.addEventListener('click', function () {
    searchLayout.classList.add('show')
    wrapper.classList.add('addTop')
    bodyOverlay.classList.add('active')
})
searchClose.addEventListener('click', function () {
    searchLayout.classList.remove('show')
    wrapper.classList.remove('addTop')
    bodyOverlay.classList.remove('active')
})

let iconBasket = document.querySelector('.icon-basket');
let basketClose = document.querySelector('.cart-close');
let shoppingCart = document.querySelector('.shopping__cart');

iconBasket.addEventListener('click', function () {
    shoppingCart.classList.add('show')
    wrapper.classList.add('addRight')
    bodyOverlay.classList.add('active')
})
basketClose.addEventListener('click', function () {
    shoppingCart.classList.remove('show')
    wrapper.classList.remove('addRight')
    bodyOverlay.classList.remove('active')
})
$('.myslider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    vertical: true,
    items: 3,
});
let sliderPrevious = document.querySelector('.slick-prev');
sliderNext = document.querySelector('.slick-next');
sliderPrevious.innerHTML = "<";
sliderNext.innerHTML = ">";

// Banner
$(".banner__carousel").owlCarousel({
    nav: false,
    items: 1,
    margin: 10,
    animateIn: 'fadeIn',
})
let bannerItem = document.querySelectorAll('.banner__item');
angleMegamenuClose.forEach(function (item) {
    item.addEventListener('click', function () {
        this.parentElement.classList.toggle('active')
    })
})

//Collection
$(".collection__carousel").owlCarousel({
    nav: false,
    margin: 10,
    loop: true,
    dotsEach: 1,
    autoplay: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        }
    }
})

//Best Seller
let smallImage = document.querySelectorAll('.small-images');
let bestsellerBigImage = document.querySelector('.bestseller__bigImage');
smallImage.forEach(function (item) {
    item.addEventListener('click', function () {
        $('.small-images').removeClass('active')
        this.classList.add('active')
    })
})
let bestseller_getImgAttr = document.querySelectorAll('.bestseller-getImgAttr');
let bestseller_setImgAttr = document.querySelector('.bestseller-setImgAttr');
bestseller_getImgAttr.forEach(function (item) {
    item.addEventListener('click', function () {
        let src = this.getAttribute('src')
        bestseller_setImgAttr.setAttribute('src', src)
    })
})
let countX = 1;
let count = document.querySelectorAll('.count');
let plus = document.querySelectorAll('.plus');
let minus = document.querySelectorAll('.minus');
count.forEach(function (item) {
    item.innerHTML = countX;
})
let quickview = document.querySelectorAll('.quick-view');
quickview.forEach(function (item) {
    item.addEventListener('click', function () {
        countX = 1;
        count.forEach(function (item) {
            item.innerHTML = countX;
        })
    })
})
plus.forEach(function (item) {
    item.addEventListener('click', function () {
        this.previousElementSibling.innerHTML = ++countX;
    })
})
minus.forEach(function (item) {
    item.addEventListener('click', function () {
        if (countX > 1) {
            this.previousElementSibling.previousElementSibling.innerHTML = --countX;
        }
    })
})

let pumpkinGet = document.querySelectorAll('.pumpkin-get');
let pumpkinSet = document.querySelector('.pumpkin-set');
pumpkinGet.forEach(function (item) {
    item.addEventListener('click', function () {
        let src = this.getAttribute('src')
        pumpkinSet.setAttribute('src', src)
    })
})
let eggplantGet = document.querySelectorAll('.eggplant-get');
let eggplantSet = document.querySelector('.eggplant-set');
eggplantGet.forEach(function (item) {
    item.addEventListener('click', function () {
        let src = this.getAttribute('src')
        eggplantSet.setAttribute('src', src)
    })
})
let cornGet = document.querySelectorAll('.corn-get');
let cornSet = document.querySelector('.corn-set');
cornGet.forEach(function (item) {
    item.addEventListener('click', function () {
        let src = this.getAttribute('src')
        cornSet.setAttribute('src', src)
    })
})
let leavesGet = document.querySelectorAll('.leaves-get');
let leavesSet = document.querySelector('.leaves-set');
leavesGet.forEach(function (item) {
    item.addEventListener('click', function () {
        let src = this.getAttribute('src')
        leavesSet.setAttribute('src', src)
    })
})
let garlicGet = document.querySelectorAll('.garlic-get');
let garlicSet = document.querySelector('.garlic-set');

garlicGet.forEach(function (item) {
    item.addEventListener('click', function () {
        let src = this.getAttribute('src')
        garlicSet.setAttribute('src', src)
    })
})
let pepperGet = document.querySelectorAll('.pepper-get');
let pepperSet = document.querySelector('.pepper-set');

pepperGet.forEach(function (item) {
    item.addEventListener('click', function () {
        let src = this.getAttribute('src')
        pepperSet.setAttribute('src', src)
    })
})
let yellow = document.querySelector('#yellow');
let orange = document.querySelector('#orange');
let red = document.querySelector('#red');
yellow.addEventListener('click', function () {
    pepperSet.setAttribute('src', 'assets/images/quickView/pepper/5.1_grande.jpg')
})
orange.addEventListener('click', function () {
    pepperSet.setAttribute('src', 'assets/images/quickView/pepper/17.1_grande.jpg')
})
red.addEventListener('click', function () {
    pepperSet.setAttribute('src', 'assets/images/quickView/pepper/17.2_grande.jpg')
})
let tomatoGet = document.querySelectorAll('.tomato-get');
let tomatoSet = document.querySelector('.tomato-set');

tomatoGet.forEach(function (item) {
    item.addEventListener('click', function () {
        let src = this.getAttribute('src')
        tomatoSet.setAttribute('src', src)
    })
})

$(function () {
    $('[data-tootip="tooltip"]').tooltip()
})

let kg = document.querySelectorAll('.kg');
kg.forEach(function (item) {
    item.addEventListener('click', function () {
        $('.kg').removeClass('active')
        this.classList.add('active')
    })
})
let kg2 = document.querySelectorAll('.kg2');
kg2.forEach(function (item) {
    item.addEventListener('click', function () {
        $('.kg2').removeClass('active')
        this.classList.add('active')
    })
})
let kg3 = document.querySelectorAll('.kg3');
kg3.forEach(function (item) {
    item.addEventListener('click', function () {
        $('.kg3').removeClass('active')
        this.classList.add('active')
    })
})
let kg4 = document.querySelectorAll('.kg4');
kg4.forEach(function (item) {
    item.addEventListener('click', function () {
        $('.kg4').removeClass('active')
        this.classList.add('active')
    })
})
let kg6 = document.querySelectorAll('.kg6');
kg6.forEach(function (item) {
    item.addEventListener('click', function () {
        $('.kg6').removeClass('active')
        this.classList.add('active')
    })
})

var countDownDate = new Date("Sep 30, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var day = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element
    document.getElementById("days").innerText = day,
        document.getElementById("hours").innerText = hour,
        document.getElementById("minutes").innerText = minute,
        document.getElementById("seconds").innerText = second;
    // Display the result in the element
    document.getElementById("day").innerText = day,
        document.getElementById("hour").innerText = hour,
        document.getElementById("minute").innerText = minute,
        document.getElementById("second").innerText = second;

    // // If the count down is finished, write some text
    // if (distance < 0) {
    //     clearInterval(x);
    //     document.getElementById("demo").innerHTML = "EXPIRED";
    // }
}, 1000);

//New arrivals
$(".new__arrivals-carousel").owlCarousel({
    nav: false,
    margin: 10,
    loop: false,
    dotsEach: 2,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dotsEach: 1,
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})
let newSmallImage = document.querySelectorAll('.arrival-smallImage');

newSmallImage.forEach(function (item) {
    item.addEventListener('click', function () {
        $('.arrival-smallImage').removeClass('active')
        this.classList.add('active')
    })
})
let arrival_getImgAttr = document.querySelectorAll('.arrival-getImgAttr');
let arrival_setImgAttr = document.querySelector('.arrival-setImgAttr');
arrival_getImgAttr.forEach(function (item) {
    item.addEventListener('click', function () {
        let src = this.getAttribute('src')
        arrival_setImgAttr.setAttribute('src', src)
    })
})

//Blog
var owl = $(".blog__carousel");
owl.owlCarousel({
    nav: false,
    margin: 30,
    loop: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        }

    }
})

//Random Popup
let popup = document.querySelector('.random__popup');
let popupClose = document.querySelector('.popup-close');
setInterval(function () {
    popup.classList.toggle('show')
}, 8000);
popupClose.addEventListener('click', function () {
    popup.classList.remove('show')
});

//Mailing Modal
$(document).ready(function () {
    $("#modalOnload").modal('show');
});