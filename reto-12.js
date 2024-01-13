/*
    En el Polo Norte todavía usan fotocopiadoras de papel. Los elfos las usan para copiar las cartas que los niños envían a Santa y así poder enviarlas a todos los departamentos de regalos.

    Sin embargo ya son muy viejas y no funcionan muy bien. Cada vez que hacen una copia, la calidad de la copia disminuye ligeramente, un fenómeno conocido como pérdida generacional.

    Necesitas detectar si una carta es una copia de otra. Las cartas son muy largas y no puedes leerlas, pero puedes compararlas con un algoritmo.

    Existe una gran probabilidad de que un caracter se degrade en cada copia (¡no pasa siempre!). Y al ocurrir, la regla que sigue es:

    Los caracteres de la A a la Z se degradan de mayúsculas a minúsculas (A-Z ⇒ a-z)
    Las letras se degradan en una serie de caracteres en este orden: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
    Una vez degradadas las letras en los símbolos, se pueden continuar degradando.
    Ten en cuenta que el último es un espacio en blanco, no un caracter vacío.
    Los caracteres que no son letras (como los dígitos) no se degradan.
    Sabiendo esto y recibiendo dos cartas. La supuesta original y la copia. Debes determinar si la copia es una copia de la otra.
*/

function checkIsValidCopy(original, copy) {

    const ori = original;
    const cop = copy;
    const constText = '#+:. '
    let estado = true;

    if(ori.length != cop.length) return false

    for (let i = 0; i < ori.length; i++) {

        // ambos son letras o numeros
        if(!constText.includes(ori[i]) && !constText.includes(cop[i]) ){ // constText.includes(ori[i])
            estado = (ori[i].toLowerCase()==cop[i].toLowerCase()) ? true : false // ambos son mayuscula o minuscula o numero

            // si es un mayuscula y otro minuscula
            if(estado && ori[i] === ori[i].toLowerCase() && cop[i] === cop[i].toUpperCase()){
                estado = false
            }
            // si es un número
            if(!isNaN(parseInt(ori[i]))){
                estado = (ori[i] === ori[i]) ? true : false
            }
        }
        // original es letra y copia esta degradado
        else if(!constText.includes(ori[i]) && constText.includes(cop[i])){
            estado = true;
        }
        // verificamos degradacion generativa
        else if(constText.includes(ori[i])){
            estado = constText.indexOf(ori[i])<=constText.indexOf(cop[i])? true : false
        }
        console.log(ori[i], cop[i])
        console.log(estado)

        if(estado == false) {
            return false
        }
    }

    return true
}


// const result = checkIsValidCopy(
//     'Santa Claus',
//     's#+:. c:. s'
// )

// const result = checkIsValidCopy('3 #egalos', '3 .+:# #:')
const result = checkIsValidCopy('3 #egalos', '3 .+:# #:')
console.log(result);
