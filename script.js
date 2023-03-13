const btn=document.getElementsByClassName('btn')[0];
const navbar=document.getElementsByClassName('navbar-links')[0];

btn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
});

/*-------carosuel--------*/

let slidePosition=0;
const sliders=document.querySelectorAll('.slider-item');
const totalSlider=sliders.length;

function updatePosition(){
    sliders.forEach(slide=>{
        slide.classList.remove('active');
        slide.classList.add('hidden');
    });
    sliders[slidePosition].classList.add('active');

    dots.forEach(dot=>{
        dot.classList.remove('dot-active');
    });
    dots[slidePosition].classList.add('dot-active');
}

function prevSlide(){
    if(slidePosition==0){
        slidePosition=totalSlider-1;
    }else{
        slidePosition--;
    } 
    updatePosition();
}

function nextSlide(){
    if(slidePosition==totalSlider-1){
        slidePosition=0
    }else{
        slidePosition++;
    } 
    updatePosition();
}


const dotContainer=document.querySelector('.dots');
sliders.forEach(slide=>{
    const dot=document.createElement('div');
    dot.classList.add('dot');
    dotContainer.appendChild(dot);
});

const dots=document.querySelectorAll('.dot');
dots[slidePosition].classList.add('dot-active');

dots.forEach((dot,index)=>{
    dot.addEventListener('click',function(){
        slidePosition=index;
        updatePosition();
    });
});

setInterval(()=>{
    if(slidePosition==totalSlider-1){
        slidePosition=0;
    }else{
        slidePosition++;
    }
    updatePosition();
},2000);


/*counter*/

const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('limit');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});