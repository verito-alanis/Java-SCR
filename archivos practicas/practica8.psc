Algoritmo jubilacion
	persona <- 1
	Repetir
		Escribir 'Datos de persona...',persona
		Escribir '�Cu�ntos a�os lleva aportando (N�mero entero)?'
		Leer aportacion
		Escribir '�Qu� edad tiene actualmente (N�mero entero)?'
		Leer edad
		Escribir '�es mujer u hombre(M=Mujer, H=Hombre)?'
		Leer sexo
		Si aportaci�n>20 Entonces
			Si sexo=='M' O sexo=='m' Entonces
				Si edad>60 Entonces
					Escribir 'Si tiene derecho a la jubilaci�n'
				SiNo
					Escribir 'No tiene derecho a la jubilaci�n'
				FinSi
			SiNo
				Si edad<65 Entonces
					Escribir 'Si tiene derecho a la jubilaci�n'
				SiNo
					Escribir 'No tiene derecho a la jubilaci�n'
				FinSi
			FinSi
		SiNo
			Escribir 'No tiene derecho a la jubilaci�n'
		FinSi
		Escribir 'Siguiente consulta'
		persona<-persona+1
	Hasta Que persona==11 
	
FinAlgoritmo
