import data from './data.js'
import {generadorHtml} from './generadorHtml.js'
import { ordenado } from './ordenado.js'

const nodoRoot=document.getElementById('root')
const nodoOrdenando =document.getElementById('ordenado')

let todoElHTML=""

data.dogs.forEach(perrito=>{
    todoElHTML+=generadorHtml(perrito)
})
nodoRoot.innerHTML=todoElHTML

nodoOrdenando.addEventListener('change',(e)=>{
    let perritosOrdenados= ordenado(e.target.value, data.dogs)
    let htmlOrdenado = ""
    perritosOrdenados.forEach(unperrito=>{
       htmlOrdenado+=generadorHtml(unperrito)
    })
    nodoRoot.innerHTML=htmlOrdenado;
})

