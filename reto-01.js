/*
    PRIMER REGALO REPETIDO
    En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
    Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
    ¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
    En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.
 */

function findFirstRepeated(gifts) {
    let valuesUnique = [];

    for (let i = 0; i<gifts.length; i++){
        const isInTheArray = valuesUnique.some(v => v == gifts[i]); // valuesUnique.includes(gifts[i]); // de esta forma tmb funciona

        if (!isInTheArray){
            valuesUnique.push(gifts[i]);
        }else{
            return gifts[i];
        }
    }

    console.log(valuesUnique)
    return -1
}

let valor = findFirstRepeated([2, 1, 3, 5, 4, 2])
console.log(valor)
let valor2 = findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7])
console.log(valor2)
