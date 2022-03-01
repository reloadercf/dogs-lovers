import data from './data.js'
import {generadorHtml} from './generadorHtml.js'
import { ordenadoZA } from './ordenadoZA.js'

const nodoRoot=document.getElementById('root')
const ordenado=document.getElementById('ordenado')

let todoElHTML=""

data.dogs.forEach(perrito=>{
    todoElHTML+=generadorHtml(perrito)
})

nodoRoot.innerHTML=todoElHTML

ordenado.addEventListener('change', (event)=>{
    let htmlOrdenado = "";
    console.log(ordenadoZA(data.dogs)); // lo que sigue es iterar este arreglo con un for each igualito como lo hicimos arriba para imprimir perritos.
})