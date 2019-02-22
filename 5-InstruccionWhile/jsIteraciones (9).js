function Mostrar()
{
	var arrayDinamico_numero = [];	
	var numeroMayor;
	var numeroMenor;
	var asignadorEspacio = 0;
	var decisionUsuario;
	var numeroTomado;
	do{
		numeroTomado = parseFloat(prompt("Ingrese un numero"));		
		if(isNaN(numeroTomado)){	
			alert("Ingrese un numero valido");
		}
		else{
			arrayDinamico_numero[asignadorEspacio] = numeroTomado;
			asignadorEspacio++;			
		}
		decisionUsuario = confirm("Desea agregar mas numeros?");		
	}while(decisionUsuario == true);
	numeroMayor = Math.max(...arrayDinamico_numero);
	numeroMenor = Math.min(...arrayDinamico_numero);
	if(isFinite(numeroMayor)){
	document.getElementById("maximo").value = numeroMayor;
	}
	if(isFinite(numeroMenor)){
		document.getElementById("minimo").value = numeroMenor;
	}
}//FIN DE LA FUNCIÓN 