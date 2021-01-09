Algoritmo calculadora
	Escribir "Posibles a realizar:"
	Escribir "1. Suma"
	Escribir "2. Resta"
	Escribir "3. Multiplicar"
	Escribir "4. Dividir"
	Escribir "¿Qué operación deseas realizar? :"
	
	Leer opcion_num
	
	Si opcion_num==1 Entonces
		Escribir "Igresar el primer valor"
		Leer numero01
		Escribir "Ingresar el segundo valor"
		Leer numero02
		resultado<-numero01+numero02
		Escribir "la suma de", numero01, "+", numero02, "=", resultado
	SiNo
		Si opcion_num==2 Entonces
			Escribir "Igresar el primer valor"
			Leer numero01
			Escribir "Ingresar el segundo valor"
			Leer numero02
			resultado<-numero01-numero02
			Escribir "la resta de", numero01, "-", numero02, "=", resultado
		SiNo
			Si opcion_num==3 Entonces
				Escribir "Igresar el primer valor"
				Leer numero01
				Escribir "Ingresar el segundo valor"
				Leer numero02
				resultado<-numero01*numero02
				Escribir "la multiplicación de", numero01, "X", numero02, "=", resultado
			SiNo
				Si opcion_num==4 Entonces
					Escribir "Igresar el primer valor"
					Leer numero01
					Escribir "Ingresar el segundo valor"
					Leer numero02
					resultado<-numero01/numero02
					Escribir "la división de", numero01, "/", numero02, "=", resultado
				SiNo
					
				Fin Si
			Fin Si
		Fin Si
	Fin Si
FinAlgoritmo
