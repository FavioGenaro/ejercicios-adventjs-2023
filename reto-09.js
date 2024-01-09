/*
    Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

    Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

    Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.
*/


function adjustLights(lights) {
    // Sale mejor con una function en vez de un función anonima
    const checkList = (arrLights) => {
        let cont = 0;
        for (let i = 0; i < arrLights.length; i++) { // i+=2
            if(arrLights[i]==arrLights[i+1]){
                // cambiamos el color de las luces
                arrLights[i+1] = arrLights[i]=='🔴'?'🟢':'🔴';
                cont++
            }
        }
        return cont;
    }

    // iteramos la lista normal y reversa
    return Math.min(checkList([...lights]), checkList([...lights].reverse()));
}

const result = adjustLights(['🔴', '🔴', '🔴', '🟢','🔴', '🔴', '🟢'])
console.log(result);

const result2 = adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']);
console.log(result2);

// RECORREMOS de ida y vuelta el arreglo con dos for
// function adjustLights(lights) {
//     let cont = 0;
//     // ida
//     let lights2 = [...lights]

//     for (let i = 0; i < lights.length; i++) { // i+=2
//         // console.log(i)
//         if(lights[i]==lights[i+1]){
//             lights[i+1] = lights[i]=='🔴'?'🟢':'🔴';
//             cont++
//         }
//     }
//     console.log('cont 1 ' + cont)
//     console.log(lights);
//     if(cont == 1 ) return cont

//     // vuelta
//     let cont2 = 0;
//     for (let i = lights2.length-1; i >= 0; i--) { // i+=2
//         console.log(i)
//         if(lights2[i]==lights2[i-1]){
//             lights2[i-1] = lights2[i]=='🔴'?'🟢':'🔴';
//             cont2++
//         }
//     }
//     console.log('cont 2 ' + cont2)
//     console.log(lights2);
//     if(cont>cont2 ) return cont2

//     return cont
// }