
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


function sin_titulo() {
	var numero01;
	numero01 = Number=prompt("Insgresa un n�mero(puede ser positivo o negativo):",);
	if (numero01>=0) {
		alert("= El n�mero ingresado es NEGATIVO =",'<BR/>');
	} else {
		alert("= El n�mero ingresado es POSITIVO =",'<BR/>');
	}
}

