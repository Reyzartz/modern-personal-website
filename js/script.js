window.addEventListener("DOMContentLoaded",scrollLoop,false);

let xScrollPosition,yScrollPosition;

let HeyText=document.getElementById("hey_bg_text"),
 sqr1=document.getElementById("sqr1"),
 cir1=document.getElementById("cir1"),
 cross1=document.getElementById("cross1"),
 navEl=document.getElementById("navbar").children[0], 
 navElgallery=navEl.children[2],
 greetback=document.getElementById("greet"),
 greetText=greet.children[0],
 skillsBack=document.getElementById("skills_description"),
 skillsText=skillsBack.children[0],
 descriptionback=document.getElementById("description"),
 descriptionText=descriptionback.children[0],
 aboutDescriptionBack=document.getElementById("about_description"),
 aboutDescriptionText=aboutDescriptionBack.children[0],
 AboutText=document.getElementById("about_bg_text"),
 ProjectsText=document.getElementById("projects_bg_text");

 let k=500;

console.log(innerWidth);
function scrollLoop(){
    xScrollPosition=window.scrollX;
    yScrollPosition=window.scrollY;
if(innerWidth>600){
    setTranslate(0,yScrollPosition*0.1,greetText);
    setTranslate(yScrollPosition,yScrollPosition*-0.1,greetback);
    setTranslate(0,yScrollPosition*0.1,descriptionText);
    setTranslate(yScrollPosition*-1,yScrollPosition*-0.1,descriptionback);
    
    /************For About***********/
    if(yScrollPosition<innerHeight){
        setTranslate(yScrollPosition*-1+innerHeight,yScrollPosition*-0.1,skillsBack);
        setTranslate(0,yScrollPosition*0.1+innerHeight,skillsText);
        setTranslate(0,yScrollPosition*-1.5+innerHeight,AboutText);
        setTranslate(0,yScrollPosition*-0.01, aboutDescriptionText );
        setTranslate(yScrollPosition*1-innerHeight,yScrollPosition*-0.1,aboutDescriptionBack);
    }
    setTranslate(0,yScrollPosition*-1.5,HeyText);
    
    

    setTranslate(0,yScrollPosition*0.2,sqr1);
    setTranslate(0,yScrollPosition*0.2,cir1)
    setTranslate(0,yScrollPosition*0.2,cross1)
    

    if(yScrollPosition<(innerWidth-380))
    setTranslate(yScrollPosition,0,navEl);

    if(800-(yScrollPosition*1.12)>=6)
    navElgallery.style.paddingBottom=`${800-(yScrollPosition*1.12)}px`

}

    requestAnimationFrame(scrollLoop);
}

const setTranslate=(xPos, yPos, el,zpos=0)=> el.style.transform = `translate3d(${xPos}px, ${yPos}px, ${zpos})`;