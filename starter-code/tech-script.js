'use strict';
//getting the required elements
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.icon__close');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const ul = document.querySelector('.nav ul');
const btnTechContainer = document.querySelector('.btn__tech__container');
const techBtn = document.querySelectorAll('.btn__var');
const techDiv = document.querySelectorAll('.tech-div');
const techImg = document.querySelectorAll('.tech-img');

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


// technology page
btnTechContainer.addEventListener('click', function(e){
    e.preventDefault();
    const clickedBtn = e.target.closest('.btn__tech');
    const siblings = clickedBtn.closest('.btn__tech__container').querySelectorAll('.btn__tech');

    // Guard clause
  if (!clickedBtn) return;

    siblings.forEach(el =>{
        if(el !== clickedBtn){
            el.style.backgroundColor = 'black';
        }
    });
    clickedBtn.style.backgroundColor = 'blue';

    techDiv.forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('active');
    });

    techImg.forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('active');
    });
    document.querySelector(`.operations__content--${clickedBtn.dataset.tab}`).classList.add('active');
    document.querySelector(`.operations__cont--${clickedBtn.dataset.tab}`).classList.add('active');
});
