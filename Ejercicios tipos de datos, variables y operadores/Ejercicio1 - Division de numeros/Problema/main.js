var n1 = prompt("Dime un numero");
while (!/^([0-9])*$/.test(n1)){
n1 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

var n2 = prompt("Dime otro numero");
while (!/^([0-9])*$/.test(n2)){
n2 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

while (n2 == 0)
{
    n2 = prompt("No debe ser cero. Dime otro");
}

document.write(n1 + " dividido entre "+ n2 + " es: ");
var resultado = parseInt(n1) / parseInt(n2);
document.write(resultado);