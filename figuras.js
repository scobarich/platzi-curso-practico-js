// código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("El área del cuadrado es: " + areaCuadrado + " cm2");

console.groupEnd();

// código del triángulo
console.group("Triangulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;


//console.log(
//    "Los lados del triángulo miden: " 
//    + ladoTriangulo1 + " cm, " 
//    + ladoTriangulo2 + " cm, " 
//    + baseTriangulo + " cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La latura del triángulo es: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
//console.log("El perímetro del triangulo es: " + perimetroTriangulo);

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
//console.log("El área del triángulo es: " + areaTriangulo + " cm2");

console.groupEnd();

//código del círculo
console.group("Círculos");

//radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + " cm");

//diametro
function diametroCirculo(radio){
    return radio * 2 ;
} 
//console.log("El diámetro del circulo es: " + diametroCirculo + " cm");

//PI
const PI = Math.PI;
//console.log("PI  es: " + PI);

//circunferencia
function perimetroCirculo(radio){
    return diametroCirculo(radio) * PI;
} 
//console.log("El perímetro del circulo es: " + perimetroCirculo + " cm");

//area
function areaCirculo(radio){
    return (radio * radio) * PI;
} 
console.log("El área del circulo es: " + areaCirculo + " cm2");

console.groupEnd();


// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    
    alert(area);
}