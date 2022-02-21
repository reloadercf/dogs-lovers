// escribir todo los filtros
export function filtroPorRaza(unaRaza, perritos) {
    return perritos.filter(perrito=>perrito.breed==unaRaza)
}