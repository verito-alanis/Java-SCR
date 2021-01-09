// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function tablamultiplicar() {
	var contador01, numero01;
	document.write("Ingresar un número ara generar su tabla de multipicar",'<BR/>');
	numero01 = prompt();
	for (contador01=1;contador01<=10;contador01++) {
		document.write(numero01,"x",contador01,"=",(numero01*contador01),'<BR/>');
	}
}

