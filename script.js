const wrapper = document.querrySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querrySelector('register-link');
const btnPopup = document.querrySelector('btnLogin-popup');
const iconC = document.querrySelector('btnLogin-popup');
registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});
btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});