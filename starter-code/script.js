'use strict';
// getting the required elements
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.icon__close');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const ul = document.querySelector('.nav ul');
const destinationBtnContainer = document.querySelector('.btn__container');
const destinationBtn = document.querySelector('.btn__var');
const destinationDiv = document.querySelectorAll('.destination__div');
const btnTechContainer = document.querySelector('.btn__tech__container');
const techBtn = document.querySelectorAll('.btn__var');



// hamburger toogle function

hamburger.addEventListener('click', function(){
    nav.style.height = '200px';
    overlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', function(){
    nav.style.height = '0';
    nav.style.overFlowx = 'visible';
    overlay.classList.add('hidden');
});
// destination page
destinationBtnContainer.addEventListener('click', function(e){
    e.preventDefault();
    const clickedBtn = e.target.closest('.btn__var');
    const siblings = clickedBtn.closest('.btn__container').querySelectorAll('.btn__var');
    
  // Guard clause
  if (!clickedBtn) return;

    siblings.forEach(element => {
        if(element !== clickedBtn){
            element.style.backgroundColor = '#ddd';
            }
    });
    clickedBtn.style.backgroundColor = 'blue';
    destinationDiv.forEach(el =>{
        el.classList.add('hidden');
        el.classList.remove('active');
    });
    document.querySelector(`.operations__content--${clickedBtn.dataset.tab}`).classList.add('active');

});
