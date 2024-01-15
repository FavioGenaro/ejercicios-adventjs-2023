function calculateTime(deliveries) {

    let fechaCero = new Date('2012-01-26T00:00:00')
    const limit = 25200000 // new Date('2012-01-26T07:00:00') - new Date('2012-01-26T00:00:00')
    let durationTotal = 0;

    for (const entrega of deliveries) {
        durationTotal += fechaCero - new Date('2012-01-26T' + entrega)
    }
    // console.log(durationTotal)
    // console.log(limit)

    // FORMA 1
    // const time = Math.abs(limit-(durationTotal*-1))
    // const hora = Math.floor(time/3600000)
    // let resto = time-(3600000*hora);
    // const minutos = Math.floor(resto/60000)
    // resto = resto - minutos*60000;
    // const segundos = Math.floor(resto/1000);
    // console.log(time, hora, minutos,segundos)
    
    // let result = (limit>Math.abs(durationTotal))? '-':''
    // result += (hora>9) ? hora : '0'+hora 
    // result += ":" + ((minutos>9) ? minutos : '0'+minutos)
    // result += ":" + ((segundos>9) ? segundos : '0'+segundos)


    // FORMA 2
    // let time = Math.abs(limit-Math.abs(durationTotal))
    // const hora = ((time/3600000<=9) && '0') + Math.floor(time/3600000)
    // time -= 3600000*hora;
    // const minutos = ((time/60000<=9) && '0') + Math.floor(time/60000)
    // time -= minutos*60000;
    // const segundos = ((time/1000<=9) && '0') + Math.floor(time/1000);

    // let result = (limit>Math.abs(durationTotal))? '-':''
    // result += hora + ":" + minutos + ":" + segundos


    // FORMA 3
    let time = Math.abs(limit-Math.abs(durationTotal))
    const hora = Math.floor(time/3600000)
    time -= 3600000*hora;
    const minutos = Math.floor(time/60000)
    time -= minutos*60000;
    const segundos = Math.floor(time/1000);

    let result = (limit>Math.abs(durationTotal))? '-':''
    result += String(hora).padStart(2,'0') + ":" 
    result += String(minutos).padStart(2,'0') + ":" 
    result += String(segundos).padStart(2,'0')


    return result
}

const result = calculateTime(['00:10:00', '01:00:00', '03:30:00']);
console.log(result)