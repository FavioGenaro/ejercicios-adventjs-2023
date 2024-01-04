/* 

    En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés
    Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.
    Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

*/

function decode(message) {
    
    if(!message.includes("(")){
        return message;
    }

    // let parAbi = message.split('(');

    while (message.includes("(")){
        let parAbi = message.split('(');
        let parCerr = parAbi[parAbi.length-1].split(')');
        
        // INVERTIR CADENA
        const separarCadena = parCerr[0].split("");
        const invertirArreglo = separarCadena.reverse();
        const post = invertirArreglo.join("");

        parCerr[0] = post;

        if(parCerr.length > 1){ // una hay más valores por invertir
            parCerr[0] = parCerr[0] + parCerr[1]; // concatenamos 1er y 2do valor
            parCerr.splice(1, 1); // eliminamos valor el segundo elemento
            parCerr = parCerr.join(")");
            parAbi[parAbi.length-1] = parAbi[parAbi.length-2] + parCerr; // concantena los dos ultimos valores en el ultimo
            parAbi.splice(parAbi.length-2, 1); // eliminamos el penultimo elemento
            parAbi = parAbi.join("(");
        }else{ // queda solo 1
            parCerr[0] = parCerr[0] + parCerr[1];
            parCerr.splice(1, 1); // eliminamos valor el segundo elemento, es el ultimo
            parAbi[parAbi.length-1] = parAbi[parAbi.length-2] + parCerr[0]; // concantena los dos ultimos valores en el ultimo
            parAbi.splice(parAbi.length-2, 1); // eliminamos el penultimo elemento
            parAbi = parAbi.join("");
        }

        message = parAbi;
    }

    return message;
}


const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

const c1 = decode('hola (odnum)');
console.log(c1)
