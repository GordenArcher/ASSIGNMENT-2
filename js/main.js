const callPop = document.querySelector('.contact_me_pop');
const callButton = document.getElementById('callButton');
const close = document.querySelector('.close');
const contactPop = document.querySelector('.contact_me_pop')
let about = document.querySelector('.about_container');
let goDown = document.querySelector('.go_down')
const mobileIcon = document.querySelector('.mobile_Icon')
const nav_links = document.querySelector('.nav_links');

callButton.addEventListener('click', function () {
    callPop.classList.add('show')
})

close.addEventListener('click', function () {
    callPop.classList.remove('show')
})

goDown.addEventListener('click', function() {
    about.classList.add('slow')
})


mobileIcon.addEventListener('click', function () {
    nav_links.classList.toggle('nav_show')
})
