function Mostrar()
{
	var numero;
	var contador;
	var suma;
	var promedio;
	contador = 0;
	suma = 0;
	do{
		numero = parseFloat(prompt("Ingrese un numero"));
		contador++;
		suma = suma + numero;		
	}while(contador <= 5){
		promedio = suma / contador;
		document.getElementById("suma").value = suma;
		document.getElementById("promedio").value = promedio;	
	}

}//FIN DE LA FUNCIÓN