var n1 = prompt("Dime un numero");
while (!/^([0-9])*$/.test(n1)){
n1 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

var resultado = parseInt(n1) + 5;
var resultado2 = resultado + 21;
var resultado3 = resultado2 - 4;

window.alert("Número introducido: " + n1 + "\n" + "Contadores:               " + resultado + " " + resultado2 + " " + resultado3);  