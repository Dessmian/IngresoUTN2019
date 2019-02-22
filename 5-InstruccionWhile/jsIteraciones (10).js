function Mostrar()
{
	var arrayDinamico_numerosPositivos = [];	
	var arrayDinamico_numerosNegativos = [];
	var arrayDinamico_numerosIncluyeTodos = [];
	var asignadorEspacioPositivos = 0;
	var asignadorEspacioNegativos = 0;
	var asignadorEspacioIncluyeTodos = 0;
	var decisionUsuario;
	var numeroTomado;
	var numeroNegativo;
	var numeroPositivo;
	var sumaDeNegativos = 0;
	var sumaDePositivos = 0;
	var contadorSumaDeNegativos = 0;
	var contadorSumaDePositivos = 0;
	var contadorDeCeros = 0;
	var cantidadDeCeros = 0;
	var contadorDePares = 0;
	var cantidadDePares = 0;
	var promedioDePositivos;
	var promedioDeNegativos;
	var diferenciaPositivosNegativos;
	do{
		numeroTomado = parseFloat(prompt("Ingrese un numero"));		
		if(isNaN(numeroTomado) || !(isFinite(numeroTomado)) ){	
			alert("Ingrese un numero valido");
		}
		else if(numeroTomado > 0){
			arrayDinamico_numerosPositivos[asignadorEspacioPositivos] = numeroTomado;
			asignadorEspacioPositivos++;			
		}
		else if(numeroTomado < 0){
			arrayDinamico_numerosNegativos[asignadorEspacioNegativos] = numeroTomado;
			asignadorEspacioNegativos++;
		}
		if(!(isNaN(numeroTomado)) && isFinite(numeroTomado)){
			arrayDinamico_numerosIncluyeTodos[asignadorEspacioIncluyeTodos] = numeroTomado;
			asignadorEspacioIncluyeTodos++;
		}
		decisionUsuario = confirm("Desea agregar mas numeros?");		
	}while(decisionUsuario == true);
	while(contadorSumaDeNegativos < asignadorEspacioNegativos){		
		numeroNegativo = arrayDinamico_numerosNegativos[contadorSumaDeNegativos];
		sumaDeNegativos = sumaDeNegativos + numeroNegativo;
		contadorSumaDeNegativos++;
	}
	while(contadorSumaDePositivos < asignadorEspacioPositivos){		
		numeroPositivo = arrayDinamico_numerosPositivos[contadorSumaDePositivos];
		sumaDePositivos = sumaDePositivos + numeroPositivo;
		contadorSumaDePositivos++;
	}
	while(contadorDeCeros < asignadorEspacioIncluyeTodos){
		if(arrayDinamico_numerosIncluyeTodos[contadorDeCeros] == 0){
			cantidadDeCeros++;
		}
		contadorDeCeros++;
	}
	while(contadorDePares < asignadorEspacioIncluyeTodos){
		if((arrayDinamico_numerosIncluyeTodos[contadorDeCeros] % 2) == 0 && arrayDinamico_numerosIncluyeTodos[contadorDeCeros] != 0){
			cantidadDePares++;
		}
		contadorDePares++;
	}
	promedioDePositivos = sumaDePositivos / contadorSumaDePositivos;
	promedioDeNegativos = sumaDeNegativos / contadorSumaDeNegativos;
	diferenciaPositivosNegativos = sumaDePositivos - sumaDeNegativos;

	document.write("Suma de negativos "+sumaDeNegativos + "\nSuma de positivos "+sumaDePositivos +"\nCantidad de negativos "+contadorSumaDeNegativos +"\nCantidad de positivos "+contadorSumaDePositivos +"\nCantidad de ceros "+cantidadDeCeros +"\nCantidad de numeros pares "+cantidadDePares + "\nPromedio de positivos "+promedioDePositivos + "\nPromedio de negativos "+promedioDeNegativos +"\nDiferencia entre positivos y negativos "+diferenciaPositivosNegativos);

	/*console.log(cantidadDeCeros);
	console.log("numero positivos "+arrayDinamico_numerosPositivos);
	console.log("numeros negativos "+arrayDinamico_numerosNegativos);
	console.log("incluye todos "+arrayDinamico_numerosIncluyeTodos);
	console.log("suma de negativos "+sumaDeNegativos);
	console.log("suma de positivos "+sumaDePositivos);
	console.log("cantidad de positivos "+asignadorEspacioPositivos);
	console.log("cantidad de negativos "+asignadorEspacioNegativos);*/
}//FIN DE LA FUNCIÓN