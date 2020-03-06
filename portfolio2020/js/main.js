
window.addEventListener('DOMContentLoaded', (event) => {

    let content = document.querySelector(".content");
    let header = document.querySelector(".header");
    let rbgS = document.querySelector(".rgbShiftSlider");




//@media from css
    let bigazzScreens = window.matchMedia("(min-width: 1281px)"),
        niceScreens = window.matchMedia("(min-width: 1025px) and (max-width: 1280px)"),          
        tablets = window.matchMedia("(min-width: 768px) and (max-width: 1024px)"),
        phone = window.matchMedia("(min-width: 320px) and (max-width: 767px)");
    let devicecsize;
//how big is the screen
    function mediaSize() { 
            if(bigazzScreens.matches){
                //console.log('big init')
                devicecsize='big'
            }

            if(niceScreens.matches){
                //console.log('oooh nice')
                devicecsize='medium'
            }

            if(tablets.matches){
                //console.log('toy computer')
                devicecsize='normal'
            }

            if(phone.matches){
                //console.log('who you gonna call')
                devicecsize='small'
            }

    
    }
    //trigger media size
      mediaSize();
      window.addEventListener('resize', mediaSize, false); 
      setUpheader()

//==========================================================================//



function setUpheader( ){
    
 //console.log( devicecsize+"--"+"img/header/"+devicecsize+"/"+devicecsize+"-1.png")

    let images = [ "img/header/"+devicecsize+"/"+devicecsize+"-1.png",
               "img/header/"+devicecsize+"/"+devicecsize+"-2.png",
               "img/header/"+devicecsize+"/"+devicecsize+"-3.png",
               "img/header/"+devicecsize+"/"+devicecsize+"-4.png"];


// 
let wv = window.innerWidth;
let wh = header.offsetHeight;


  
  // instanciate slider
  rbgShiftSlider({
    nav: false,
    navElement: ' ',
    slideImages: images,
    stageWidth: wv,
    stageHeight: wh,
    displacementImage: 'assets/displace-circle.png',
    fullScreen: true,
    transitionDuration: 0.50, // must be 0.1 > transitionGhostDuration
    transitionGhostDuration: 0.25,
    transitionFilterIntensity: 400,
    transitionSpriteIntensity: 3,
    mouseDispIntensity: 3,
    interactive: true,
    autoPlay: true,
    autoPlaySpeed: 5500 });

}


//==========================================================================//
//scroll flash
window.addEventListener('scroll', function(e) {
    //header height
    let topPos =  content.getBoundingClientRect();
    let top = topPos.top;
 
    header.style.height=Math.round(top)+'px'
    let can=rbgS;
    //header image 
   // let scroll =Number( (Math.round(this.pageYOffset)/350) )+1;
    let scaleNum=Math.round(Number(this.pageYOffset/4));

   can.style.transform='translateZ('+scaleNum+'px)';

});






//==========================================================================//
//endit
});



/*
window.addEventListener('DOMContentLoaded', (event) => {

let header = document.querySelector(".header");
let himg =document.querySelector(".headimg");
let htxt = document.querySelector(".headertxt");
let content = document.querySelector(".content");
let gallery = document.querySelector(".gallery")
let gshow = document.querySelector(".galleryShow")
let gshowmedia = document.querySelector(".galleryShow__media");



function buildGallery(gallerydata){

  

 const gallerymarkup= `
  ${gallerydata.map(image => `<div class="gallery-images">
  <img class="gallery-image__media" loading="lazy" src="${image.galleryImages}">
  <div class="gallery-images-txt"><h3>${image.galleryImagesHeadline}</h3><p>${image.galleryImagesTxt}</p></div>
  <div class="imgCap"><h4>${image.galleryImgCap}</h4></div></div>`).join('')}`;

  gallery.innerHTML = gallerymarkup;



}





const xhr = new XMLHttpRequest();

// listen for `onload` event
xhr.onload = () => {
    // process response
    if (xhr.status == 200) {
        // parse JSON data
        let data=JSON.parse(xhr.response)
        buildGallery(data)

    } else {
        console.error('Error!');
    }
};

// create a `GET` request
xhr.open('GET', 'data/gallerydata.json');

// send request
xhr.send();










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

*/