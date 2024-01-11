/*
    En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.

    Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

    Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

    Si ya es un palíndromo, un array vacío.
    Si no es posible, null.
    Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.

    Ejemplo
    getIndexsForPalindrome('anna') // []
    getIndexsForPalindrome('abab') // [0, 1]
    getIndexsForPalindrome('abac') // null
    getIndexsForPalindrome('aaaaaaaa') // []
    getIndexsForPalindrome('aaababa') // [1, 3]
    getIndexsForPalindrome('caababa') // null
*/


function getIndexsForPalindrome(word) {
    const ite = Math.floor(word.length/2);
    let post = [];
    // Capturo las posiciones diferentes
    for (let i = 0; i < ite; i++) {
        if(word[i] !== word[word.length-i-1]) {
            post.push(i)
        }
    }

    if(post.length==0) return [] // es un palindromo
    if(post.length>2) return null // sino se realizarian más de 1 cambio

    // generamos particiones del texto
    let textIzq = word.slice(0,ite)
    let pivote = (word.length % 2 == 0) ? '' : word[ite]
    let textDer = (word.length % 2 == 0) ? word.slice(ite) : word.slice(ite+1)

    console.log(textIzq, pivote, textDer)

    let textIzqAux = [...textIzq]

    if(post.length == 2){ // par, intercambio las posiciones
        let aux = textIzqAux[post[1]]
        textIzqAux[post[1]] = textIzqAux[post[0]]
        textIzqAux[post[0]] = aux

        if (textIzqAux.reverse().join("") == textDer){
            return post
        }
    }

    if(pivote == '') return null

    // Intercambio con los pivotes
    let textDerAux = [...textDer]
    // izquierda
    for (const p of post) {
        textIzqAux = [...textIzq]
        textIzqAux[p] = pivote
        
        if (textIzqAux.reverse().join('') == textDer){
            return [p,ite]
        }
    }

    // derecha
    textIzqAux = [...textIzq]
    for (const p of post) {
        textDerAux = [...textDer]
        textDerAux[textDerAux.length-p-1] = pivote
        // console.log(textDerAux.reverse().join('') == textIzq, word.length-p-1)
        if (textDerAux.reverse().join('') == textIzq) {
            return [ite,word.length-p-1]
        }
    }
    return null
}


const result = getIndexsForPalindrome('rotaratov')
console.log(result)

