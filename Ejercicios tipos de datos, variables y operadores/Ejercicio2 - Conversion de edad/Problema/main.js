var n1 = prompt("Dime tu nombre");

var n2 = prompt("Dime tus años");
while (!/^([0-9])*$/.test(n2)){
n2 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

while (n2 == 0)
{
    n2 = prompt("No debe ser cero. Dime otro");
}

document.write("Hola! " + n1 + " <br> ");

var resultado = parseInt(n2) * 365;
document.write("Has vivido al menos " + resultado + " días!");
