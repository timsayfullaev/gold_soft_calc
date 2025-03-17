'use strict';

const swiperPartners = new Swiper('.swiper-partners', {
    navigation: {
        nextEl: ".swiper-button-next-partners",
        prevEl: ".swiper-button-prev-partners",
    },
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 6,
        },
    },
});


const swiperNews = new Swiper('.swiper-news', {
    navigation: {
        nextEl: ".swiper-button-next-news",
        prevEl: ".swiper-button-prev-news",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

const swiperInstructions = new Swiper('.swiper-instructions', {
    navigation: {
        nextEl: ".swiper-button-next-instructions",
        prevEl: ".swiper-button-prev-instructions",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

const swiperReviews = new Swiper('.swiper-reviews', {
    navigation: {
        nextEl: ".swiper-button-next-reviews",
        prevEl: ".swiper-button-prev-reviews",
    },
    loop: true
});

const swiperTutorials = new Swiper('.swiper-tutorials', {
    navigation: {
        nextEl: ".swiper-button-next-tutorials",
        prevEl: ".swiper-button-prev-tutorials",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

Fancybox.bind('[data-fancybox="gallery-certificates"]', {});

Fancybox.bind('[data-fancybox="gallery-tutorials"]', {});

Fancybox.bind('[data-fancybox="gallery-screenshots"]', {});

const fileInput = document.getElementById("orderUserFile");
if (fileInput) {
    fileInput.addEventListener("change", function () {
        let fileName = this.files.length ? this.files[0].name : "Прикрепить файл";
        document.querySelector(".file-upload-text").textContent = fileName;
    });
}

window.addEventListener("scroll", function () {
    let headerBottom = document.querySelector(".header-bottom");
    if (window.scrollY > 40) {
        headerBottom.classList.add("position-fixed", "top-0", "w-100", "z-3", "shadow");
    } else {
        headerBottom.classList.remove("position-fixed", "top-0", "w-100", "z-3", "shadow");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 600) {
            scrollBtn.classList.add("d-flex");
        } else {
            scrollBtn.classList.remove("d-flex");
        }
    });

    scrollBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Проверяем, есть ли хэш в URL и активируем вкладку
    let hash = window.location.hash;
    if (hash) {
        let tabButton = document.querySelector(`[data-bs-target="${hash}"]`);
        if (tabButton) {
            let tab = new bootstrap.Tab(tabButton);
            tab.show();
        }
    }

    // Добавляем обработчик кликов на вкладки
    let tabLinks = document.querySelectorAll('[data-bs-toggle="pill"]');
    tabLinks.forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault(); // Предотвращаем стандартное поведение браузера

            let target = this.getAttribute("data-bs-target");
            
            // Обновляем хэш без скролла
            history.pushState(null, null, target);

            // Показываем таб
            let tab = new bootstrap.Tab(this);
            tab.show();
        });
    });

    // Если пользователь нажимает "назад" в браузере, меняем вкладку
    window.addEventListener("popstate", function () {
        let tabButton = document.querySelector(`[data-bs-target="${window.location.hash}"]`);
        if (tabButton) {
            let tab = new bootstrap.Tab(tabButton);
            tab.show();
        }
    });
});
