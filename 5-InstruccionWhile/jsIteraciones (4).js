function Mostrar()
{
	var numero;
	var contador;

	contador = 1;

	do{
	contador++
	numero = parseInt(prompt("ingrese un número entre 0 y 9."));
	}while ((numero < 0 || numero > 9) && contador < 5){
		if(numero < 10 && numero >=0) {
		document.getElementById("Numero").value = numero;
		}
		else{
			alert("ingrese un numero dentro de los valores");
		}
	}

}//FIN DE LA FUNCIÓN