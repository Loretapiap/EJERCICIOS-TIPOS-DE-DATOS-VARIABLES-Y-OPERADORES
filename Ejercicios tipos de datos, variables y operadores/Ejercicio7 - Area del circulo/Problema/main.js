var n0 = prompt("Que valor tiene? Ingrese '1' si es Radio; o '2' si es Diámetro");
while (!/^(\+|-)?[1-2]\d*(\.\d*)?$/.test(n0)){
n0 = prompt("Ingrese '1' si es Radio ó '2' si es diámetro");
}

if (n0 == "1") {
	var n1 = prompt("Ingrese valor de 'radio'");
while (!/^(\+|-)?[1-9]\d*(\.\d*)?$/.test(n1)){
n1 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}
var resultado = Math.PI * parseInt(n1) * parseInt(n1);
window.alert(resultado);
}

else if (n0 == "2") {
	var n2 = prompt("Ingrese valor de 'diámetro'");
while (!/^(\+|-)?[1-9]\d*(\.\d*)?$/.test(n2)){
n2 = prompt("el valor ingresado no es un numero, ingrese nuevamente");
}
var dmtro = parseInt(n2)/2;
var resultado2 = Math.PI * dmtro * dmtro
window.alert(resultado2);
}

// area = pi * r^2

