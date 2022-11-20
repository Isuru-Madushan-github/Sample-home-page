////// small viewport sideBar

function openNav(){
    document.querySelector('.side-nav').style.width="100%";
}

function closeNav(){
    document.querySelector('.side-nav').style.width="0";
}


////// images slideshow
const slides=document.querySelectorAll('.slide');
let index=0;
showSlides();

function showSlides(){
    for(let a=0; a<slides.length; a++){
        slides[a].style.display="none";
    }
    index++;
    if(index>slides.length){
        index=1;
    }
    slides[index-1].style.display="block";
    setTimeout(showSlides,10000)
}

//// up-part Intersection observer

const upParts=document.querySelectorAll('.up-part');

const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle('show',entry.isIntersecting);
        if(entry.isIntersecting){
            observer.unobserve(entry.target);
        }
    });
},{
    threshold:0.5
});

upParts.forEach(upPart=>{
    observer.observe(upPart);
});

//// bottom-part Intersection observer

const productListAreas=document.querySelectorAll('.product-list-area');
const observer1=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle('show',entry.isIntersecting);
        if(entry.isIntersecting){
            observer1.unobserve(entry.target);
        }
    });
},{
    threshold:0.25
});
productListAreas.forEach(productListArea=>{
    observer1.observe(productListArea);
})