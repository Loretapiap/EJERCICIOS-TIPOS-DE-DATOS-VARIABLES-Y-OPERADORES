var a11 = prompt("Ingrese 'a11' de su matrix");
var a12 = prompt("Ingrese 'a12' de su matrix");
var a21 = prompt("Ingrese 'a21' de su matrix");
var a22 = prompt("Ingrese 'a22' de su matrix");

var resultado = parseInt(a11) * parseInt(a22) - parseInt(a12) * parseInt(a21)
document.write("Su determinante es: " + resultado)