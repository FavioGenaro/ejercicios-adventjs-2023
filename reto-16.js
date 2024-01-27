function transformTree(tree) {

    if (tree.length == 0) return null

    if (tree.length == 1) return {"value": tree[0],"left": null,"right": null}

    let arbol = []
    let ultimo = 0;

    while (tree[0] === null){
        tree.shift();
    }

    // generamos arreglo con los valores y sus hijos
    for (let i = 0; i < tree.length; i++) {
        // mientras tenga un tree[i] no null (debe tener hijos), y que sus hijos sean null, pues suma, para poder agregar otros hijos
        while(tree[i]!==null && tree[ultimo+1]===null && tree[ultimo+2]===null){
            ultimo = ultimo+2
        }

        // no es nulo, por lo que, se le asigna sus hijos
        let rama = ((tree[i]!==null) ? {
            value: tree[i],
            left: ((tree[ultimo+1]!==undefined) ? {value: tree[ultimo+1]}: null),
            right: ((tree[ultimo+2]!==undefined) ? {value: tree[ultimo+2]}: null)
        }: null);

        arbol.push(rama) // si es nulo, push null y sino no lo es, pues se añader el padre y sus hijos

        // Si es nulo y uno sus 'hijos' tiene valor, pues es mejor no salar el ultimo
        if(tree[i]===null && (tree[ultimo+1] !== null || tree[ultimo+2] !== null)){
            continue;
        }
        ultimo = ultimo+2
    }   
    console.log(arbol)

    const result = {
        ...arbol[0]
    };
    // let referencia = result;
    let filas = [result];
    let padres = [result];
    let ultimoIn = 0;

    // llenar izquierda
    for (let i = 0; i < arbol.length; i++) {

        let conta = filas.length;
        padres = [...filas] 
        for (let j = 0; j < conta; j++) {
            if(j == 0) {
                filas = [];
            }

            if(padres[j] !== null) {
                padres[j].left = ((arbol[ultimoIn+1]!==undefined) ? arbol[ultimoIn+1]: null);
                padres[j].right = ((arbol[ultimoIn+2]!==undefined) ? arbol[ultimoIn+2]: null);
                filas.push(padres[j].left);
                filas.push(padres[j].right);
            }else if (arbol[ultimoIn+1]!== null || arbol[ultimoIn+2]!== null){
                continue;
            }
            ultimoIn = ultimoIn+2;
        }
        // filas = []
        if(ultimoIn >= arbol.length-1) {
            // return
            break;
        }
    }

    return result
}

// const result = transformTree([3, 1, 0, 8, 12, null, 1]);
// const result = transformTree([1, 2, 3, 4, 5]);
const result = transformTree([null, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, null]);
console.log(result)



/*

    function transformTree(tree) {

    if (tree.length == 0) return null

    if (tree.length == 1) return {"value": tree[0],"left": null,"right": null}

    let arbol = []
    let iterator = 1;
    
    for (let i = 0; i < tree.length; i++) {
        let rama = ((tree[i]!==null) ? {
            value: tree[i],
            left: ((tree[i+iterator]!==undefined) ? {value: tree[i+iterator]}: null),
            right: ((tree[i+iterator+1]!==undefined) ? {value: tree[i+iterator+1]}: null)
        }: null);
        arbol.push(rama)
        iterator++;
    }

    const result = {
        ...arbol[0]
    };
    let referencia = result;
    // let referenciaPadre = result;
    let filas = [referencia];
    let padres = [referencia];
    let ultimoIn = 0;

    // llenar izquierda
    for (let i = 0; i < arbol.length; i++) {
        let conta = filas.length;
        padres = [...filas]
        for (let j = 0; j < conta; j++) {
            if(j == 0) { // filas.length-1
                filas = [];
            }

            if(padres[j] !== null) {
                padres[j].left = ((arbol[ultimoIn+1]!==undefined) ? arbol[ultimoIn+1]: null);
                padres[j].right = ((arbol[ultimoIn+2]!==undefined) ? arbol[ultimoIn+2]: null);
                filas.push(padres[j].left);
                filas.push(padres[j].right);

                ultimoIn = ultimoIn+2;
            }
            
        }
        if(ultimoIn >= arbol.length-1) {
            break;
        }
    }

    return referencia
    }

*/