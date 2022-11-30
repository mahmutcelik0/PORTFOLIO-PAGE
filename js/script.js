function setupTabs(){
    document.querySelectorAll(".tabButton").forEach(button=>{
        button.addEventListener("click",() =>{
            const tabNumber = button.dataset.forTab;
            clickedButtonNumber = tabNumber;
            clearAll();
            makeChange(tabNumber);
        });
        
    });
}

function clearAll(){
    document.querySelectorAll(".tabContent").forEach(part=>{
        part.classList.remove("contentActive");
    })
}

function makeChange(number){
    const willChangePart = document.querySelector(`.tabContent[data-tab="${number}"]`);
    willChangePart.classList.add("contentActive");

}


document.addEventListener("DOMContentLoaded",()=>{
    setupTabs();
})


/* PRELOADER */

var myVar;

function preLoaderFunc() {
    
    myVar = setTimeout(showPage, 1500);
}

function showPage() {
    document.getElementById("loader").style.display = "none";

    document.getElementById("progBody").style.display="block";

    document.getElementById("progHead").style.display="block";

    document.getElementById("progSection").style.display="block";

    document.getElementById("progMain").style.display = "block";

    document.getElementById("progFooter").style.display = "block";
}