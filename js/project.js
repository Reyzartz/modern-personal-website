let modal_backdrop=document.getElementById("modal");
let modal=document.querySelector("iframe");
modal_backdrop.style.transform="translateY(-110%)";
modal.src="";
const openmodal=(url)=>{
    modal.src=url;
    modal_backdrop.style.transform="translateY(0%)";
}
const closemodal=()=>{
    modal.src="";
    modal_backdrop.style.transform="translateY(-110%)";
}