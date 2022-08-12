/*!
=========================================================
* Ollie Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// portfolio carousel
$('#owl-portfolio').owlCarousel({
    margin:30,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
});

// testmonial carousel
$('#owl-testmonial').owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav: true,
    dots: false
})

// About Modals

//Get Modal Element
// var modal = document.getElementById('simpleModal');
// const boxes = document.getElementsByClassName('modalAbout');

// for (const box of boxes) {
//   box.addEventListener('click', function closeModal(event) {
//     console.log('box clicked', event);
//     this.setAttribute('style', 'display: none;');
//     this.style.display = 'none';
//   });
// }


// const triggers = document.getElementsByClassName('team_member');

// for (const trigger of triggers) {
//     trigger.addEventListener('click', function openModal(event) {
//     console.log('trigger clicked', event);
//     var n = this.querySelector('.modalAbout');
//     n.setAttribute('style', 'display: block;');
//     modal.style.display = 'none';
//   });
// }

// Get Open Modal Element
// var modalImg = document.getElementById('researcher-modal-trigger');
// Get Close Button
// var closeBtn = document.getElementById('closeModalBtn1');

// Listen for open click
// modalImg.addEventListener('click', openModal);

// Listen for close click
// closeBtn.addEventListener('click', closeModal);

// Listen for outside click
// window.addEventListener('click', clickOutside);

// Function to open Modal
// function openModal() {
//    modal.style.display = 'block';
// }

// Function to close Modal
// function closeModal() {
//    modal.style.display = 'none';
// }

// Function to close Modal on outside
// function clickOutside(e) {
//     if(e.target == modal){
//     modal.style.display = 'none';
//     }
// }

//  ------------------------------------------------------------

const imgs = document.querySelectorAll("[data-target]");
const close_btns = document.querySelectorAll(".closeModalBtn");
// const overlay = document.querySelector("#overlay");

imgs.forEach(img => {
    img.addEventListener('click', () => {
        document.querySelector(img.dataset.target).classList.add('active');
        overlay.classList.add("active");
    })
})

close_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.target).classList.remove('active');
        overlay.classList.remove("active");
    })
})

/* window.onclick = (e) => {
    if (e.target == overlay) {
        const modals = document.querySelectorAll(".modalAbout");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
} */