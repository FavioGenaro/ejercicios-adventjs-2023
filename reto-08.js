/*

Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.

El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b.

Los elfos tienen un sistema especial para organizar los regalos:

Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.

Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.

*/

function organizeGifts(gifts) {
    // Code here
    const arr = gifts.match(/\d+[a-zA-Z]/g) // arreglo
    let textFinal = [];
    for (const item of arr) {
        const num = parseInt(item.substring(0,item.length-1));
        const tipo = item.charAt(item.length-1);

        let bolsas = num % 10; // residuo de la división por 10, retorna la unidad
        let cajas = ((num-bolsas)/10) % 5; // num-bolsas es el num sin su unidad, lo divido por 10, hasta ahí estan todas las cajas posibles
        // pero el residuo de la división por 5 seria la cantidad de cajas que quedan si ya se agruparon los pale
        let pale = Math.floor(((num-bolsas)/10) / 5); // cantidad de cajas posibles dividio entre 5 y solo extraigo la parte entera

        // imprimo el resultado
        textFinal += (pale==0) ? '':`[${tipo}]`.repeat(pale);
        textFinal += (cajas==0) ? '':`{${tipo}}`.repeat(cajas);
        textFinal += (bolsas==0) ? '':'(' + tipo.repeat(bolsas) + ')';
    }

    return textFinal
}

const result1 = organizeGifts(`70a11b`)
console.log(result1)


