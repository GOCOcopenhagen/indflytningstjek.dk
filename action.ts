import './style.css'
import './aos.css'
import './node_modules/modal-video/css/modal-video.min.css'
import ModalVideo from 'modal-video';
import './style.scss'
new ModalVideo('.overlay');

const faq = document.querySelectorAll(".faq-item-head")
const burger = document.querySelector(".burger")
const mobileMenu = document.querySelector(".mobile-menu")
faq.forEach((el) => {
    const arrow = el.querySelector(".faq-item-head-arrow")
    const body = el.parentElement.querySelector(".faq-item-body")
    el.addEventListener('click', () => {
        body.classList.toggle('faq-item-body-active')
        arrow.classList.toggle('faq-item-head-arrow-rotate')
    })
})

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-active')
})
