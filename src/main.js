import perritos from './data.js'

let elDOM=document.getElementById("app")


perritos.dogs.forEach(unperrito=>{
    let unsolDiv=document.createElement("div")
    unsolDiv.innerHTML=setHtml(unperrito)
    elDOM.appendChild(unsolDiv)
})

function setHtml(unperro){
    let html=`<img src="${unperro.image}"/>
            <p>${unperro.breed}</p>
                `
    return html
}