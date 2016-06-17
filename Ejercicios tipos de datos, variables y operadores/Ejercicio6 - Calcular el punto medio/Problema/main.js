var n1 = prompt("Ingrese 'x' de su coordenada 1");
while (!/^(\+|-)?[1-9]\d*(\.\d*)?$/.test(n1)){
n1 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

var n2 = prompt("Ingrese 'y' de su coordenada 1");
while (!/^(\+|-)?[1-9]\d*(\.\d*)?$/.test(n2)){
n2 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

var n3 = prompt("Ingrese 'x' de su coordenada 2");
while (!/^(\+|-)?[1-9]\d*(\.\d*)?$/.test(n3)){
n3 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

var n4 = prompt("Ingrese 'y' de su coordenada 2");
while (!/^(\+|-)?[1-9]\d*(\.\d*)?$/.test(n4)){
n4 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}

var resultado = (parseInt(n1) + parseInt(n3)) / 2;
var resultado2 = (parseInt(n2) + parseInt(n4)) / 2;

window.alert("El punto medio del segmento de extremos," + "\n" + "(" +n1 + "," + n2 + ")" + " y " + "(" + n3 + "," + n4 + ") es (" + resultado + "," + resultado2 + ")");  

//m = ((n1 + n3)/2 , (n2 + n4)/2)

