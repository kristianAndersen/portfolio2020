window.addEventListener('DOMContentLoaded', (event) => {

let header = document.querySelector(".header");
let himg =document.querySelector(".headimg");
let htxt = document.querySelector(".headertxt");
let content = document.querySelector(".content");
let gshow = document.querySelector(".galleryShow")
let gshowmedia = document.querySelector(".galleryShow__media")

window.addEventListener('scroll', function(e) {
    //header height
    let topPos =  content.getBoundingClientRect();
    let top = topPos.top;
 
    header.style.height=Math.round(top)+'px'
    
    //header image 
    let scroll =Number( (Math.round(this.pageYOffset)/350) )+1;
    let scrollprc=scroll;
    let scaleNum=Number(1)+scrollprc/4;

  himg.style.transform='scale3d('+scaleNum+','+scaleNum+','+scrollprc+')';
  // himg.style.top ='-'+Number(9)+scroll+'%';
   htxt.style.transform='scale3d('+scaleNum+','+scaleNum+','+scrollprc+')';//
   //htxt.style.top=Number(5)*scroll-0.5+'%';
});

//innit header "effect"
window.scroll({
    top: 1,
    left: 1,
    behavior: 'smooth'
  });

window.addEventListener('resize', function(e) {
  
    let topPos =  content.getBoundingClientRect();
    let top = topPos.top;
    header.style.height=Math.round(top)+'px'
});


function getCard(e) {

   
  let clicked = e.target;

 if(e.target.className!='imgCap'){
    let img = clicked.children[0].src; 
    let headline = clicked.children[1].children[0].textContent;
    let byline = clicked.children[1].children[1].textContent;
  }

  clicked.children[2].style.bottom=0+'px';

}

function showCap(e) {
    let over = e.target; 

    let imgc = over.children[2];
    imgc.style.bottom=0+'px';
    
}

function hideCap(e) {
    let out = e.target; 
    let imgc = over.children[2];
    imgc.style.bottom=200+'px';
    
}



document.querySelectorAll('.gallery-images').forEach(item => {
    item.addEventListener("click", getCard);
    
        item.children[2].addEventListener("mouseenter", showCap);
        item.children[2].addEventListener("mouseleave", hideCap);

})


});