export function filtradoRaza(losPerritos, criterioCoincidencia){
    return losPerritos.filter(function(unPerrito){
        return unPerrito.breed == criterioCoincidencia
    })
}