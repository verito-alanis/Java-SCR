// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function jubilacion() {
	var aportacion, edad, persona, sexo;
	persona = 1;
	do {
		document.write("Datos de persona...",persona,'<BR/>');
		document.write("¿Cuántos años lleva aportando (Número entero)?",'<BR/>');
		aportacion = prompt();
		document.write("¿Qué edad tiene actualmente (Número entero)?",'<BR/>');
		edad = prompt();
		document.write("¿es mujer u hombre(M=Mujer, H=Hombre)?",'<BR/>');
		sexo = prompt();
		if (aportacion>20) {
			if (sexo=="M" || sexo=="m") {
				if (edad>60) {
					document.write("Si tiene derecho a la jubilación",'<BR/>');
				} else {
					document.write("No tiene derecho a la jubilación",'<BR/>');
				}
			} else {
				if (edad<65) {
					document.write("Si tiene derecho a la jubilación",'<BR/>');
				} else {
					document.write("No tiene derecho a la jubilación",'<BR/>');
				}
			}
		} else {
			document.write("No tiene derecho a la jubilación",'<BR/>');
		}
		document.write("Siguiente consulta",'<BR/>');
		persona = persona+1;
	} while (persona!==11);
}

