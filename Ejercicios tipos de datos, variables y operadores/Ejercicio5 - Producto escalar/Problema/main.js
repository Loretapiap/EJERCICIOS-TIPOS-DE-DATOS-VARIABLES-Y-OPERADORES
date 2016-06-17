var n1 = prompt("Ingrese 'x' del primer vector");
while (!/^(\+|-)?[1-9]\d*(\.\d*)?$/.test(n1)){
n1 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

var n2 = prompt("Ingrese 'y' del primer vector");
while (!/^(\+|-)?[1-9]\d*(\.\d*)?$/.test(n2)){
n2 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

var n3 = prompt("Ingrese 'x' del segundo vector");
while (!/^(\+|-)?[1-9]\d*(\.\d*)?$/.test(n3)){
n3 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

var n4 = prompt("Ingrese 'y' del segundo vector");
while (!/^(\+|-)?[1-9]\d*(\.\d*)?$/.test(n4)){
n4 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

var resultado = (parseInt(n1) * parseInt(n3)) + (parseInt(n2) * parseInt(n4));

window.alert("El producto escalar de los vectores" + "\n" + "(" +n1 + "," + n2 + ")" + " y " + "(" + n3 + "," + n4 + ") es " +resultado);  

//U*V= (u1*v1) + (u2*v2)

