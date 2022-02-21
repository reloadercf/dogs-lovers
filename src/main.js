import data from './data.js'
import {generadorHtml} from './generadorHtml.js'
import {filtroPorRaza} from './filtrado.js'

const nodoRoot=document.getElementById('root')
const raza= document.getElementById('raza')

let todoElHTML=""

data.dogs.forEach(perrito=>{
    todoElHTML+=generadorHtml(perrito)
})

nodoRoot.innerHTML=todoElHTML

raza.addEventListener('change', (e)=>{
    let soloHTMLParaElFiltro = ""
    filtroPorRaza(e.target.value, data.dogs).forEach(perritosHtml=>{
        soloHTMLParaElFiltro+=generadorHtml(perritosHtml)
    })

    nodoRoot.innerHTML=soloHTMLParaElFiltro
    
})
