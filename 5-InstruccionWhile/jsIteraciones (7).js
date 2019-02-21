function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

	do{
		contador++;
		numero = parseFloat(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		respuesta = prompt("Desea realizar la operacion?. Ingrese s para Si");
	}while( respuesta != "s");
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN