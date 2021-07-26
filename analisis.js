// funciones Helpers ó Utils
function esPar(numerito){
    return (numerito % 2 === 0);
}

//Mediana General
function calcularMediAritmetica(lista){
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento
            }
        );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2); //para devolver un numero entero

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}


const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB; //esto devuelve el array con los datos ordenados de menor a mayor
    }
);

const mediaGeneralCol = medianaSalarios(salariosColSorted);

// mediana del top 10
const sliceStart = (salariosColSorted.length * 90) / 100;
const sliceCount = salariosColSorted.length - sliceStart;

const salarioColTop10 = salariosColSorted.splice(
    sliceStart,
    sliceCount,
    );

const medianaTop10Col = medianaSalarios(salarioColTop10);

console.log(
    mediaGeneralCol,
    medianaTop10Col,
);