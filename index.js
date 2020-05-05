const span=document.querySelectorAll("span")

if(window.screen.width <= 500){
    span.forEach(element=>{
        element.addEventListener("click",(event)=>{
            playmedia(document.getElementById(event.target.innerHTML),element)
        })
    })
}
else{
    window.addEventListener("keydown",(event)=>{
        span.forEach(element => {
            if(element.innerHTML == event.key.toUpperCase()){
                playmedia(document.getElementById(event.key.toUpperCase()),element)
            }
        })
    })
}

function playmedia(element,parentelem){
    element.play()
    parentelem.classList.add("active")
    element.addEventListener("ended",(event)=>{
        parentelem.classList.remove("active")
    })
}