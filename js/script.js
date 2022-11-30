function setupTabs(){
    document.querySelectorAll(".tabButton").forEach(button=>{
        button.addEventListener("click",() =>{
            const tabNumber = button.dataset.forTab;
            clickedButtonNumber = tabNumber;
            console.log(clickedButtonNumber);
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