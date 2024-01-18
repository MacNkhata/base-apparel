let form = document.getElementById('site-form');
let email = document.getElementById('input');
let error_img = document.querySelector('.error_img');
let error_text = document.querySelector('.error_txt');
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
  if (!emailPattern.test(email.value) || email.value === '') {
    console.log('run');
    error_img.classList.remove('error');
    error_text.classList.remove('error');
    e.preventDefault();
  }
});
