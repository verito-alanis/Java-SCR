
function suma() {
	var numero01, numero02, resultado;

	numero01 = Number(prompt("Ingresar el primer número: ",));
	numero02 = Number(prompt("Ingresar el segundo número: ",));

	resultado = numero01+numero02;

	alert("El resultado de la suma es: " + resultado);
}

function signo() {
	var numero01;
	numero01 = Number=prompt("Ingresa un número(puede ser positivo o negativo):",);
	if (numero01>=0) {
		alert("= El número ingresado es POSITIVO =");
	} else {
		alert("= El número ingresado es NEGATIVO =",'<BR/>');
	}
}

function calculadora() {
	var numero01, numero02, opcion_num, resultado;
	opcion_num=Number(prompt("¿Qué operación deseas realizar?"+"Posibles a realizar: 1. Suma, 2. Resta, 3. Multiplicar, 4. Dividir"));
	if (opcion_num==1) {
		numero01 = Number(prompt("Ingresar el primer número: "));
		numero02 = Number(prompt("Ingresar el segundo número: "));

		resultado = numero01+numero02;

		alert("El resultado de la suma es: "+resultado,);
	} else {
		if (opcion_num==2) {
			numero01 = Number(prompt("Igresar el primer valor"));
			numero02 = Number(prompt("Ingresar el segundo valor"));
			resultado = numero01-numero02;
			alert("la resta de "+numero01+" - "+numero02+" = "+resultado);
		} else {
			if (opcion_num==3) {
				numero01 = Number(prompt("Igresar el primer valor"));
				numero02 = Number(prompt("Ingresar el segundo valor"));
				resultado = numero01*numero02;
				alert("la multiplicación de "+numero01+" X "+numero02+" = "+resultado);
			} else {
				if (opcion_num==4) {
					numero01 = Number(prompt("Igresar el primer valor"));
					numero02 = Number(prompt("Ingresar el segundo valor"));
					resultado = numero01/numero02;
					alert("la división de "+numero01+" / "+numero02+" = "+resultado,'<BR/>');
				} else {
				}
			}
		}
	}
}

function mescalendario() {
	var numeromes;
	numeromes = Number(prompt("Ingresa un número entre el 1 al 12, para visualizar el mes"));
	switch (numeromes) {
	case 1:
		alert("Número de mes válido",'<BR/>');
		alert("El mes es ENERO",'<BR/>');
		break;
	case 2:
		alert("Número de mes válido",'<BR/>');
		alert("El mes es FEBRERO",'<BR/>');
		break;
	case 3:
		alert("Número de mes válido",'<BR/>');
		alert("El mes es MARZO",'<BR/>');
		break;
	case 4:
		alert("Número de mes válido",'<BR/>');
		alert("El mes es ABRIL",'<BR/>');
		break;
	case 5:
		alert("Número de mes válido",'<BR/>');
		alert("El mes es MAYO",'<BR/>');
		break;
	case 6:
		alert("Número de mes válido",'<BR/>');
		alert("El mes es JUNIO",'<BR/>');
		break;
	case 7:
		alert("Número de mes válido",'<BR/>');
		alert("El mes es JULIO",'<BR/>');
		break;
	case 8:
		alert("Número de mes válido",'<BR/>');
		alert("El mes es AGOSTO",'<BR/>');
		break;
	case 9:
		alert("Número de mes válido",'<BR/>');
		alert("El mes es SEPTIEMBRE",'<BR/>');
		break;
	case 10:
		alert("Número de mes válido",'<BR/>');
		alert("El mes es OCTUBRE",'<BR/>');
		break;
	case 11:
		alert("Número de mes válido",'<BR/>');
		alert("El mes es NOVIEMBRE",'<BR/>');
		break;
	case 12:
		alert("Número de mes válido",'<BR/>');
		alert("El mes es DICIEMBRE",'<BR/>');
		break;
	default:
		alert("Número de mes inválido",'<BR/>');
		alert("Deberá iniciar el programa",'<BR/>');
	}
}


function sumapareseimpares() {
	var i, suma_impar, suma_par;
	i = 1;
	suma_par = 0;
	suma_impar = 0;
	while (i<101) {
		if (i%2==0) {
			suma_par = suma_par+i;
		} else {
			suma_impar = suma_impar+i;
		}
	i=i+1
	}
	alert("La suma de los primeros 100 números pares es...",'<BR/>');
	alert(suma_par,'<BR/>');
	alert("La suma de los primeros 100 números impares es...",'<BR/>');
	alert(suma_impar,'<BR/>');
}

function tablamultiplicar() {
	var contador01, numero01;
	numero01 = Number(prompt("Ingresar un número para generar su tabla de multipicar"));
	for (contador01 = 1;contador01 <= 10;contador01 ++) {
		alert(numero01+" x "+contador01+" = "+(numero01 * contador01));
	}
}

function salariosemanal() {
	var base, horas, salario;
	horas = Number(prompt("Ingresarel número de horas trabajadas en la semana..."));
	base = Number(prompt("Ingresar el salario base por hora..."));
	salario = horas*base;
	alert(salario);

}

function jubilacion() {
	var aportacion, edad, persona, sexo;
	persona = 1;
	do {
		persona = Number(prompt("Datos de persona...",persona,));
		aportacion = Number(prompt("¿Cuántos años lleva aportando (Número entero)?"));
		edad = Number(prompt("¿Qué edad tiene actualmente (Número entero)?"));
		sexo = Number(prompt("¿Es mujer u hombre(M=Mujer, H=Hombre)?"));
		if (aportacion>20) {
			if (sexo=="M" || sexo=="m") {
				if (edad>60) {
					alert("Si tiene derecho a la jubilación",'<BR/>');
				} else {
					alert("No tiene derecho a la jubilación",'<BR/>');
				}
			} else {
				if (edad<65) {
					alert("Si tiene derecho a la jubilación",'<BR/>');
				} else {
					alert("No tiene derecho a la jubilación",'<BR/>');
				}
			}
		} else {
			alert("No tiene derecho a la jubilación",'<BR/>');
		}
		alert("Siguiente consulta",'<BR/>');
		persona = persona+1;
	} while (persona!==11);
}



