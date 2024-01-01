
/*
    ELFO EL TRAVIESO
    En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.
    Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
    Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
*/

function findNaughtyStep(original, modified) {

    // return original === modified && '';
    if(original === modified){
        return '';
    }

    let feweLetters;
    let majorLetters;
    let letter = '';

    if(original.length > modified.length){
        feweLetters = [...modified];
        majorLetters = [...original];
    }else{
        feweLetters = [...original];
        majorLetters = [...modified];
    }

    for(let i=0; i<feweLetters.length; i++){
        if (feweLetters[i] !== majorLetters[i]){
            letter = majorLetters[i];
            break;
        }
    }

    if (letter == ''){ // si no se identifico la letra, es que es la ultima letra del mayor
        letter =  majorLetters[ majorLetters.length-1];
    }

    return letter;
}

// Pruebas
const result1 = findNaughtyStep('stefpor','stepor'); // 'stepfor','stepor' // 'abcd','abcde'
console.log(result1)

const result2 = findNaughtyStep('xxxx', 'xxoxx');
console.log(result2)


/*
    function findNaughtyStep(original, modified) {

    if(original === modified){
        return '';
    }

    const lettersOriginal = [...original];
    const lettersModified = [...modified];
    let letter = '';

    //se añadio
    if (lettersModified.length > lettersOriginal.length){
        console.log("Se añadio una letra");

        lettersOriginal.forEach((letterOriginal, i)=>{
            if (letterOriginal !== lettersModified[i] && letter==''){
                letter = lettersModified[i];
            }
        })

        if (letter == ''){ // si no se identifico la letra, es que es la ultima
            letter = lettersModified[lettersModified.length-1];
        }
    } // se elimino
    else if (lettersModified.length < lettersOriginal.length){
        console.log("Se elimino una letra")

        lettersModified.forEach((letterModified, i) => {
            if (letterModified !== lettersOriginal[i] && letter==''){
                letter = lettersOriginal[i];
            }
        })

        if (letter == ''){ // si no se identifico la letra, es que es la ultima
            letter = lettersOriginal[lettersOriginal.length-1];
        }
    }

    return letter
}


*/