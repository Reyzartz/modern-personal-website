window.addEventListener("DOMContentLoaded",scrollLoop,false);

let xScrollPosition,yScrollPosition;

let HeyText=document.getElementById("hey"),
 sqr1=document.getElementById("sqr1"),
 navEl=document.getElementById("navbar").children[0], 
 navElgallery=navEl.children[3],
 greetback=document.getElementById("greet"),
 greetText=greet.children[0],
 descriptionback=document.getElementById("description"),
 descriptionText=descriptionback.children[0];

 let k=500;

console.log(navElgallery);
function scrollLoop(){
    xScrollPosition=window.scrollX;
    yScrollPosition=window.scrollY;

    setTranslate(0,yScrollPosition*0.1,greetText);
    setTranslate(yScrollPosition,yScrollPosition*-0.1,greetback);
    setTranslate(0,yScrollPosition*0.1,descriptionText);
    setTranslate(yScrollPosition*-1,yScrollPosition*-0.1,descriptionback);
    
    setTranslate(0,yScrollPosition*-1.5,HeyText);
    setTranslate(0,yScrollPosition*0.2,sqr1,yScrollPosition);

    if(yScrollPosition<(innerWidth-500))
    setTranslate(yScrollPosition,0,navEl);

    if(500-yScrollPosition>=6)
    navElgallery.style.paddingBottom=`${500-yScrollPosition}px`

    requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el,zpos=0) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, ${zpos})`;
}