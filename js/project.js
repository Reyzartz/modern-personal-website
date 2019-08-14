

const displayProjects =()=>{
    
    let projects=document.getElementById("projects_tiles");
    let DisplayProject="";
    ProjectsData.forEach(project=>{
        DisplayProject+=`<div class="project">
        <div class="project_img">
            <div class="project_image">
                    <a href="${project.srcCode}" target="_blank" class="project_source"></a>
                    <a onclick="openmodal('${project.link}')" class="project_view"></a>
                <img src="${project.imgSrc}">
            </div>
            </div>
            <h1 class="orange">${project.name}</h1>
                <p>${project.description}</p>
        </div>`
    });
    console.log( DisplayProject );
    projects.innerHTML=DisplayProject;
}

/******************************************************Modal********************************************************** */
let modal_backdrop=document.getElementById("modal");
let modal=document.querySelector("iframe");
modal_backdrop.style.transform="translateY(-110%)";
modal.src="";
const openmodal=(url)=>{console.log("xyz");
    modal.src=url;
    modal_backdrop.style.transform="translateY(0%)";
}
const closemodal=()=>{
    modal.src="";
    modal_backdrop.style.transform="translateY(-110%)";
}
 displayProjects();