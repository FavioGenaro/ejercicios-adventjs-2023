function createChristmasTree(ornaments, height) {
    // ERROR: Ejecuto el test y sale 150 o 250 xd
    let result = '';
    let posActual = 0;

    for (let i = 1; i <= height; i++) {

        result += ' '.repeat(height-i)
    
        for (let j = 0; j < i; j++) {
            if(posActual == ornaments.length) posActual = 0;
            result += ornaments[posActual]
            if(j != i-1) result += ' '
            posActual ++; // en la ultima iteración se queda marcada la ubicacion siguiente
        }
        result += '\n'

    }

    result += ' '.repeat(height-1) + '|\n'
    return result
}


const result = createChristmasTree("123",10)
console.log(result)

// function textAcumulate(num, text, pos){
//     let result = '';
//     let position = pos;
//     for (let i = 0; i < num; i++) {
//         if(position==text.length) position=0;
//         result += text[position]
//         position++;
//     }
//     return result
// }

// console.log(textAcumulate(10 , ['2', '3'],1))