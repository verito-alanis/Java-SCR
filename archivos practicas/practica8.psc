Algoritmo jubilacion
	persona <- 1
	Repetir
		Escribir 'Datos de persona...',persona
		Escribir '¿Cuántos años lleva aportando (Número entero)?'
		Leer aportacion
		Escribir '¿Qué edad tiene actualmente (Número entero)?'
		Leer edad
		Escribir '¿es mujer u hombre(M=Mujer, H=Hombre)?'
		Leer sexo
		Si aportación>20 Entonces
			Si sexo=='M' O sexo=='m' Entonces
				Si edad>60 Entonces
					Escribir 'Si tiene derecho a la jubilación'
				SiNo
					Escribir 'No tiene derecho a la jubilación'
				FinSi
			SiNo
				Si edad<65 Entonces
					Escribir 'Si tiene derecho a la jubilación'
				SiNo
					Escribir 'No tiene derecho a la jubilación'
				FinSi
			FinSi
		SiNo
			Escribir 'No tiene derecho a la jubilación'
		FinSi
		Escribir 'Siguiente consulta'
		persona<-persona+1
	Hasta Que persona==11 
	
FinAlgoritmo
