// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function salariosemanal() {
	var base, horas, salario;
	document.write("Ingresarel número de horas trabajadas en la semana...",'<BR/>');
	horas = Number(prompt());
	document.write("Ingresar el salario base por hora...",'<BR/>');
	base = Number(prompt());
	salario = horas*base;
	document.write("El salario semanal será de: ",salario,"pesos",'<BR/>');
	horas = Number(prompt());
}

