import data from './data.js'
import {generadorHtml} from './generadorHtml.js'

const nodoRoot=document.getElementById('root')

let todoElHTML=""

data.dogs.forEach(perrito=>{
    todoElHTML+=generadorHtml(perrito)
})

nodoRoot.innerHTML=todoElHTML