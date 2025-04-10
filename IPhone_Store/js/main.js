const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.header-nav');
btn.addEventListener('click', ()=>{
	nav.classList.toggle('active');
});