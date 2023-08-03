

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         const left = entry.target.querySelector('.animate__left');
//         const right = entry.target.querySelector('.animate__right');
//         const up = entry.target.querySelector('.animate__up');
//         const down = entry.target.querySelector('.animate__down');

//         if (entry.isIntersecting) {
//             left.classList.add('animate__fadeInLeft');
//             right.classList.add('animate__fadeInRight');
//             up.classList.add('animate__fadeInUp');
//             down.classList.add('animate__fadeInDown');
//             return; // if we added the class, exit the function
//         }

//         // We're not intersecting, so remove the class!
//         left.classList.remove('animate__fadeInLeft');
//         right.classList.remove('animate__fadeInRight');
//         up.classList.remove('animate__fadeInUp');
//         down.classList.remove('animate__fadeInDown');
//     });
// });

// observer.observe(document.querySelector('.animation__wraper'));
// observer.observe(document.querySelector('.animation__wraper2'));
// observer.observe(document.querySelector('.animation__wraper3'));
// observer.observe(document.querySelector('.animation__wraper4'));
// observer.observe(document.querySelector('.animation__wraper5'));
// observer.observe(document.querySelector('.animation__wraper6'));

// document.addEventListener('DOMContentLoaded', () => {
//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.intersectionRatio === 1) {
//                 entry.target.classList.add('bg-blue-600')
//                 entry.target.classList.remove('bg-gray-200')
//             } else {
//                 entry.target.classList.remove('bg-blue-600')
//                 entry.target.classList.add('bg-gray-200')
//             }
//         })
//     }, {
//         threshold: 1
//     })

//     const elements = document.querySelectorAll('.item')

//     elements.forEach(element => {
//         observer.observe(element)
//     })
// })


function left() {
    var left = document.querySelectorAll(".animate__left");

    for (var i = 0; i < left.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = left[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            left[i].classList.add("animate__fadeInLeft");
        } else {
            left[i].classList.remove("animate__fadeInLeft");
        }
    }
}

function right() {
    var right = document.querySelectorAll(".animate__right");

    for (var i = 0; i < right.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = right[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            right[i].classList.add("animate__fadeInRight");
        } else {
            right[i].classList.remove("animate__fadeInRight");
        }
    }
}

function down() {
    var down = document.querySelectorAll(".animate__down");

    for (var i = 0; i < down.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = down[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            down[i].classList.add("animate__fadeInDown");
        } else {
            down[i].classList.remove("animate__fadeInDown");
        }
    }
}

function up() {
    var up = document.querySelectorAll(".animate__up");

    for (var i = 0; i < up.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = up[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            up[i].classList.add("animate__fadeInUp");
        } else {
            up[i].classList.remove("animate__fadeInUp");
        }
    }
}

window.addEventListener("scroll", right);
window.addEventListener("scroll", left);
window.addEventListener("scroll", down);
window.addEventListener("scroll", up);

//----------------------------------//

var businesses = [
    { id: 1, img: './img/b1.png', tittle: 'WEBSITE DESIGN', color: 'bg-primary', des: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 2, img: './img/b2.png', tittle: 'WEB DEVELOPMENT', color: 'bg-yellow', des: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 3, img: './img/b3.png', tittle: 'MOBILE APP DEVELOPMENT', color: 'bg-secondary', des: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 4, img: './img/b4.png', tittle: 'WEBSITE DESIGN 1', color: 'bg-neutral', des: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 5, img: './img/b4.png', tittle: 'WEBSITE DESIGN 2', color: 'bg-neutral', des: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 6, img: './img/b4.png', tittle: 'WEBSITE DESIGN 3', color: 'bg-neutral', des: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 7, img: './img/b4.png', tittle: 'WEBSITE DESIGN 4', color: 'bg-neutral', des: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 8, img: './img/b4.png', tittle: 'WEBSITE DESIGN 5', color: 'bg-neutral', des: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 9, img: './img/b4.png', tittle: 'WEBSITE DESIGN 6', color: 'bg-neutral', des: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 10, img: './img/b4.png', tittle: 'WEBSITE DESIGN 7', color: 'bg-neutral', des: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { id: 11, img: './img/b4.png', tittle: 'WEBSITE DESIGN 8', color: 'bg-neutral', des: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
]

function renderBusiness() {
    let renderB = businesses.map(function (business) {
        return `
                    <div class="swiper-slide flex flex-col bg-white br-12 px-16 py-16 bs-50 ">
                        <div class="flex-middle ${business.color} br-12 mb-12" style="width: 52px; height: 48px;">
                            <img src="${business.img}" alt="">
                        </div>
                        <div class="mb-12">
                            <p class="fw-600 upcase">${business.tittle}</p>
                        </div>
                        <div class="" style="width: 275px; height: 82px;">
                            <p>${business.des}</p>
                        </div>
                    </div>
                `
    })

    document.getElementById('business').innerHTML = renderB.join("")
}


function ready() {
    renderBusiness();
}

ready();

const swiper = new Swiper('.mySwiper1', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const swiper2 = new Swiper('.mySwiper2', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
});







