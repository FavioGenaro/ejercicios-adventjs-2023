function drawGift(size, symbol) {

    if(size == 1) {
        return '#\n'
    }
    let textFinal = "";
    let medio = '#'.repeat(size) + symbol.repeat(size-2) + '#';
    let top = [];
    let bootom = [];

    // Generamos top
    top.push('#'.repeat(size));
    for(let i=0; i<size-2; i++){
        top.push('#' + symbol.repeat(size-2) + '#' + symbol.repeat(i) +'#');
    }

    // bootom = top.toReversed(); // no funcionaba en la página, pero en local si
    bootom = [...top].reverse(); // botom es lo mismo que top pero invertido

    // añadimos espacios en top
    for(let i=size-1; i>0; i--){
        top[size-i-1] = ' '.repeat(i) + top[size-i-1];
    }

    textFinal = [...top, medio,...bootom].join('\n') + '\n';

    return textFinal 
}

let a = drawGift(4, '+')
console.log(a)

// function drawGift(size, symbol) {

//     if(size == 1) {
//         return '#\n'
//     }
//     let textFinal = "";

//     let text = ' '.repeat(size-1) + '#'.repeat(size) + '\n';

//     for(let i=0; i<size-2; i++){
//         text += ' '.repeat(size-2-i) + '#' + symbol.repeat(size-2) + '#' + symbol.repeat(i) +'#\n';
//     }
    
//     text +='#'.repeat(size) + symbol.repeat(size-2) + '#\n'; // medio
    

//     // Parte 2
//     for(let i=size-3; i>=0; i--){
//         text += '#' + symbol.repeat(size-2) + '#' + symbol.repeat(i) +'#\n';
//     }

//     text += '#'.repeat(size) + '\n';

//     // console.log(text)
//     // Code here
//     return text
// }