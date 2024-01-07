/*
Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:
    . = Carretera
    S = Trineo de Santa
    * = Barrera abierta
    | = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.
Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.
Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:
*/


function cyberReindeer(road, time) {
    // Code here
    let estados = [road];
    let cont = 0;
    let flagBeforeDoor = false;

    for(let i =1; i<time; i++){
        if(i==5){ // abren todas las puertas
            road = road.replaceAll("|",'*');
        }

        road = [...road];
        if(road[cont+1] !== "|"){

            // if (road[cont+1] == "*" && !flagBeforeDoor){ // puerta abierta, sigue un asterisco
            //     road[cont] = "." // el valorque por el que se reemplza el
            //     road[cont+1] = "S"
            //     flagBeforeDoor = true;
            // }else if (flagBeforeDoor && road[cont+1] != "*"){ // habia un asterisco antes
            //     road[cont] = "*";
            //     road[cont+1] = "S";
            //     flagBeforeDoor = false;
            // }else if (road[cont+1] == "."){ // sigue un punto
            //     road[cont] = "."
            //     road[cont+1] = "S"
            // }else if(road[cont+1] == "*" && flagBeforeDoor){ // sigue un asterisco y ya habia un asterisco antes
            //     road[cont] = "*";
            //     road[cont+1] = "S";
            //     flagBeforeDoor = true;
            // }

            switch (road[cont+1]){
                case '.':
                    road[cont] = flagBeforeDoor ? "*" : ".";
                    
                    flagBeforeDoor = false;
                    break;
                case '*':
                    if(flagBeforeDoor){
                        road[cont] = "*";
                        flagBeforeDoor = true;
                    }else{
                        road[cont] = ".";
                        flagBeforeDoor = true;
                    }
                    break;
            }
            road[cont+1] = "S";
            cont++;
        }
        road = road.join("");

        estados.push(road)
    }

    return estados;
}

let road = 'S***...|..'
const time = 10 // unidades de tiempo

const result = cyberReindeer(road, time)
console.log(result)
