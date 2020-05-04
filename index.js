window.addEventListener("keydown",(event)=>{
    let span=document.querySelectorAll("span")
    span.forEach(element => {
        if(element.innerHTML == event.key.toUpperCase()){
            playmedia(document.getElementById(event.key.toUpperCase()),element)
        }
    })
})

function playmedia(element,parentelem){
    element.play()
    parentelem.classList.add("active")
    element.addEventListener("ended",(event)=>{
        parentelem.classList.remove("active")
    })
}