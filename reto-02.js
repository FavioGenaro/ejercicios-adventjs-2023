
/*
    PONEMOS EN MARCHA LA FABRICA
    En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.
    Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.
    Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

*/

function manufacture(gifts, materials) {

    let words = [];

    gifts.forEach(gift => {

        const lettersGift = [...gift]; 
        const lettersMaterials = [...materials];
        let doHaveMaterial = true;

        // buscamos que las letras de Gift pertenescan a Materials
        for (let i = 0; i<lettersGift.length; i++){
            const isInTheArray = lettersMaterials.includes(lettersGift[i]);
            if(!isInTheArray){
                doHaveMaterial = false;
            }
        }
        // si se mantiene en true despues del for, se añade la palabra al arreglo
        doHaveMaterial && words.push(gift)
    });

    return words
}

// Pruebas
let result1 = manufacture(['tren', 'oso', 'pelota'], 'tronesa')
console.log(result1)

let result2 = manufacture(['patineta', 'robot', 'libro'],'nopor')
console.log(result2)


// OTRA FORMA DE RESOLVERLO
/*
    // Every se encarga de verificar que cada letra de gift este incluida, sino una no cumple pues retorna false
    function manufacture(gifts, materials) {

    const lettersMaterials = [...materials];
    let words = [];

    for (const gift of gifts){
        let doHaveMaterial = [...gift].every(letter => materials.includes(letter));
        doHaveMaterial && words.push(gift)
    };

    return words
}

*/

// TMB se pueden usar este tipo de fors, al parece van más rápido
/*
    function manufacture(gifts, materials) {

    const lettersMaterials = [...materials];
    let words = [];

    for (const gift of gifts){
        
        const lettersGift = [...gift]; 
        let doHaveMaterial = true;

        for (const letter of lettersGift){
            const isInTheArray = lettersMaterials.includes(letter);
            if(!isInTheArray){
                doHaveMaterial = false;
                break;
            }
        }
        doHaveMaterial && words.push(gift)
    };

    return words
}


*/