function autonomousDrive(store, movements) {
    let filaActual = store.findIndex(e=> e.includes('!'))
    let posicion = store[filaActual].indexOf('!')
    // function replaceAt(i, t,string){
    //   return string.substring(0, i) + t + string.substring(i + 1);
    // }
    const pasos = {
        'R': 1,
        'L': -1,
        'U': -1,
        'D': 1
    }

    for (const a of movements) {

      if(['R','L'].includes(a)){ // a === 'R' || a === 'L'
            // que no sea undefined o '*'
            if(![undefined,'*'].includes(store[filaActual][posicion+pasos[a]])){
    
                // store[filaActual] = replaceAt(posicion,'.',store[filaActual])
                store[filaActual] = store[filaActual].substring(0, posicion) + '.' 
                                    + store[filaActual].substring(posicion + 1);
                posicion = posicion + pasos[a];
                store[filaActual] = store[filaActual].substring(0, posicion) + '!' 
                                    + store[filaActual].substring(posicion + 1);
                // store[filaActual] = replaceAt(posicion,'!',store[filaActual])
            }
        }else if(['U','D'].includes(a)){ // a === 'U' || a === 'D'
            if(store[filaActual+pasos[a]]!==undefined && 
                store[filaActual+pasos[a]][posicion]!=='*'){
        
                // store[filaActual] = replaceAt(posicion,'.',store[filaActual])
                store[filaActual] = store[filaActual].substring(0, posicion) + '.' 
                                + store[filaActual].substring(posicion + 1);
                filaActual = filaActual + pasos[a];
                store[filaActual] = store[filaActual].substring(0, posicion) + '!' 
                                + store[filaActual].substring(posicion + 1);
                // store[filaActual] = replaceAt(posicion,'!',store[filaActual])
            }
        }
    }
    return store
}



// const store = ['..!....', '...*.*.']

// const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive([
    '*..!..*',
    '*.....*'
    ],
    ['R', 'R', 'D', 'D'])
console.log(result)



// VERSION 1
/*
    function autonomousDrive(store, movements) {
    let filaActual = 0;
    let posicion = 0;
    for (let i = 0; i < store.length; i++) {
        let pos = store[i].indexOf('!');
        if(pos !== -1){
            filaActual = i;
            posicion = pos;
            break;
        }
        
    }

    for (const a of movements) {
        console.log(typeof(a))
        console.log(a)

        switch (a.toUpperCase()) {
            // Cambia la posicion dentro de la misma fila
            case 'R':
                if(store[filaActual][posicion+1]===undefined){
                    break;
                }
                if(store[filaActual][posicion+1]==='*'){
                    break;
                }
                posicion++;
                store[filaActual] = store[filaActual].replace("!.", ".!")
                // console.log(store)
                break;
            case 'L':
                if(store[filaActual][posicion-1]===undefined){
                    break;
                }
                if(store[filaActual][posicion-1]==='*'){
                    break;
                }
                posicion--;
                store[filaActual] = store[filaActual].replace(".!", "!.")
                break;
            // mantiene la posición, pero cambia de fila
            case 'U': // ARRIBA
                if(store[filaActual-1]===undefined){
                    break;
                }
                if(store[filaActual-1][posicion]==='*'){
                    break;
                }
                store[filaActual] = store[filaActual].replace("!", ".")
                filaActual--;
                store[filaActual][posicion] = '!'
                break;
            case 'D': // ABAJO
                if(store[filaActual+1]===undefined){
                    break;
                }
                if(store[filaActual+1][posicion]==='*'){
                    break;
                }
                store[filaActual] = store[filaActual].replace("!", ".")
                filaActual++;
                let b = store[filaActual].split('')
                b[posicion] = '!'
                store[filaActual] = b.join('');
                break;
        }
        console.log(store)
    }
    return store
}
*/

// VERSION 2 - se entiende mejor
/**
    function autonomousDrive(store, movements) {
    let filaActual = store.findIndex(e=> e.includes('!'))
    let posicion = store[filaActual].indexOf('!')

    function replaceAt(i, t,string){
        return string.substring(0, i) + t + string.substring(i + 1);
    }
    for (const a of movements) {

        switch (a.toUpperCase()) {
        case 'R':
            if(store[filaActual][posicion+1]!==undefined){
                if(store[filaActual][posicion+1]!=='*'){
                    posicion++;
                    store[filaActual] = store[filaActual].replace("!.", ".!")
                }
            }
            break;
        case 'L':
            if(store[filaActual][posicion-1]!==undefined){
                if(store[filaActual][posicion-1]!=='*'){
                    posicion--;
                    store[filaActual] = store[filaActual].replace(".!", "!.")
                }
            }
            break;
        case 'U': // ARRIBA
            if(store[filaActual-1]!==undefined){
                if(store[filaActual-1][posicion]!=='*'){
                    store[filaActual] = store[filaActual].replace("!", ".");
                    filaActual--;
                    store[filaActual] = replaceAt(posicion,'!',store[filaActual]);
                }
            }
            break;
        case 'D': // ABAJO
            if(store[filaActual+1]!==undefined){
                if(store[filaActual+1][posicion]!=='*'){
                    store[filaActual] = store[filaActual].replace("!", ".")
                    filaActual++;
                    store[filaActual] = replaceAt(posicion,'!',store[filaActual]);
                }
            }
            break;
        }
    }

    return store
}
 */