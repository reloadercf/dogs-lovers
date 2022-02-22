import data from './data.js'
import {generadorHtml} from './generadorHtml.js'
import {filtradoRaza} from './filtrado.js'

const nodoRoot=document.getElementById('root')
const filtroPorRaza = document.getElementById('raza')


let todoElHTML=""

data.dogs.forEach(perrito=>{
    todoElHTML+=generadorHtml(perrito)
})

nodoRoot.innerHTML=todoElHTML

filtroPorRaza.addEventListener('change', (event)=>{
    let HTML=""
    filtradoRaza(data.dogs, event.target.value).forEach(function(perritoFiltrado){
        HTML+=generadorHtml(perritoFiltrado);
    }) 
    nodoRoot.innerHTML=HTML
})
