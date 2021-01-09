
function suma() {
	var numero01, numero02, resultado;

	numero01 = Number(prompt("Ingresar el primer número: ",));
	numero02 = Number(prompt("Ingresar el segundo número: ",));

	resultado = numero01+numero02;

	alert("El resultado de la suma es: "+resultado);
}

function signo() {
	var numero01;
	numero01 = Number=prompt("Insgresa un número(puede ser positivo o negativo):",);
	if (numero01>=0) {
		alert("= El número ingresado es POSITIVO =",'<BR/>');
	} else {
		alert("= El número ingresado es NEGATIVO =",'<BR/>');
	}
}

function calculadora() {
	var numero01, numero02, opcion_num, resultado;
	document.write("Posibles a realizar:",'<BR/>');
	document.write("1. Suma",'<BR/>');
	document.write("2. Resta",'<BR/>');
	document.write("3. Multiplicar",'<BR/>');
	document.write("4. Dividir",'<BR/>');
	document.write("�Qu� operaci�n deseas realizar? :",'<BR/>');
	opcion_num = prompt();
	if (opcion_num==1) {
		document.write("Igresar el primer valor",'<BR/>');
		numero01 = Number(prompt());
		document.write("Ingresar el segundo valor",'<BR/>');
		numero02 = Number(prompt());
		resultado = numero01+numero02;
		document.write("la suma de",numero01,"+",numero02,"=",resultado,'<BR/>');
	} else {
		if (opcion_num==2) {
			document.write("Igresar el primer valor",'<BR/>');
			numero01 = Number(prompt());
			document.write("Ingresar el segundo valor",'<BR/>');
			numero02 = Number(prompt());
			resultado = numero01-numero02;
			document.write("la resta de",numero01,"-",numero02,"=",resultado,'<BR/>');
		} else {
			if (opcion_num==3) {
				document.write("Igresar el primer valor",'<BR/>');
				numero01 = Number(prompt());
				document.write("Ingresar el segundo valor",'<BR/>');
				numero02 = Number(prompt());
				resultado = numero01*numero02;
				document.write("la multiplicaci�n de",numero01,"X",numero02,"=",resultado,'<BR/>');
			} else {
				if (opcion_num==4) {
					document.write("Igresar el primer valor",'<BR/>');
					numero01 = Number(prompt());
					document.write("Ingresar el segundo valor",'<BR/>');
					numero02 = Number(prompt());
					resultado = numero01/numero02;
					document.write("la divisi�n de",numero01,"/",numero02,"=",resultado,'<BR/>');
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
	}
	alert("La suma de los primeros 100 n�meros pares es...",'<BR/>');
	alert(suma_par,'<BR/>');
	alert("La suma de los primeros 100 n�meros impares es...",'<BR/>');
	alert(suma_impar,'<BR/>');
}

function tablamultiplicar() {
	var contador01, numero01;
	numero01 = prompt(Ingresar un número para generar su tabla de multipicar);
	for (contador01=1;contador01<=10;contador01++) {
		alert(numero01,"x",contador01,"=",(numero01*contador01),'<BR/>');
	}
}

function salariosemanal() {
	var base, horas, salario;
	document.write("Ingresarel n�mero de horas trabajadas en la semana...",'<BR/>');
	horas = Number(prompt());
	document.write("Ingresar el salario base por hora...",'<BR/>');
	base = Number(prompt());
	salario = horas*base;
	document.write("El salario semanal ser� de: ",salario,"pesos",'<BR/>');
	horas = Number(prompt());
}

function jubilacion() {
	var aportacion, edad, persona, sexo;
	persona = 1;
	do {
		document.write("Datos de persona...",persona,'<BR/>');
		document.write("�Cu�ntos a�os lleva aportando (N�mero entero)?",'<BR/>');
		aportacion = prompt();
		document.write("�Qu� edad tiene actualmente (N�mero entero)?",'<BR/>');
		edad = prompt();
		document.write("�es mujer u hombre(M=Mujer, H=Hombre)?",'<BR/>');
		sexo = prompt();
		if (aportacion>20) {
			if (sexo=="M" || sexo=="m") {
				if (edad>60) {
					document.write("Si tiene derecho a la jubilaci�n",'<BR/>');
				} else {
					document.write("No tiene derecho a la jubilaci�n",'<BR/>');
				}
			} else {
				if (edad<65) {
					document.write("Si tiene derecho a la jubilaci�n",'<BR/>');
				} else {
					document.write("No tiene derecho a la jubilaci�n",'<BR/>');
				}
			}
		} else {
			document.write("No tiene derecho a la jubilaci�n",'<BR/>');
		}
		document.write("Siguiente consulta",'<BR/>');
		persona = persona+1;
	} while (persona!==11);
}



